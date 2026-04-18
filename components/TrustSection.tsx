import { ShieldCheck, CreditCard, Headphones, FileCheck } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Transporteurs certifiés",
    description: "Vérification d'identité, inscription aux registres officiels et documents de transport obligatoires.",
  },
  {
    icon: CreditCard,
    title: "Paiement sécurisé",
    description: "Paiement protégé par chiffrement SSL. Votre argent est libéré seulement après livraison confirmée.",
  },
  {
    icon: Headphones,
    title: "Support disponible",
    description: "Notre équipe est disponible 7j/7 pour vous aider avant, pendant et après votre transport.",
  },
  {
    icon: FileCheck,
    title: "Marchandise assurée",
    description: "Tous les transports sont couverts par l'assurance du transporteur. Votre bien est protégé.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="section-title">Votre sécurité, notre priorité</h2>
          <p className="section-subtitle">
            Klubbb sélectionne et vérifie rigoureusement chaque transporteur partenaire
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-[#f8fafc] hover:bg-blue-50 transition-colors group"
              >
                <div className="w-16 h-16 bg-[#003DA5] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
