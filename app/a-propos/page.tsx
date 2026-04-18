import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Heart, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous — Klubbb",
  description: "Découvrez Klubbb, la plateforme française de transport et déménagement qui connecte expéditeurs et transporteurs vérifiés.",
};

const values = [
  { icon: Users, title: "Communauté", description: "Nous créons du lien entre ceux qui ont besoin de transporter et ceux qui transportent, partout en France." },
  { icon: Target, title: "Simplicité", description: "Notre obsession : rendre le transport accessible à tous, sans friction, sans appels téléphoniques, sans stress." },
  { icon: Heart, title: "Confiance", description: "Chaque transporteur est vérifié, chaque paiement sécurisé. La confiance est le fondement de Klubbb." },
  { icon: TrendingUp, title: "Innovation", description: "Nous innovons en permanence pour vous offrir la meilleure expérience de transport du marché." },
];

const team = [
  { name: "Alexandre Martin", role: "CEO & Co-fondateur", avatar: "A" },
  { name: "Sophie Dubois", role: "CTO & Co-fondatrice", avatar: "S" },
  { name: "Thomas Bernard", role: "Directeur Commercial", avatar: "T" },
  { name: "Léa Moreau", role: "Responsable Support", avatar: "L" },
];

export default function APropos() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#003DA5] to-[#1a56c4] text-white py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              Nous réinventons le transport en France
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Klubbb est la plateforme en ligne qui connecte expéditeurs et transporteurs vérifiés
              pour un transport simple, sûr et économique partout en France et en Europe.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-5">Notre mission</h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Chez Klubbb, nous croyons que tout le monde mérite d&apos;accéder à des services
                  de transport de qualité, sans se ruiner et sans perdre son temps.
                </p>
                <p className="text-gray-500 leading-relaxed mb-4">
                  En mettant en concurrence les transporteurs, nous garantissons les meilleurs
                  prix pour les expéditeurs tout en offrant aux transporteurs un flux constant
                  de missions pour optimiser leurs trajets.
                </p>
                <p className="text-gray-500 leading-relaxed">
                  Depuis notre création, nous avons aidé plus de <strong className="text-gray-900">156 000 clients</strong> à
                  transporter leurs biens en toute sérénité, avec une économie moyenne de <strong className="text-gray-900">40 à 80%</strong>.
                </p>
              </div>
              <div className="bg-[#f8fafc] rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { val: "1M+", label: "Utilisateurs" },
                    { val: "156K+", label: "Clients satisfaits" },
                    { val: "80%", label: "Économies max" },
                    { val: "9", label: "Catégories de transport" },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-black text-[#003DA5] mb-1">{s.val}</div>
                      <div className="text-sm text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-black text-gray-900 text-center mb-12">Nos valeurs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="bg-white p-7 rounded-2xl border border-gray-100 flex gap-5">
                    <div className="w-12 h-12 bg-[#003DA5] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-3">L&apos;équipe Klubbb</h2>
            <p className="text-gray-500 mb-12">Des passionnés au service de votre transport</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <div key={i} className="text-center">
                  <div className="w-20 h-20 bg-[#003DA5] text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <p className="font-bold text-gray-900">{member.name}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
