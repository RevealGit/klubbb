import { FileText, MessageSquare, CheckCircle, Smile } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Publiez votre demande",
    description:
      "Choisissez votre catégorie, renseignez les lieux de départ et d'arrivée, les dates et décrivez votre transport.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Recevez des devis",
    description:
      "Les transporteurs vérifiés reçoivent votre demande et vous envoient leurs meilleures offres sous 24h.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Choisissez la meilleure offre",
    description:
      "Comparez les devis, consultez les avis clients et choisissez le transporteur qui vous convient.",
  },
  {
    icon: Smile,
    number: "04",
    title: "Profitez de votre transport",
    description:
      "Votre transporteur prend en charge votre bien. Suivez votre livraison et payez en toute sécurité.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="section-title">Comment fonctionne Klubbb ?</h2>
          <p className="section-subtitle">
            Réservez votre transport en 4 étapes simples, sans appels téléphoniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#003DA5] to-[#1a56c4] opacity-20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#003DA5] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                    <Icon size={32} className="text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-black w-7 h-7 rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <Link href="/comment-ca-marche" className="btn-outline">
            En savoir plus
          </Link>
        </div>
      </div>
    </section>
  );
}
