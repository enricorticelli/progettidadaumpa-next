import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Articles({ articles }) {
  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3">
      {articles.map((article) => (
        <article key={article.id} className="flex flex-col shadow my-4">
          <Link href={`/articles/${article.id}`}>
            <span className="hover:opacity-75">
              <Image
                src={article.immagine_url}
                width={1000}
                height={300}
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </span>
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href={`/articles/${article.id}`}>
              <span className="text-polynesian-blue text-sm font-bold uppercase pb-4">
                {article.sottotitolo}
              </span>
            </Link>
            <Link href={`/articles/${article.id}`}>
              <span className="text-3xl font-bold hover:text-gray-700 pb-4">
                {article.titolo}
              </span>
            </Link>
            <p className="text-sm pb-3">
              Di{" "}
              <Link href={`/articles/${article.id}`}>
                <span className="font-semibold hover:text-gray-800">
                  {article.autore}
                </span>
              </Link>
              , Pubblicato il {article.data_pubblicazione}
            </p>
            <Link href={`/articles/${article.id}`}>
              <div
                className="pb-6"
                dangerouslySetInnerHTML={{ __html: article.contenuto }}
              />
              {/* Render HTML content safely */}
            </Link>
            <Link href={`/articles/${article.id}`}>
              <span className="uppercase text-gray-800 hover:text-telemagenta">
                Continua la lettura{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </span>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
