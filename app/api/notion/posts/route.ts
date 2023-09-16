// Write an handler for the  get method of the  /api/notion/posts  route that returns a list of posts from the Notion API.
import NotionClient from '@/lib/notion';
import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { NextResponse } from 'next/server';

export async function GET() {
  const NOTION_DB_ID = process.env.NOTION_DB_ID;

  if (!NOTION_DB_ID) {
    return NextResponse.json({ error: 'Notion DB ID has not provided' }, { status: 500 });
  }

  const listPostsResponse = (await NotionClient.databases.query({
    database_id: NOTION_DB_ID,
    filter: {
      property: 'status',
      select: {
        equals: 'PUBLISHED',
      },
    },
  })) as QueryDatabaseResponse;

  if (!listPostsResponse?.results) {
    return NextResponse.json({ error: '404 Not Found' }, { status: 404 });
  }

  const allPosts = listPostsResponse.results as PageObjectResponse[];

  return NextResponse.json({ allPosts });
}
