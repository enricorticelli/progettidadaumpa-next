export default function About() {
  return (
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
      <p className="text-xl font-semibold pb-5">Chi siamo</p>
      <p className="pb-2">
        <p>
          Siamo la <span className="text-dec-2">Progetti DADAUMPA Srl</span>,
          un'impresa teatrale che dal 1984 anima la scena del teatro italiano e
          internazionale.
        </p>
        <p>
          Con una ricca storia di produzione e{" "}
          <span className="text-dec-1">
            distribuzione di spettacoli comici e comico-musicali
          </span>
          , ci dedichiamo con passione e competenza a farvi sorridere e
          riflettere. Fin dai nostri esordi, abbiamo scelto di esplorare la
          comicità in tutte le sue forme e sfumature, crescendo e maturando nel
          tempo.
        </p>
        <p>
          Questo ci ha permesso di ampliare la nostra offerta artistica e di
          avventurarci in nuovi territori dello{" "}
          <span className="text-dec-2">spettacolo d'arte</span>, con la{" "}
          <span className="text-dec-2">danza</span> come ultima aggiunta al
          nostro repertorio.
        </p>
        <p>
          Negli anni, abbiamo collaborato con artisti e compagnie di grande
          rilievo e oggi continuiamo a sviluppare il nostro lavoro con la stessa
          attenzione alla qualità che ci contraddistingue. Siamo pronti a
          offrirvi sempre{" "}
          <span className="text-dec-3">il meglio del teatro</span>, con lo
          stesso entusiasmo di sempre.
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
