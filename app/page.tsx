import Hero from '@/components/Hero';
import APIEndpoints from '@/constants/api-endpoints';
import parseNotionPagesForHomepageCard from '@/lib/parse-notion-pages';

export default async function Home() {
  const response = await fetch(APIEndpoints.api.notion.posts);
  const { allPosts } = await response.json();
  const allPostsSerialized = parseNotionPagesForHomepageCard(allPosts) as HomepagePostCard[];

  console.log({ allPostsSerialized });

  return (
    <div className="flex py-4 ">
      <Hero />
    </div>
  );
}
