export default function ArticlesSkeleton() {
  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      <article className="min-w-full flex flex-col shadow my-4 animate-pulse">
        <div className="w-full h-64 bg-gray-200 rounded"></div>
        <div className="bg-white flex flex-col justify-start p-6">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 my-2"></div>
          <div className="h-5 bg-gray-200 rounded w-32"></div>
          <div className="h-4 bg-gray-200 rounded w-full mt-6"></div>
          <div className="h-4 bg-gray-200 rounded w-64 mt-6"></div>
        </div>
      </article>
    </section>
  );
}
