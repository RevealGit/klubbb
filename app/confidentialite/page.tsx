import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Klubbb",
};

export default function Confidentialite() {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10">
            <h1 className="text-3xl font-black text-gray-900 mb-2">Politique de Confidentialité</h1>
            <p className="text-gray-400 text-sm mb-10">Dernière mise à jour : 18 avril 2026</p>

            {[
              {
                title: "1. Responsable du traitement",
                content: "Klubbb est responsable du traitement de vos données personnelles. Pour toute question relative à vos données, vous pouvez nous contacter à : privacy@klubbb.fr",
              },
              {
                title: "2. Données collectées",
                content: "Nous collectons les données suivantes : nom et prénom, adresse email, numéro de téléphone, adresses de départ et d'arrivée, données de paiement (traitées par notre prestataire sécurisé), historique des transactions, et données de navigation (cookies).",
              },
              {
                title: "3. Finalités du traitement",
                content: "Vos données sont utilisées pour : la création et gestion de votre compte, la mise en relation avec des transporteurs, le traitement des paiements, l'envoi de communications liées à vos demandes, l'amélioration de nos services, et la conformité à nos obligations légales.",
              },
              {
                title: "4. Base légale",
                content: "Le traitement de vos données repose sur : l'exécution du contrat (utilisation de la plateforme), le consentement (communications marketing), et l'intérêt légitime (amélioration des services, prévention de la fraude).",
              },
              {
                title: "5. Conservation des données",
                content: "Vos données sont conservées pendant la durée de votre relation contractuelle avec Klubbb, puis archivées pendant la durée légale applicable (3 à 10 ans selon la nature des données).",
              },
              {
                title: "6. Vos droits (RGPD)",
                content: "Conformément au RGPD, vous disposez des droits suivants : droit d'accès, de rectification, d'effacement, de portabilité, d'opposition et de limitation du traitement. Pour exercer ces droits, contactez-nous à : privacy@klubbb.fr",
              },
              {
                title: "7. Partage des données",
                content: "Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec les transporteurs dans le cadre de votre demande de transport, et avec nos prestataires techniques (hébergement, paiement) sous contrat de confidentialité.",
              },
              {
                title: "8. Sécurité",
                content: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction.",
              },
            ].map((section, i) => (
              <div key={i} className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                <p className="text-gray-500 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
