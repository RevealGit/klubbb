const partners = [
  { name: "BNP Paribas", abbr: "BNP Paribas", color: "#00965E" },
  { name: "Scalapay", abbr: "Scalapay", color: "#E8427E" },
  { name: "AXA", abbr: "AXA", color: "#00008F" },
  { name: "Bpifrance", abbr: "Bpifrance", color: "#0069B4" },
  { name: "La Poste", abbr: "La Poste", color: "#FFCC00", dark: true },
  { name: "FNTR", abbr: "FNTR", color: "#1A1A2E" },
  { name: "Generali", abbr: "Generali", color: "#C1002A" },
  { name: "Stripe", abbr: "Stripe", color: "#635BFF" },
];

const duplicated = [...partners, ...partners];

export default function Partners() {
  return (
    <section className="py-14 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest">
          Ils nous font confiance
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 marquee-track">
          {duplicated.map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-16 px-8 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-2xl flex items-center justify-center transition-all duration-300 cursor-default group"
            >
              <span
                className="font-bold text-base tracking-tight whitespace-nowrap transition-all duration-300"
                style={{ color: partner.color }}
              >
                {partner.abbr}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
