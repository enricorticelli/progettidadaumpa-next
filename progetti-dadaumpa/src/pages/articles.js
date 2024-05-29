import React from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Layout from "@/components/layout";
import Blog from "@/components/blog";

import ArticlesSkeleton from "@/components/skeletons/articles-skeleton";
import SidebarSkeleton from "@/components/skeletons/sidebar-skeleton";

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
        npm;
        throw new Error("Failed to fetch articles");
      }
      return response.json();
    },
  });

  const {
    data: imagesData,
    error: imagesError,
    isLoading: imagesAreLoading,
  } = useQuery({
    queryKey: ["fetchImages"],
    queryFn: async () => {
      const response = await fetch("/api/fetchImages");
      if (!response.ok) {
        npm;
        throw new Error("Failed to fetch images");
      }
      return response.json();
    },
  });

  if (
    artistIsLoading ||
    artistError ||
    articleIsLoading ||
    articleError ||
    imagesAreLoading ||
    imagesError
  ) {
    return (
      <Layout images={[]}>
        <ArticlesSkeleton />
        <SidebarSkeleton />
      </Layout>
    );
  }

  return (
    <Layout images={imagesData.images}>
      <Blog articles={articleData.articles} />
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
