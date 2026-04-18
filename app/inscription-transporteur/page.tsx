"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Truck, ChevronDown, ArrowRight, CheckCircle } from "lucide-react";

const vehicleTypes = [
  "Camionnette (< 3,5T)",
  "Camion porteur (3,5T – 12T)",
  "Semi-remorque (> 12T)",
  "Plateau / Porte-voiture",
  "Fourgon isotherme / frigorifique",
  "Véhicule spécial (grue, benne...)",
];

export default function InscriptionTransporteur() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc] py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#003DA5] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Truck size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">Devenir transporteur Klubbb</h1>
            <p className="text-gray-500">Inscription gratuite · Validation sous 48h · Sans engagement</p>
          </div>

          {/* Progress */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= s ? "bg-[#003DA5] text-white" : "bg-gray-200 text-gray-400"}`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-16 h-0.5 ${step > s ? "bg-[#003DA5]" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {done ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h2 className="text-2xl font-black text-gray-900 mb-3">Demande envoyée !</h2>
                <p className="text-gray-500 max-w-sm mx-auto">
                  Notre équipe va examiner votre dossier et vous contacter sous 48h ouvrées pour activer votre compte.
                </p>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Informations personnelles</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
                        <input type="text" placeholder="Prénom" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5]" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                        <input type="text" placeholder="Nom" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                      <input type="email" placeholder="votre@email.fr" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5]" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                      <input type="tel" placeholder="+33 6 XX XX XX XX" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5]" />
                    </div>
                    <button onClick={() => setStep(2)} className="btn-primary w-full justify-center py-4">Continuer <ArrowRight size={18} /></button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Informations société</h2>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Raison sociale *</label>
                      <input type="text" placeholder="Nom de votre entreprise" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5]" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">SIRET *</label>
                      <input type="text" placeholder="000 000 000 00000" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5]" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Type de véhicule *</label>
                      <div className="relative">
                        <select className="w-full appearance-none bg-gray-50 px-4 py-3.5 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5]">
                          <option value="">Sélectionnez votre véhicule</option>
                          {vehicleTypes.map(v => <option key={v}>{v}</option>)}
                        </select>
                        <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Zone géographique principale *</label>
                      <input type="text" placeholder="Ex : Île-de-France, PACA, toute la France..." className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5]" />
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(1)} className="btn-outline flex-1 justify-center py-4">Retour</button>
                      <button onClick={() => setStep(3)} className="btn-primary flex-1 justify-center py-4">Continuer <ArrowRight size={18} /></button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Documents requis</h2>
                    <p className="text-sm text-gray-500">Pour valider votre compte, nous avons besoin des documents suivants :</p>
                    {["Pièce d'identité (recto/verso)", "Carte grise du véhicule", "Attestation d'assurance transport", "Licence de transport (si applicable)"].map((doc, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200 hover:border-[#003DA5] cursor-pointer transition-colors">
                        <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 text-xl">+</div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700">{doc}</p>
                          <p className="text-xs text-gray-400">PDF, JPG ou PNG — Max 10MB</p>
                        </div>
                      </div>
                    ))}
                    <p className="text-xs text-gray-400">
                      En soumettant, vous acceptez nos <a href="/cgu" className="text-[#003DA5] hover:underline">CGU transporteur</a>.
                    </p>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(2)} className="btn-outline flex-1 justify-center py-4">Retour</button>
                      <button onClick={() => setDone(true)} className="btn-primary flex-1 justify-center py-4">Soumettre ma demande <ArrowRight size={18} /></button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
