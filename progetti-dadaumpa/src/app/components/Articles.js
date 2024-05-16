import React from "react";
import Image from "next/image";

const Articles = ({ articles }) => {
  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      {articles.map((article, index) => (
        <article key={index} className="flex flex-col shadow my-4">
          <a href="#" className="hover:opacity-75">
            <Image
              src={article.imageUrl}
              width={1000}
              height={article.imageHeight}
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </a>
          <div className="bg-white flex flex-col justify-start p-6">
            <a
              href="#"
              className="text-blue-700 text-sm font-bold uppercase pb-4">
              {article.category}
            </a>
            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
              {article.title}
            </a>
            <p className="text-sm pb-3">
              By{" "}
              <a href="#" className="font-semibold hover:text-gray-800">
                {article.author}
              </a>
              , Published on {article.publishedDate}
            </p>
            <a href="#" className="pb-6">
              {article.excerpt}
            </a>
            <a href="#" className="uppercase text-gray-800 hover:text-black">
              Continue Reading <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>
      ))}
      {/* Pagination */}
      <div className="flex items-center py-8">
        <a
          href="#"
          className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center">
          1
        </a>
        <a
          href="#"
          className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center">
          2
        </a>
        <a
          href="#"
          className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3">
          Next <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </section>
  );
};

export default Articles;
