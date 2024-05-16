import React from "react";

import Sidebar from "./components/Sidebar";
import Articles from "./components/Articles";

export default function Home() {
  const articles = [
    {
      imageUrl: "https://source.unsplash.com/collection/1346951/1000x500?sig=1",
      imageHeight: 300,
      category: "Technology",
      title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
      author: "David Grzyb",
      publishedDate: "April 25th, 2020",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
    },
    {
      imageUrl: "https://source.unsplash.com/collection/1346951/1000x500?sig=2",
      imageHeight: 300,
      category: "Automotive, Finance",
      title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
      author: "David Grzyb",
      publishedDate: "January 12th, 2020",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
    },
    {
      imageUrl: "https://source.unsplash.com/collection/1346951/1000x500?sig=3",
      imageHeight: 500,
      category: "Sports",
      title: "Lorem Ipsum Dolor Sit Amet Dolor Sit Amet",
      author: "David Grzyb",
      publishedDate: "October 22nd, 2019",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta volutpat. In sit amet posuere magna..",
    },
  ];

  return (
    <main className="container mx-auto flex flex-wrap py-6">
      {/* Posts Section */}
      <Articles articles={articles} />

      {/* Sidebar Section */}
      <Sidebar />
    </main>
  );
}
