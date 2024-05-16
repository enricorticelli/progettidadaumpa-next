import { sql } from "@vercel/postgres";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default async function Articles({ params }) {
  var articles = [];

  const result = await sql`
    SELECT id, titolo, sottotitolo, 
    CASE 
      WHEN LENGTH(contenuto) <= 100 THEN contenuto
      ELSE SUBSTRING(contenuto, 1, 250) || '...'
    END AS contenuto,
    autore, immagine_url, data_pubblicazione
    FROM articoli
    ORDER BY data_pubblicazione DESC;
  `;

  // Extract rows from the result
  articles = result.rows;

  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      {articles.map((article) => (
        <article key={article.id} className="flex flex-col shadow my-4">
          <a href="#" className="hover:opacity-75">
            <Image
              src={article.immagine_url}
              width={1000}
              height={300}
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </a>
          <div className="bg-white flex flex-col justify-start p-6">
            <a
              href="#"
              className="text-polynesian-blue text-sm font-bold uppercase pb-4">
              {article.sottotitolo}
            </a>
            <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
              {article.titolo}
            </a>
            <p className="text-sm pb-3">
              Di{" "}
              <a href="#" className="font-semibold hover:text-gray-800">
                {article.autore}
              </a>
              , Pubblicato il {article.data_pubblicazione.toLocaleDateString()}
            </p>
            <a href="#" className="pb-6">
              <div dangerouslySetInnerHTML={{ __html: article.contenuto }} />{" "}
              {/* Render HTML content safely */}
            </a>
            <a
              href="#"
              className="uppercase text-gray-800 hover:text-telemagenta">
              Continua la lettura{" "}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
          </div>
        </article>
      ))}
      {/* Pagination */}
      {/* <div className="flex items-center py-8">
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
      </div> */}
    </section>
  );
}
