import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Newsletter from "./newsletter";
import sanitizeHtml from "sanitize-html";

import { formatDate } from "@/app/utils";

export default function Articles({ articles }) {
  return (
    <section className="w-full md:w-2/3 flex flex-col items-center md:mt-4 xl:mt-10 px-3 pt-3">
      <Newsletter />
      {articles.slice(0, 5).map((article) => (
        <article
          key={article.id}
          className="flex flex-col shadow my-4 w-full md:flex-row md:h-80">
          <div className="md:order-1 md:w-1/2 opacity-90 hover:opacity-100">
            <Link href={`/articles/${article.id}`}>
              <Image
                src={article.immagine_url}
                width={300}
                height={200}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className="bg-white flex flex-col justify-start p-6 flex-1 md:order-2">
            <Link href={`/articles/${article.id}`} className="pb-1">
              <span className="text-xl font-bold uppercase hover:text-gray-700">
                {article.titolo}
              </span>
            </Link>
            <Link href={`/articles/${article.id}`} className="pb-">
              <span className="text-polynesian-blue text-sm font-bold">
                {article.sottotitolo}
              </span>
            </Link>
            <p className="text-xs py-3 pb-6">
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
                className="pb-6 text-sm"
                dangerouslySetInnerHTML={{
                  __html: sanitizeHtml(article.contenuto),
                }}
              />
              {/* Render HTML content safely */}
            </Link>
            <Link href={`/articles/${article.id}`}>
              <span className="uppercase text-gray-800 text-xs hover:text-telemagenta">
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
