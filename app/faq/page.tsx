"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Pour les expéditeurs",
    questions: [
      {
        q: "Est-ce gratuit de publier une demande sur Klubbb ?",
        a: "Oui, la publication d'une demande de transport est totalement gratuite pour les expéditeurs. Vous ne payez que le transport que vous choisissez, au prix convenu avec le transporteur.",
      },
      {
        q: "Combien de temps faut-il pour recevoir des devis ?",
        a: "En général, vous recevrez vos premiers devis dans les 24 heures suivant la publication de votre demande. Pour les transports urgents, n'hésitez pas à le préciser dans votre annonce.",
      },
      {
        q: "Comment sont vérifiés les transporteurs ?",
        a: "Tous nos transporteurs passent par un processus de vérification strict : vérification d'identité, contrôle de leur inscription aux registres officiels du transport, vérification de leurs assurances et documents obligatoires.",
      },
      {
        q: "Ma marchandise est-elle assurée pendant le transport ?",
        a: "Oui, tous les transports réalisés via Klubbb sont couverts par l'assurance responsabilité civile du transporteur. Pour les biens de haute valeur, nous recommandons de souscrire une assurance complémentaire.",
      },
      {
        q: "Puis-je annuler ma demande ?",
        a: "Vous pouvez annuler votre demande tant qu'aucun transporteur n'a été sélectionné. Une fois la réservation confirmée, les conditions d'annulation dépendent du transporteur choisi.",
      },
    ],
  },
  {
    category: "Pour les transporteurs",
    questions: [
      {
        q: "Comment devenir transporteur partenaire Klubbb ?",
        a: "Rendez-vous sur notre page 'Espace transporteur' et remplissez le formulaire d'inscription. Notre équipe vérifiera vos documents et activera votre compte sous 48h ouvrées.",
      },
      {
        q: "Y a-t-il des frais d'abonnement pour les transporteurs ?",
        a: "Non, il n'y a pas de frais d'abonnement. Klubbb prélève uniquement une commission sur les transactions réalisées via la plateforme.",
      },
      {
        q: "Comment suis-je payé pour mes transports ?",
        a: "Le paiement est sécurisé sur la plateforme. L'argent est libéré sur votre compte dès que l'expéditeur confirme la bonne réception de sa marchandise.",
      },
    ],
  },
  {
    category: "Paiement & Sécurité",
    questions: [
      {
        q: "Quels modes de paiement sont acceptés ?",
        a: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), les virements SEPA et Scalapay pour le paiement en plusieurs fois.",
      },
      {
        q: "Mes données personnelles sont-elles protégées ?",
        a: "Absolument. Klubbb est conforme au RGPD et protège toutes vos données personnelles. Nous ne partageons jamais vos informations sans votre consentement explicite.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-[#003DA5] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 py-4 bg-blue-50 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#003DA5] to-[#1a56c4] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">FAQ & Support</h1>
            <p className="text-xl text-blue-100">
              Toutes les réponses à vos questions sur Klubbb
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-4xl mx-auto px-4">
            {faqs.map((section, i) => (
              <div key={i} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
                <div className="space-y-3">
                  {section.questions.map((item, j) => (
                    <FAQItem key={j} question={item.q} answer={item.a} />
                  ))}
                </div>
              </div>
            ))}

            {/* Contact support */}
            <div className="bg-[#003DA5] text-white rounded-2xl p-8 text-center mt-8">
              <h3 className="text-2xl font-bold mb-2">Vous n&apos;avez pas trouvé votre réponse ?</h3>
              <p className="text-blue-100 mb-6">Notre équipe support est disponible 7j/7 pour vous aider.</p>
              <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-6 py-3 rounded-xl inline-block transition-colors">
                Contacter le support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
