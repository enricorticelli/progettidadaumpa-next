import React from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Layout from "@/components/layout";
import Sidebar from "@/components/sidebar";
import Articles from "@/components/summary-articles";
import ArticlesSkeleton from "@/components/skeletons/articles-skeleton";
import SidebarSkeleton from "@/components/skeletons/sidebar-skeleton";
import About from "@/components/about";
import Slideshow from "@/components/slideshow";

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
      <Articles articles={articleData.articles} />
      <Sidebar artists={artistData.artists} />
      <About />
      <Slideshow artists={artistData.artists} />
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
