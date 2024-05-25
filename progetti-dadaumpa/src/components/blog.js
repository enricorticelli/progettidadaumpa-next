import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import sanitizeHtml from "sanitize-html";
import Newsletter from "./newsletter";

import { formatDate } from "@/app/utils";

export default function Blog({ articles }) {
  // Divide gli articoli in gruppi di tre
  const chunkedArticles = articles.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // Inizializza il nuovo gruppo se non esiste
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <>
      <Newsletter />

      <section className="w-full px-3 pt-4 md:mt-14">
        {chunkedArticles.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row">
            {row.map((article) => (
              <div
                key={article.id}
                className="w-full md:w-1/3 flex flex-col items-center md:px-3 mb-4">
                <article className="flex flex-col shadow">
                  <Link href={`/articles/${article.id}`}>
                    <span className="hover:opacity-90">
                      <Image
                        src={article.immagine_url}
                        width={1000}
                        height={200}
                        className="transition-all duration-300 ease-in-out max-h-[250px] object-cover"
                      />
                    </span>
                  </Link>
                  <div className="bg-white flex flex-col justify-start p-6 h-80">
                    <Link href={`/articles/${article.id}`} className="pb-1">
                      <span className="text-2xl font-bold hover:text-gray-700">
                        {article.titolo}
                      </span>
                    </Link>
                    <Link href={`/articles/${article.id}`} className="pb-2">
                      <span className="text-polynesian-blue text-sm font-bold uppercase">
                        {article.sottotitolo}
                      </span>
                    </Link>
                    <p className="text-sm pt-3 pb-6">
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
                      <span className="uppercase text-gray-800 hover:text-telemagenta text-xs">
                        Continua la lettura{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="ml-2 hover:scale-125"
                        />
                      </span>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
