import React from "react";

import Sidebar from "./components/Sidebar";
import Articles from "./components/Articles";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-wrap py-6">
      {/* Posts Section */}
      <Articles />

      {/* Sidebar Section */}
      <Sidebar />
    </main>
  );
}
