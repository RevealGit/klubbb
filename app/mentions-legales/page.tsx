import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — Klubbb",
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="py-16 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10">
            <h1 className="text-3xl font-black text-gray-900 mb-2">Mentions Légales</h1>
            <p className="text-gray-400 text-sm mb-10">Dernière mise à jour : 18 avril 2026</p>

            {[
              {
                title: "Éditeur du site",
                items: [
                  ["Dénomination sociale", "Klubbb SAS"],
                  ["Siège social", "France"],
                  ["Capital social", "À compléter"],
                  ["SIRET", "À compléter"],
                  ["TVA intracommunautaire", "À compléter"],
                  ["Email", "contact@klubbb.fr"],
                  ["Téléphone", "+33 X XX XX XX XX"],
                ],
              },
              {
                title: "Directeur de la publication",
                items: [
                  ["Directeur de publication", "À compléter"],
                ],
              },
              {
                title: "Hébergement",
                items: [
                  ["Hébergeur", "Vercel Inc."],
                  ["Adresse", "340 Pine Street, Suite 701, San Francisco, CA 94104, USA"],
                  ["Site web", "vercel.com"],
                ],
              },
              {
                title: "Propriété intellectuelle",
                content: "L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels) est la propriété exclusive de Klubbb SAS, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Klubbb SAS.",
              },
              {
                title: "Limitation de responsabilité",
                content: "Klubbb SAS s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, Klubbb SAS ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.",
              },
              {
                title: "Droit applicable",
                content: "Tout litige en relation avec l'utilisation du site www.klubbb.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de France.",
              },
            ].map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                {"items" in section && section.items ? (
                  <table className="w-full text-sm">
                    <tbody>
                      {section.items.map(([key, val], j) => (
                        <tr key={j} className="border-b border-gray-50">
                          <td className="py-3 pr-6 font-semibold text-gray-700 w-48">{key}</td>
                          <td className="py-3 text-gray-500">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-gray-500 leading-relaxed">{"content" in section ? section.content : ""}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
