import Header from '@/components/Header';
import ThemeModeToggle from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import APIEndpoints from '@/constants/api-endpoints';
import parseNotionPagesForHomepageCard from '@/lib/parse-notion-pages';

export default async function Home() {
  const response = await fetch(APIEndpoints.api.notion.posts);
  const { allPosts } = await response.json();
  const allPostsSerialized = parseNotionPagesForHomepageCard(allPosts) as HomepagePostCard[];

  console.log({ allPostsSerialized });

  return (
    <div>
      <Header />
    </div>
  );
}
