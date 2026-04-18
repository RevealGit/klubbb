"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc] flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <Image src="/logo-klubbb-dark.png" alt="Klubbb" width={140} height={52} className="object-contain mx-auto" />
            </Link>
            <p className="text-gray-500 mt-2">
              {isRegister ? "Créez votre compte gratuitement" : "Connectez-vous à votre espace"}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-7">
              <button onClick={() => setIsRegister(false)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${!isRegister ? "bg-white text-[#003DA5] shadow-sm" : "text-gray-400"}`}>
                Connexion
              </button>
              <button onClick={() => setIsRegister(true)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${isRegister ? "bg-white text-[#003DA5] shadow-sm" : "text-gray-400"}`}>
                Inscription
              </button>
            </div>

            <div className="space-y-5">
              {isRegister && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom complet</label>
                  <input type="text" placeholder="Votre nom et prénom"
                    className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10" />
                </div>
              )}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="votre@email.fr"
                  className="w-full bg-gray-50 px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold text-gray-700">Mot de passe</label>
                  {!isRegister && (
                    <button type="button" className="text-sm text-[#003DA5] hover:underline">
                      Mot de passe oublié ?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <input type={showPwd ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-gray-50 px-4 py-3.5 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:border-[#003DA5] focus:ring-2 focus:ring-[#003DA5]/10" />
                  <button type="button" onClick={() => setShowPwd(!showPwd)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {isRegister && (
                <p className="text-xs text-gray-400">
                  En vous inscrivant, vous acceptez nos{" "}
                  <Link href="/cgu" className="text-[#003DA5] hover:underline">CGU</Link>{" "}
                  et notre{" "}
                  <Link href="/confidentialite" className="text-[#003DA5] hover:underline">Politique de confidentialité</Link>.
                </p>
              )}

              <button className="btn-primary w-full justify-center py-4 text-base">
                <LogIn size={18} />
                {isRegister ? "Créer mon compte" : "Se connecter"}
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            Vous êtes un transporteur ?{" "}
            <Link href="/espace-transporteur" className="text-[#003DA5] font-semibold hover:underline">
              Espace transporteur
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
