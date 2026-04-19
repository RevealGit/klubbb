const quotes = [
  {
    source: "Le Monde",
    text: "Le marketplace du transport qui facilite la rencontre entre l'offre et la demande, permettant des économies allant jusqu'à 80% sur les expéditions.",
  },
  {
    source: "Les Échos",
    text: "L'Uber du transport de marchandises. Les entreprises achètent leurs transports aussi facilement que de réserver un hôtel, et font des économies substantielles.",
  },
  {
    source: "Capital",
    text: "Klubbb, quand les marchandises font du covoiturage et permettent aux expéditeurs d'économiser jusqu'à 80% sur leurs frais de transport.",
  },
];

export default function PressQuotes() {
  return (
    <section className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <blockquote
              key={i}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-[#f8fafc] border border-gray-100"
            >
              <p className="text-gray-600 text-sm leading-relaxed italic before:content-['\u201C'] after:content-['\u201D']">
                {q.text}
              </p>
              <footer className="text-xs font-bold text-[#003DA5] uppercase tracking-widest">
                {q.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
