import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import sanitizeHtml from "sanitize-html";

import { formatDate } from "@/app/utils";

export default function Articles({ articles }) {
  return (
    <section className="w-full md:w-2/3 flex flex-col items-center pr-3 py-3 pl-8">
      {articles.slice(0, 3).map((article) => (
        <article
          key={article.id}
          className="flex flex-col md:flex-row shadow my-4">
          <Link href={`/articles/${article.id}`} className="flex-1">
            <div className="opacity-90 hover:opacity-100 h-full">
              <Image
                src={article.immagine_url}
                width={1000}
                height={200}
                className="w-full h-full max-w-100px object-cover"
              />
            </div>
          </Link>
          <div className="bg-white flex flex-col justify-start p-6 flex-1">
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
      <div className="flex justify-center w-full mb-4">
        <Link href="/articles" legacyBehavior>
          <a className="w-full flex items-center justify-center p-4 rounded transition-all duration-500 relative group">
            <p className="text-telemagenta font-bold text-sm uppercase transition-all duration-500 hover:scale-110 hover:underline hover:text-polynesian-blue">
              Altri articoli
            </p>
          </a>
        </Link>
      </div>
    </section>
  );
}
