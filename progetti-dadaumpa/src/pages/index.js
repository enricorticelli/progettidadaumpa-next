import React from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar";
import Articles from "@/components/articles";
import Skeleton from "@/components/skeleton";

const queryClient = new QueryClient();

function Home() {
  const {
    data: artistData,
    error: artistError,
    isLoading: artistIsLoading,
  } = useQuery({
    queryKey: ["fetchArtists"],
    queryFn: async () => {
      const response = await fetch("/api/fetchArtists");
      if (!response.ok) {
        throw new Error("Failed to fetch artists");
      }
      return response.json();
    },
  });

  const {
    data: articleData,
    error: articleError,
    isLoading: articleIsLoading,
  } = useQuery({
    queryKey: ["fetchArticles"],
    queryFn: async () => {
      const response = await fetch("/api/fetchArticles");
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      return response.json();
    },
  });

  if (artistIsLoading || artistError || articleIsLoading || articleError) {
    return (
      <Layout artists={[]}>
        <Skeleton />
        <Sidebar artists={[]} />
      </Layout>
    );
  }

  return (
    <Layout artists={artistData.artists}>
      <Articles articles={articleData.articles} />
      <Sidebar artists={artistData.artists} />
    </Layout>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
