import { type ReactNode, useEffect, useState } from "react";
import { get } from "./utils/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts.tsx";
import fetchingImage from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage.tsx";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const TEST_URL = "https://jsonplaceholder.typicode.com/posts/1";

  // const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>()
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | undefined>();

  //need to get the data, and update state aka useEffect to prevent the infinite loop
  useEffect(() => {
    //to get around the async issue with useEfect, create a helper function
    //nested in the useEffect
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const data = (await get(TEST_URL)) as unknown as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map((post) => {
          return {
            id: post.id,
            title: post.title,
            body: post.body,
          };
        });
        setFetchedPosts(blogPosts);
      } catch (error) {
        // if(error instanceof Error)
        setError((error as Error).message);
        // setError("Failed to fetch Posts");
      }

      setIsFetching(false);
    }

    fetchPosts();
    return () => {};
  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text="ERROR!" />;
  }

  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts..</p>;
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img src={fetchingImage} alt="Lorem ipsum" />
      {content}
    </main>
  );
}

export default App;
