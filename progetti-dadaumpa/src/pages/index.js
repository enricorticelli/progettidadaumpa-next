import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Articles from "../components/articles";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/fetchArticles");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Layout>
      <Articles articles={articles} />
      <Sidebar />
    </Layout>
  );
}
