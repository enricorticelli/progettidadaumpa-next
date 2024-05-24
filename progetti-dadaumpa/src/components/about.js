export default function About() {
  return (
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
      <p className="text-xl font-semibold pb-5">Chi siamo</p>
      <p className="pb-2">
        <p>
          <p>
            Siamo la <span class="text-dec-2">Progetti DADAUMPA Srl</span>,
            attivi nel mondo del teatro dal <span class="text-dec-1">1984</span>
            .
          </p>{" "}
          <p>
            Produciamo e distribuiamo spettacoli{" "}
            <span class="text-dec-2">comici</span>,{" "}
            <span class="text-dec-2">comico-musicali</span> e di{" "}
            <span class="text-dec-2">danza</span>, esplorando ogni sfumatura
            della <span class="text-dec-2">comicità</span> e dell'arte del
            movimento.
          </p>
          Collaboriamo con artisti e compagnie di prestigio per garantire sempre
          alta qualità nelle nostre produzioni. Con passione e competenza,
          continuiamo a offrirvi{" "}
          <span class="text-dec-3">il meglio del teatro</span>.
        </p>
      </p>
      <button className="w-full shadow flex flex-col items-center justify-center my-4 p-4 rounded transition-all duration-500 bg-gradient-to-t to-telemagenta from-polynesian-blue bg-size-200 bg-pos-0 hover:bg-pos-100 relative group">
        <p className="w-full text-white font-bold text-sm uppercase transition-all duration-500 hover:scale-110">
          Continua a leggere
        </p>
      </button>
    </div>
  );
}
