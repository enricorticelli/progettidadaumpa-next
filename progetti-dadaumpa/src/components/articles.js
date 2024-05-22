import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import sanitizeHtml from "sanitize-html";

import { formatDate } from "@/app/utils";

export default function Articles({ articles, isHome }) {
  if (isHome) {
    articles = articles.slice(0, 3);
  }

  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      {articles.map((article) => (
        <article key={article.id} className="flex flex-col shadow my-4">
          <Link href={`/articles/${article.id}`}>
            <span className="hover:opacity-75">
              <Image
                src={article.immagine_url}
                width={1000}
                height={200}
                className="transition-all duration-300 ease-in-out max-h-[300px] hover:max-h-[500px] object-cover"
              />
            </span>
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href={`/articles/${article.id}`} className="pb-4">
              <span className="text-polynesian-blue text-sm font-bold uppercase">
                {article.sottotitolo}
              </span>
            </Link>
            <Link href={`/articles/${article.id}`} className="pb-1">
              <span className="text-3xl font-bold hover:text-gray-700">
                {article.titolo}
              </span>
            </Link>
            <p className="text-sm py-3">
              Di{" "}
              <Link href={`/articles/${article.id}`}>
                <span className="font-semibold hover:text-gray-800">
                  {article.autore}
                </span>
              </Link>
              , Pubblicato il {formatDate(article.data_pubblicazione)}
            </p>
            <Link href={`/articles/${article.id}`}>
              <div
                className="pb-6"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(article.contenuto),
                }}
              />
              {/* Render HTML content safely */}
            </Link>
            <Link href={`/articles/${article.id}`}>
              <span className="uppercase text-gray-800 hover:text-telemagenta ">
                Continua la lettura{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 hover:scale-125"
                />
              </span>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
