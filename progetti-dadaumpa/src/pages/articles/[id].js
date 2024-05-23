import React from "react";
import { useRouter } from "next/router";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Sidebar from "@/components/sidebar";
import Layout from "@/components/layout";
import ArticlesSkeleton from "@/components/skeletons/articles-skeleton";
import SidebarSkeleton from "@/components/skeletons/sidebar-skeleton";

import Article from "@/components/article";

const queryClient = new QueryClient();

function ArticleContent({ idArticolo }) {
  const {
    data: articleData,
    error: articleError,
    isLoading: articleIsLoading,
  } = useQuery({
    queryKey: ["fetchArticle", idArticolo],
    queryFn: async () => {
      const response = await fetch(`/api/fetchArticle?id=${idArticolo}`);
      if (!response.ok) {
        throw new Error("Failed to fetch article");
      }
      return response.json();
    },
    enabled: !!idArticolo, // Only run the query if idArticolo is available
  });

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

  if (artistIsLoading || artistError || articleIsLoading || articleError) {
    return (
      <Layout artists={[]} isHome={false}>
        <ArticlesSkeleton />
        <SidebarSkeleton />
      </Layout>
    );
  }

  return (
    <Layout artists={artistData.artists} isHome={false}>
      <Article article={articleData} />
      <Sidebar artists={artistData.artists} />
    </Layout>
  );
}

export default function ArticlePage() {
  const router = useRouter();
  const idArticolo = router.query.id;

  return (
    <QueryClientProvider client={queryClient}>
      <ArticleContent idArticolo={idArticolo} />
    </QueryClientProvider>
  );
}
