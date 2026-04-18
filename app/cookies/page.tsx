import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Cookies — Klubbb",
};

export default function Cookies() {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10">
            <h1 className="text-3xl font-black text-gray-900 mb-2">Politique de Cookies</h1>
            <p className="text-gray-400 text-sm mb-10">Dernière mise à jour : 18 avril 2026</p>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <p className="text-gray-500 leading-relaxed">Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite sur notre site. Il permet de mémoriser des informations sur votre navigation pour améliorer votre expérience.</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Types de cookies utilisés</h2>
              <div className="space-y-4">
                {[
                  { type: "Cookies essentiels", desc: "Nécessaires au fonctionnement du site (connexion, panier, sécurité). Ils ne peuvent pas être désactivés.", color: "bg-green-50 border-green-200 text-green-800" },
                  { type: "Cookies analytiques", desc: "Nous aident à comprendre comment vous utilisez le site (pages visitées, durée de session). Données anonymisées.", color: "bg-blue-50 border-blue-200 text-blue-800" },
                  { type: "Cookies marketing", desc: "Utilisés pour vous proposer des publicités pertinentes sur d'autres sites. Nécessitent votre consentement.", color: "bg-orange-50 border-orange-200 text-orange-800" },
                  { type: "Cookies de préférences", desc: "Mémorisent vos préférences (langue, région) pour personnaliser votre expérience.", color: "bg-purple-50 border-purple-200 text-purple-800" },
                ].map((item, i) => (
                  <div key={i} className={`p-5 rounded-xl border ${item.color}`}>
                    <h3 className="font-bold mb-1">{item.type}</h3>
                    <p className="text-sm opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Gérer vos préférences</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Vous pouvez à tout moment modifier vos préférences en matière de cookies via notre bandeau de consentement ou les paramètres de votre navigateur.</p>
              <button className="btn-primary text-sm">Gérer mes préférences cookies</button>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Durée de conservation</h2>
              <p className="text-gray-500 leading-relaxed">Les cookies sont conservés pour une durée maximale de 13 mois conformément aux recommandations de la CNIL.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
