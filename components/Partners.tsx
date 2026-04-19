const partners = [
  { name: "Digital Magics", color: "#1a1a2e" },
  { name: "Scalapay", color: "#E8427E" },
  { name: "SellaLab", color: "#0069B4" },
  { name: "AXA Assurances", color: "#00008F" },
  { name: "BNP Paribas", color: "#00965E" },
  { name: "All Risk", color: "#C1002A" },
];

export default function Partners() {
  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Nos partenaires
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((p) => (
            <span
              key={p.name}
              className="font-bold text-base tracking-tight"
              style={{ color: p.color }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
