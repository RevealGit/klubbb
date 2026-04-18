import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Conseils transport & déménagement | Klubbb",
  description: "Retrouvez tous nos conseils pour réussir votre déménagement, préparer votre transport et économiser sur vos frais de livraison.",
};

const articles = [
  {
    slug: "conseils-demenagement-reussi",
    category: "Déménagement",
    title: "10 conseils pour réussir son déménagement sans stress",
    excerpt: "Déménager peut vite devenir une source de stress si l'on n'est pas bien organisé. Voici nos conseils pratiques pour que tout se passe dans les meilleures conditions.",
    date: "15 avril 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  },
  {
    slug: "comment-economiser-transport-voiture",
    category: "Transport auto",
    title: "Comment économiser jusqu'à 80% sur le transport de votre voiture",
    excerpt: "Le transport d'un véhicule peut représenter un budget important. Découvrez comment la mise en concurrence des transporteurs peut vous faire économiser considérablement.",
    date: "10 avril 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
  },
  {
    slug: "choisir-bon-transporteur",
    category: "Conseils",
    title: "Comment choisir le bon transporteur : les critères essentiels",
    excerpt: "Face à plusieurs devis, comment s'y retrouver ? Avis clients, tarifs, assurances... Voici les critères à vérifier avant de confier vos biens à un transporteur.",
    date: "5 avril 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
  },
  {
    slug: "transport-moto-guide-complet",
    category: "Transport moto",
    title: "Guide complet : transporter sa moto en toute sécurité",
    excerpt: "Que ce soit pour des vacances, un déménagement ou une vente, voici tout ce qu'il faut savoir pour transporter votre moto sans risque.",
    date: "28 mars 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    slug: "assurance-transport-ce-quil-faut-savoir",
    category: "Assurance",
    title: "Assurance transport : ce que vous devez absolument savoir",
    excerpt: "Quelles garanties couvrent votre marchandise pendant le transport ? Que se passe-t-il en cas de dommage ? On vous explique tout sur l'assurance transport.",
    date: "20 mars 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
  },
  {
    slug: "demenagement-international-guide",
    category: "Déménagement",
    title: "Déménagement international : les étapes clés à ne pas manquer",
    excerpt: "Vous déménagez à l'étranger ? Formalités douanières, délais, assurances... Notre guide complet pour un déménagement international réussi.",
    date: "12 mars 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
  },
];

const categoryColors: Record<string, string> = {
  "Déménagement": "bg-blue-100 text-blue-700",
  "Transport auto": "bg-orange-100 text-orange-700",
  "Conseils": "bg-green-100 text-green-700",
  "Transport moto": "bg-purple-100 text-purple-700",
  "Assurance": "bg-yellow-100 text-yellow-700",
};

export default function Blog() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#003DA5] to-[#1a56c4] text-white py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Blog Klubbb</h1>
            <p className="text-xl text-blue-100">
              Conseils, guides et astuces pour vos transports et déménagements
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto px-4">
            {/* Featured */}
            <div className="mb-10">
              <Link href={`/blog/${articles[0].slug}`} className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={articles[0].image} alt={articles[0].title} className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-8 flex flex-col justify-center">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit ${categoryColors[articles[0].category] ?? "bg-gray-100 text-gray-600"}`}>
                    {articles[0].category}
                  </span>
                  <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#003DA5] transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{articles[0].excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{articles[0].date}</span>
                    <span>·</span>
                    <span>{articles[0].readTime} de lecture</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(1).map(article => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${categoryColors[article.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {article.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#003DA5] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
