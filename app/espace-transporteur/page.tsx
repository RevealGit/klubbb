import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, Euro, Star, Smartphone, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Espace Transporteur — Rejoignez Klubbb",
  description:
    "Devenez transporteur partenaire Klubbb. Accédez à des milliers de demandes de transport, sans abonnement, sans frais fixes.",
};

const benefits = [
  {
    icon: Euro,
    title: "Sans abonnement",
    description: "Pas de frais fixes ni d'abonnement. Vous ne payez qu'une commission sur les transports réalisés.",
  },
  {
    icon: Truck,
    title: "Fret optimisé",
    description: "Accédez à des milliers de demandes de transport pour optimiser vos trajets et remplir vos véhicules.",
  },
  {
    icon: Smartphone,
    title: "Application mobile",
    description: "Gérez vos missions depuis votre smartphone. Notifications en temps réel pour ne rater aucune opportunité.",
  },
  {
    icon: ShieldCheck,
    title: "Paiement garanti",
    description: "Le paiement est sécurisé sur la plateforme. Vous êtes payé à chaque livraison confirmée.",
  },
  {
    icon: Star,
    title: "Construisez votre réputation",
    description: "Les avis clients renforcent votre profil et vous aident à obtenir plus de missions.",
  },
  {
    icon: Clock,
    title: "Flexibilité totale",
    description: "Choisissez les missions qui vous conviennent selon vos disponibilités et votre zone géographique.",
  },
];

export default function EspaceTransporteur() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#003DA5] to-[#1a56c4] text-white py-20">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <span className="inline-block bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              Espace Transporteur
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Développez votre activité avec Klubbb
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Rejoignez notre réseau de transporteurs vérifiés et accédez à des milliers de demandes
              de transport partout en France.
            </p>
            <Link
              href="/inscription-transporteur"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-8 py-4 rounded-xl inline-flex items-center gap-2 text-lg shadow-lg transition-colors"
            >
              Devenir partenaire Klubbb
            </Link>
            <p className="text-blue-200 text-sm mt-4">
              Inscription gratuite · Validation sous 48h
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="section-title">Pourquoi rejoindre Klubbb ?</h2>
              <p className="section-subtitle">Des avantages concrets pour développer votre activité</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={22} className="text-[#003DA5]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#f8fafc] text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à rejoindre l&apos;aventure Klubbb ?
            </h2>
            <p className="text-gray-500 mb-8">
              Créez votre profil transporteur gratuitement et commencez à recevoir des demandes dès aujourd&apos;hui.
            </p>
            <Link href="/inscription-transporteur" className="btn-primary text-base px-8 py-4">
              S&apos;inscrire comme transporteur
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
