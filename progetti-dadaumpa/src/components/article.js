import Image from "next/image";
import { formatDate } from "@/app/utils";
import Link from "next/link";
import sanitizeHtml from "sanitize-html";

export default function Articles({ article }) {
  if (!article) {
    return null; // or you can render a placeholder or error message
  }

  return (
    <section className="w-full md:w-2/3 flex flex-col items-center px-3 pt-3 md:mt-10">
      <article className="flex flex-col shadow my-4">
        <Image
          src={article.immagine_url}
          width={1000}
          height={200}
          className="transition-all duration-300 ease-in-out object-cover"
        />
        <div className="bg-white flex flex-col justify-start p-6">
          <span className="text-polynesian-blue text-sm font-bold uppercase pb-4">
            {article.sottotitolo}
          </span>
          <span className="text-3xl font-bold pb-4">{article.titolo}</span>
          <p className="text-sm pb-8">
            Di{" "}
            <span className="font-semibold hover:text-gray-800">
              {article.autore}
            </span>
            , Pubblicato il {formatDate(article.data_pubblicazione)}
          </p>
          <p
            className="pb-3"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(article.contenuto),
            }}></p>
        </div>
      </article>
      <div className="flex justify-center w-full mb-4">
        <Link href="/articles" legacyBehavior>
          <a className="w-full flex items-center justify-center p-4 rounded transition-all duration-500 relative group">
            <p className="text-telemagenta font-bold text-sm uppercase transition-all duration-500 hover:scale-110 hover:text-polynesian-blue">
              Scopri tutti gli articoli
            </p>
          </a>
        </Link>
      </div>
    </section>
  );
}
