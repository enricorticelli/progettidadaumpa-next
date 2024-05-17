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
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchArticles"],
    queryFn: async () => {
      const response = await fetch("/api/fetchArticles");
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }
      return response.json();
    },
  });

  if (isLoading || error) {
    return (
      <Layout>
        <Skeleton />
        <Sidebar />
      </Layout>
    );
  }

  return (
    <Layout>
      <Articles articles={data.articles} />
      <Sidebar />
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
