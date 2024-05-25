import Link from "next/link";

export default function About() {
  return (
    <div className="w-full flex flex-col md:flex-row p-6 my-16">
      <div className="md:w-3/4 lg:w-4/5">
        <p className="text-xl font-semibold pb-5">Chi siamo</p>
        <p className="pb-2">
          <p>
            <p>
              Siamo la <span className="text-dec-2">Progetti DADAUMPA Srl</span>
              , attivi nel mondo del teatro dal{" "}
              <span className="text-dec-1">1984</span>.
            </p>{" "}
            <br></br>
            <p>
              Produciamo e distribuiamo spettacoli{" "}
              <span className="text-dec-2">comici</span>,{" "}
              <span className="text-dec-2">comico-musicali</span> e di{" "}
              <span className="text-dec-2">danza</span>, esplorando ogni
              sfumatura della <span className="text-dec-2">comicità</span> e
              dell'arte del movimento.
            </p>
            <br></br>
            <p>
              Collaboriamo con artisti e compagnie di prestigio per garantire
              sempre alta qualità nelle nostre produzioni. Con passione e
              competenza, continuiamo a offrirvi{" "}
              <span className="text-dec-3">il meglio del teatro</span>.
            </p>
            <br></br>
            <p>
              Negli anni abbiamo avuto il privilegio di collaborare con
              importanti artisti e compagnie, mantenendo sempre la mia
              attenzione sulla qualità delle produzioni.
            </p>
            <div className="flex justify-center w-full mt-4">
              <Link href="/articles" legacyBehavior>
                <a className="w-full flex items-center justify-center p-4 rounded transition-all duration-500 relative group">
                  <p className="text-telemagenta font-bold text-xs uppercase transition-all duration-500 hover:scale-110 hover:text-polynesian-blue">
                    Scopri di più{" "}
                  </p>
                </a>
              </Link>
            </div>
          </p>
        </p>
      </div>
      <div className="md:w-1/4 lg:w-1/5 flex justify-center">
        <img
          className="w-32 h-32 md:w-full md:h-full object-cover"
          src="/images/logoquadrato.png"
          alt="Logo Progetti Dadaumpa"
        />
      </div>
    </div>
  );
}
