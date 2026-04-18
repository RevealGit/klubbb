"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);
  const update = (f: string, v: string) => setForm(p => ({ ...p, [f]: v }));

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#003DA5] to-[#1a56c4] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Contactez-nous</h1>
            <p className="text-xl text-blue-100">Notre équipe est disponible 7j/7 pour vous aider</p>
          </div>
        </section>

        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Infos */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
                </div>
                {[
                  { icon: Phone, label: "Téléphone", value: "+33 X XX XX XX XX", sub: "Lun–Sam, 9h–19h" },
                  { icon: Mail, label: "Email", value: "contact@klubbb.fr", sub: "Réponse sous 24h" },
                  { icon: MapPin, label: "Adresse", value: "France", sub: "Plateforme 100% française" },
                  { icon: Clock, label: "Disponibilité", value: "7j/7", sub: "Support en ligne continu" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 bg-white p-5 rounded-2xl border border-gray-100">
                      <div className="w-11 h-11 bg-[#003DA5] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                        <p className="font-bold text-gray-900">{item.value}</p>
                        <p className="text-xs text-gray-400">{item.sub}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Form */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                    <p className="text-gray-500">Notre équipe vous répondra dans les 24 heures.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-7">Envoyez-nous un message</h2>
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                          <input type="text" value={form.nom} onChange={e => update("nom", e.target.value)}
                            placeholder="Votre nom" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                          <input type="email" value={form.email} onChange={e => update("email", e.target.value)}
                            placeholder="votre@email.fr" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Sujet *</label>
                        <input type="text" value={form.sujet} onChange={e => update("sujet", e.target.value)}
                          placeholder="Ex : Question sur un transport" className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                        <textarea value={form.message} onChange={e => update("message", e.target.value)}
                          rows={6} placeholder="Décrivez votre demande..." className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10 resize-none" />
                      </div>
                      <button onClick={() => setSent(true)}
                        className="btn-primary w-full justify-center py-4 text-base">
                        Envoyer le message
                        <Send size={18} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
