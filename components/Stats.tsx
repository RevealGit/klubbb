const stats = [
  { value: "1 000 000+", label: "Utilisateurs" },
  { value: "156 000+", label: "Clients satisfaits" },
  { value: "80%", label: "D'économies max" },
  { value: "24h", label: "Pour recevoir vos devis" },
];

export default function Stats() {
  return (
    <section className="bg-[#003DA5] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 text-yellow-300 leading-tight">
                {stat.value}
              </div>
              <div className="text-blue-100 text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
