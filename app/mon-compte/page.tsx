"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Package, Star, Settings, LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";

const menu = [
  { icon: Package, label: "Mes demandes", href: "#demandes", count: 3 },
  { icon: Star, label: "Mes avis", href: "#avis", count: 2 },
  { icon: Settings, label: "Mon profil", href: "#profil", count: null },
];

export default function MonCompte() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black text-gray-900 mb-8">Mon espace personnel</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7 text-center shadow-sm">
              <div className="w-20 h-20 bg-[#003DA5] text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-4">
                <User size={32} />
              </div>
              <h2 className="font-bold text-gray-900 text-lg mb-0.5">Votre nom</h2>
              <p className="text-gray-400 text-sm">votre@email.fr</p>
              <div className="mt-5 pt-5 border-t border-gray-100 space-y-2">
                {menu.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Link key={i} href={item.href} className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-3 text-gray-700 group-hover:text-[#003DA5]">
                        <Icon size={18} />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.count && (
                          <span className="bg-[#003DA5] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{item.count}</span>
                        )}
                        <ChevronRight size={16} className="text-gray-300" />
                      </div>
                    </Link>
                  );
                })}
                <button className="flex items-center gap-3 text-red-400 hover:text-red-600 px-4 py-3 w-full rounded-xl hover:bg-red-50 transition-colors text-sm font-medium">
                  <LogOut size={18} />
                  Se déconnecter
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-5">Mes dernières demandes</h3>
                {[
                  { id: "KL-2026-001", service: "Déménagement complet", route: "Paris → Lyon", status: "En cours", statusColor: "text-blue-600 bg-blue-50" },
                  { id: "KL-2026-002", service: "Transport de voiture", route: "Marseille → Nice", status: "Terminé", statusColor: "text-green-600 bg-green-50" },
                  { id: "KL-2026-003", service: "Meubles & Électroménager", route: "Nantes → Bordeaux", status: "En attente", statusColor: "text-orange-600 bg-orange-50" },
                ].map((req, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{req.service}</p>
                      <p className="text-xs text-gray-400">{req.id} · {req.route}</p>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${req.statusColor}`}>{req.status}</span>
                  </div>
                ))}
                <Link href="/publier-demande" className="btn-primary w-full justify-center mt-5 text-sm">
                  + Nouvelle demande
                </Link>
              </div>

              <div className="bg-[#003DA5] text-white rounded-2xl p-7">
                <h3 className="font-bold text-lg mb-2">Besoin d&apos;aide ?</h3>
                <p className="text-blue-100 text-sm mb-5">Notre équipe est disponible 7j/7 pour répondre à vos questions.</p>
                <Link href="/contact" className="bg-white text-[#003DA5] font-bold px-5 py-2.5 rounded-xl inline-block text-sm hover:bg-blue-50 transition-colors">
                  Contacter le support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
