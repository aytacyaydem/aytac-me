import Hero from "@/components/Hero";
import HeroStatic from "@/components/HeroStatic";
import APIEndpoints from "@/constants/api-endpoints";
import parseNotionPagesForHomepageCard from "@/lib/parse-notion-pages";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const response = await fetch(APIEndpoints.api.notion.posts);
  const { allPosts } = await response.json();
  const allPostsSerialized = parseNotionPagesForHomepageCard(
    allPosts
  ) as HomepagePostCard[];

  console.log({ allPostsSerialized });

  return (
    <div className=" py-4">
      <HeroStatic />
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
      <Button>Button</Button>
    </div>
  );
}
