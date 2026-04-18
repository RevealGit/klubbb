"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, ArrowRight, Upload } from "lucide-react";

const categories = [
  { value: "voiture", label: "Transport de voitures" },
  { value: "moto", label: "Transport de motos" },
  { value: "demenagement", label: "Déménagement complet" },
  { value: "bateau", label: "Transport de bateaux" },
  { value: "meubles", label: "Meubles & Électroménager" },
  { value: "industriel", label: "Produits industriels" },
  { value: "batiment", label: "Bâtiment & Construction" },
  { value: "animaux", label: "Animaux & Élevage" },
  { value: "palettes", label: "Palettes & Marchandises" },
];

export default function PublierDemande() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    categorie: "",
    depart: "",
    arrivee: "",
    dateDepart: "",
    description: "",
    nom: "",
    email: "",
    telephone: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc] py-12">
        <div className="max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              Publiez votre demande de transport
            </h1>
            <p className="text-gray-500">Gratuit · Sans engagement · Devis en 24h</p>
          </div>

          {/* Progress */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step >= s
                      ? "bg-[#003DA5] text-white"
                      : "bg-gray-200 text-gray-400"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-16 h-0.5 ${step > s ? "bg-[#003DA5]" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-around text-xs text-gray-400 mb-10 font-medium">
            <span className={step >= 1 ? "text-[#003DA5]" : ""}>Détails</span>
            <span className={step >= 2 ? "text-[#003DA5]" : ""}>Transport</span>
            <span className={step >= 3 ? "text-[#003DA5]" : ""}>Contact</span>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Que souhaitez-vous transporter ?
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Catégorie *
                  </label>
                  <div className="relative">
                    <select
                      value={form.categorie}
                      onChange={(e) => update("categorie", e.target.value)}
                      className="w-full appearance-none bg-gray-50 text-gray-800 px-4 py-3.5 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10"
                      required
                    >
                      <option value="">Choisissez une catégorie</option>
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description de votre bien *
                  </label>
                  <textarea
                    value={form.description}
                    onChange={(e) => update("description", e.target.value)}
                    rows={4}
                    placeholder="Décrivez votre bien (dimensions, poids, état, particularités...)"
                    className="w-full bg-gray-50 text-gray-800 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10 resize-none"
                  />
                </div>

                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#003DA5] transition-colors cursor-pointer">
                  <Upload size={24} className="text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">
                    Glissez vos photos ici ou{" "}
                    <span className="text-[#003DA5] font-medium">cliquez pour parcourir</span>
                  </p>
                  <p className="text-xs text-gray-300 mt-1">PNG, JPG jusqu&apos;à 10MB</p>
                </div>

                <button
                  onClick={() => form.categorie && setStep(2)}
                  className="btn-primary w-full justify-center py-4 text-base"
                  disabled={!form.categorie}
                >
                  Continuer
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Détails du transport
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse de départ *
                  </label>
                  <input
                    type="text"
                    value={form.depart}
                    onChange={(e) => update("depart", e.target.value)}
                    placeholder="Ville ou adresse de départ"
                    className="w-full bg-gray-50 text-gray-800 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Adresse d&apos;arrivée *
                  </label>
                  <input
                    type="text"
                    value={form.arrivee}
                    onChange={(e) => update("arrivee", e.target.value)}
                    placeholder="Ville ou adresse d'arrivée"
                    className="w-full bg-gray-50 text-gray-800 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date souhaitée *
                  </label>
                  <input
                    type="date"
                    value={form.dateDepart}
                    onChange={(e) => update("dateDepart", e.target.value)}
                    className="w-full bg-gray-50 text-gray-800 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="btn-outline flex-1 justify-center py-4"
                  >
                    Retour
                  </button>
                  <button
                    onClick={() => form.depart && form.arrivee && setStep(3)}
                    className="btn-primary flex-1 justify-center py-4"
                    disabled={!form.depart || !form.arrivee}
                  >
                    Continuer
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Vos coordonnées
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    value={form.nom}
                    onChange={(e) => update("nom", e.target.value)}
                    placeholder="Votre nom et prénom"
                    className="w-full bg-gray-50 text-gray-800 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="votre@email.fr"
                    className="w-full bg-gray-50 text-gray-800 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={form.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    placeholder="+33 6 XX XX XX XX"
                    className="w-full bg-gray-50 text-gray-800 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10"
                  />
                </div>

                <p className="text-xs text-gray-400">
                  En publiant, vous acceptez nos{" "}
                  <a href="/cgu" className="text-[#003DA5] hover:underline">Conditions générales</a>{" "}
                  et notre{" "}
                  <a href="/confidentialite" className="text-[#003DA5] hover:underline">Politique de confidentialité</a>.
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="btn-outline flex-1 justify-center py-4"
                  >
                    Retour
                  </button>
                  <button
                    className="btn-primary flex-1 justify-center py-4"
                    onClick={() => alert("Demande publiée ! Vous recevrez vos devis sous 24h.")}
                  >
                    Publier ma demande
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
            <span>🔒 Paiement sécurisé</span>
            <span>✓ Transporteurs vérifiés</span>
            <span>🆓 Gratuit pour vous</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
