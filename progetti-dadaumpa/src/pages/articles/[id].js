import React from "react";
import { useRouter } from "next/router";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Sidebar from "@/components/sidebar";
import Layout from "@/components/layout";
import Skeleton from "@/components/skeleton";
import Article from "@/components/article";

const queryClient = new QueryClient();

function ArticleContent({ idArticolo }) {
  const { data, error, isLoading } = useQuery({
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

  if (isLoading || error) {
    return (
      <>
        <Skeleton />
      </>
    );
  }

  return (
    <>
      <Article article={data} />
    </>
  );
}

export default function ArticlePage() {
  const router = useRouter();
  const idArticolo = router.query.id;

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <ArticleContent idArticolo={idArticolo} />
      </QueryClientProvider>
      <Sidebar />
    </Layout>
  );
}
