import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Klubbb — Transport & Déménagement en France",
  description:
    "Klubbb est la plateforme de transport la plus simple pour déménager, transporter voitures, motos, meubles et plus. Obtenez des devis gratuits en quelques minutes.",
  keywords:
    "déménagement, transport, voiture, moto, bateau, meubles, France, devis gratuit",
  openGraph: {
    title: "Klubbb — Transport & Déménagement en France",
    description:
      "Obtenez des devis gratuits de transporteurs vérifiés. Économisez jusqu'à 80%.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
