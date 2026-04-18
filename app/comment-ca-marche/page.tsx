import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, MessageSquare, CheckCircle, Smile, ShieldCheck, CreditCard } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment ça marche — Klubbb",
  description:
    "Découvrez comment fonctionne Klubbb : publiez votre demande, recevez des devis, choisissez votre transporteur et profitez de votre transport en toute sécurité.",
};

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Publiez votre demande",
    description:
      "Sélectionnez votre catégorie de transport, renseignez les adresses de départ et d'arrivée, les dates souhaitées et ajoutez une description de votre bien. Plus vous donnez de détails, plus les devis seront précis.",
    details: [
      "Choisissez parmi 9 catégories de transport",
      "Indiquez le lieu de départ et d'arrivée",
      "Précisez les dimensions et le poids si possible",
      "Ajoutez des photos pour plus de précision",
    ],
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Recevez des devis gratuits",
    description:
      "Dès que votre demande est publiée, les transporteurs vérifiés compatibles avec votre trajet sont notifiés. Ils vous envoient leurs meilleures offres directement sur la plateforme sous 24 heures.",
    details: [
      "Recevez plusieurs offres comparables",
      "Consultez les profils et avis de chaque transporteur",
      "Échangez directement avec eux via la messagerie",
      "Aucun engagement avant votre choix",
    ],
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Choisissez la meilleure offre",
    description:
      "Comparez les devis selon le prix, les délais et les avis clients. Choisissez le transporteur qui correspond le mieux à vos besoins et réservez en quelques clics.",
    details: [
      "Comparez prix, délais et avis",
      "Paiement sécurisé sur la plateforme",
      "Confirmation immédiate par email",
      "Contrat de transport automatique",
    ],
  },
  {
    icon: Smile,
    number: "04",
    title: "Profitez de votre transport",
    description:
      "Votre transporteur prend en charge votre bien à la date convenue et le livre à destination. Suivez l'avancement de votre livraison et confirmez la réception une fois livré.",
    details: [
      "Suivi en temps réel de votre livraison",
      "Communication directe avec le transporteur",
      "Libération du paiement après confirmation",
      "Laissez un avis pour aider la communauté",
    ],
  },
];

export default function CommentCaMarche() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#003DA5] to-[#1a56c4] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Comment fonctionne Klubbb ?
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Klubbb est le moyen le plus simple de transporter vos biens. Nous connectons
              expéditeurs et transporteurs vérifiés en France et en Europe.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 1;
                return (
                  <div
                    key={index}
                    className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} gap-10 items-center`}
                  >
                    {/* Icon side */}
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32">
                        <div className="w-32 h-32 bg-[#003DA5] rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200">
                          <Icon size={52} className="text-white" />
                        </div>
                        <span className="absolute -top-3 -right-3 bg-yellow-400 text-gray-900 text-lg font-black w-10 h-10 rounded-full flex items-center justify-center">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h2>
                      <p className="text-gray-500 leading-relaxed mb-5">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                              ✓
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Klubbb */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="section-title">Pourquoi utiliser Klubbb ?</h2>
            <p className="section-subtitle">
              Des avantages concrets pour chaque transport
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-10">
              {[
                {
                  icon: ShieldCheck,
                  title: "Transporteurs 100% vérifiés",
                  desc: "Vérification d'identité, registres officiels, assurances et documents obligatoires pour chaque partenaire.",
                },
                {
                  icon: CreditCard,
                  title: "Zéro frais pour les expéditeurs",
                  desc: "La publication d'une demande est totalement gratuite. Vous ne payez que le transport choisi.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-[#003DA5]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-[#003DA5] text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-black mb-4">Prêt à commencer ?</h2>
            <p className="text-blue-100 mb-8">Publiez votre première demande gratuitement dès maintenant.</p>
            <Link href="/publier-demande" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-8 py-4 rounded-xl inline-flex items-center gap-2 text-lg shadow-lg transition-colors">
              Publier ma demande
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
