import NotionClient from '@/lib/notion';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    const retrieveUserResponse = await NotionClient.users.retrieve({ user_id: id });
    return NextResponse.json({ retrieveUserResponse });
  }
  const listUsersResponse = await NotionClient.users.list({});
  return NextResponse.json({ listUsersResponse });
}
