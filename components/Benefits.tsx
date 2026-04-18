import { Clock, PiggyBank, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    color: "bg-blue-50 text-[#003DA5]",
    title: "Gagnez du temps",
    description:
      "Ne passez plus des heures au téléphone à négocier. Publiez votre demande une seule fois et recevez automatiquement plusieurs devis comparatifs en moins de 24h.",
    stat: "< 5 min",
    statLabel: "pour publier une demande",
  },
  {
    icon: PiggyBank,
    color: "bg-green-50 text-green-600",
    title: "Réduisez vos coûts",
    description:
      "La mise en concurrence des transporteurs vous garantit les meilleurs prix. Nos utilisateurs économisent en moyenne 40 à 80% par rapport aux tarifs traditionnels.",
    stat: "−80%",
    statLabel: "d'économies en moyenne",
  },
  {
    icon: Shield,
    color: "bg-orange-50 text-orange-500",
    title: "Transportez en sécurité",
    description:
      "Tous nos transporteurs sont vérifiés, assurés et inscrits aux registres officiels. Votre marchandise est couverte de la prise en charge jusqu'à la livraison.",
    stat: "100%",
    statLabel: "de transporteurs vérifiés",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="section-title">Pourquoi choisir Klubbb ?</h2>
          <p className="section-subtitle">
            Des milliers de clients nous font confiance chaque mois
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-[#003DA5]/20 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${benefit.color}`}>
                  <Icon size={28} />
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <span className="text-4xl font-black text-[#003DA5]">{benefit.stat}</span>
                  <p className="text-sm text-gray-400 mt-0.5">{benefit.statLabel}</p>
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
