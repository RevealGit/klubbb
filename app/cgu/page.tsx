import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — Klubbb",
};

export default function CGU() {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10">
            <h1 className="text-3xl font-black text-gray-900 mb-2">Conditions Générales d&apos;Utilisation</h1>
            <p className="text-gray-400 text-sm mb-10">Dernière mise à jour : 18 avril 2026</p>

            {[
              {
                title: "1. Objet",
                content: "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de la plateforme Klubbb, accessible à l'adresse www.klubbb.fr. En accédant à la plateforme, vous acceptez sans réserve les présentes conditions.",
              },
              {
                title: "2. Description du service",
                content: "Klubbb est une plateforme de mise en relation entre des expéditeurs (particuliers ou professionnels souhaitant faire transporter des biens) et des transporteurs professionnels vérifiés. Klubbb agit en qualité d'intermédiaire et n'effectue pas elle-même les prestations de transport.",
              },
              {
                title: "3. Inscription et compte utilisateur",
                content: "La création d'un compte est gratuite. Vous vous engagez à fournir des informations exactes, complètes et à les maintenir à jour. Vous êtes responsable de la confidentialité de vos identifiants de connexion. Klubbb se réserve le droit de suspendre ou supprimer tout compte en cas de violation des présentes CGU.",
              },
              {
                title: "4. Publication d'une demande",
                content: "La publication d'une demande de transport est gratuite pour les expéditeurs. Vous vous engagez à décrire précisément et honnêtement les biens à transporter. Toute description frauduleuse ou inexacte engage votre responsabilité. Klubbb se réserve le droit de retirer toute annonce non conforme.",
              },
              {
                title: "5. Obligations des transporteurs",
                content: "Les transporteurs s'engagent à être en règle avec la réglementation en vigueur (licences, assurances, capacités). Ils s'engagent à fournir des devis honnêtes et à respecter les conditions convenues. Tout manquement peut entraîner la suspension du compte transporteur.",
              },
              {
                title: "6. Paiement",
                content: "Le paiement des prestations de transport s'effectue via la plateforme Klubbb. Les fonds sont séquestrés jusqu'à confirmation de la livraison par l'expéditeur. Une commission est prélevée sur chaque transaction réalisée.",
              },
              {
                title: "7. Responsabilité",
                content: "Klubbb met en relation des parties et ne peut être tenu responsable de l'exécution des prestations de transport. La responsabilité de Klubbb est limitée aux dysfonctionnements de la plateforme. Les transporteurs sont responsables des dommages causés aux biens confiés selon les conditions de leur assurance.",
              },
              {
                title: "8. Propriété intellectuelle",
                content: "L'ensemble des éléments de la plateforme Klubbb (logo, textes, design, base de données) sont protégés par le droit de la propriété intellectuelle. Toute reproduction sans autorisation est interdite.",
              },
              {
                title: "9. Modification des CGU",
                content: "Klubbb se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés par email des modifications substantielles. L'utilisation continue de la plateforme après notification vaut acceptation des nouvelles conditions.",
              },
              {
                title: "10. Droit applicable",
                content: "Les présentes CGU sont soumises au droit français. Tout litige sera soumis à la compétence exclusive des tribunaux français.",
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
