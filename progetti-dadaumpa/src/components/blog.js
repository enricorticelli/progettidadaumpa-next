import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    <section className="w-full px-3 pt-4">
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
                      className="transition-all duration-300 ease-in-out max-h-[300px] object-cover"
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
                        __html: article.contenuto,
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
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
