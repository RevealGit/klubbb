import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import type { Metadata } from "next";

const articles: Record<string, { category: string; title: string; excerpt: string; date: string; readTime: string; image: string; content: string }> = {
  "conseils-demenagement-reussi": {
    category: "Déménagement",
    title: "10 conseils pour réussir son déménagement sans stress",
    excerpt: "Déménager peut vite devenir une source de stress si l'on n'est pas bien organisé. Voici nos conseils pratiques pour que tout se passe dans les meilleures conditions.",
    date: "15 avril 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=500&fit=crop",
    content: `Déménager est souvent classé parmi les événements les plus stressants de la vie. Pourtant, avec une bonne organisation, tout peut se passer sans accroc. Voici nos 10 conseils incontournables.\n\n**1. Commencez à planifier 2 à 3 mois à l'avance**\nPlus vous anticipez, plus vous avez de choix pour les transporteurs et les dates. Commencez dès que vous connaissez votre date de déménagement.\n\n**2. Faites l'inventaire de vos affaires**\nAvant de faire des devis, listez tout ce que vous devez déménager. Cela permettra d'obtenir des estimations précises.\n\n**3. Désencombrez avant de déménager**\nC'est le moment idéal pour se débarrasser de ce dont vous n'avez plus besoin. Moins vous avez d'affaires, moins le déménagement coûte cher.\n\n**4. Comparez plusieurs devis**\nNe vous contentez pas du premier devis. Sur Klubbb, vous pouvez recevoir jusqu'à 10 devis de transporteurs vérifiés gratuitement.\n\n**5. Préparez vos cartons méthodiquement**\nÉtiquetez chaque carton avec son contenu et la pièce de destination. Emballez les objets fragiles soigneusement.\n\n**6. Protégez vos meubles**\nUtilisez des couvertures de déménagement pour protéger vos meubles des rayures et chocs.\n\n**7. Pensez aux démarches administratives**\nChangement d'adresse auprès des administrations, banques, assurances... Commencez ces démarches avant le déménagement.\n\n**8. Prévoyez un kit de première nuit**\nPréparez un sac avec l'essentiel pour la première nuit dans votre nouveau logement.\n\n**9. Faites un état des lieux minutieux**\nPhotographiez l'état de vos affaires avant et après le déménagement.\n\n**10. Remerciez et évaluez votre transporteur**\nUn avis sincère aide les autres utilisateurs et récompense les bons professionnels.`,
  },
  "comment-economiser-transport-voiture": {
    category: "Transport auto",
    title: "Comment économiser jusqu'à 80% sur le transport de votre voiture",
    excerpt: "Le transport d'un véhicule peut représenter un budget important. Découvrez comment la mise en concurrence des transporteurs peut vous faire économiser considérablement.",
    date: "10 avril 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=500&fit=crop",
    content: `Le transport d'un véhicule est souvent perçu comme une prestation coûteuse. Pourtant, il est tout à fait possible de réduire significativement la facture en adoptant les bonnes pratiques.\n\n**La mise en concurrence : la clé des économies**\nLe principal levier d'économie est la mise en concurrence des transporteurs. Sur une plateforme comme Klubbb, vous soumettez votre demande une seule fois et recevez plusieurs devis comparables en moins de 24 heures.\n\n**Anticiper pour mieux négocier**\nPlus vous publiez votre demande à l'avance, plus les transporteurs peuvent planifier leurs trajets et vous proposer des tarifs compétitifs. Idéalement, publiez votre demande 2 à 4 semaines avant la date souhaitée.\n\n**Profitez des trajets de retour**\nUn transporteur qui revient à vide de sa destination peut proposer un tarif très réduit pour votre véhicule. C'est ce qu'on appelle le fret de retour.\n\n**Soyez flexible sur les dates**\nSi vous pouvez vous permettre une certaine flexibilité sur les dates, vous augmentez vos chances d'obtenir un excellent tarif.\n\n**Comparez les prestations, pas seulement les prix**\nTransport ouvert ou fermé, assurance incluse ou en option, délais... Assurez-vous de comparer des offres équivalentes.`,
  },
  "choisir-bon-transporteur": {
    category: "Conseils",
    title: "Comment choisir le bon transporteur : les critères essentiels",
    excerpt: "Face à plusieurs devis, comment s'y retrouver ? Avis clients, tarifs, assurances... Voici les critères à vérifier avant de confier vos biens à un transporteur.",
    date: "5 avril 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=500&fit=crop",
    content: `Vous avez reçu plusieurs devis et maintenant vous devez choisir. Voici les critères essentiels pour faire le bon choix.\n\n**1. Vérifiez les avis clients**\nLes avis d'autres utilisateurs sont la meilleure indication de la qualité d'un transporteur. Lisez-les attentivement, notamment les plus récents.\n\n**2. Contrôlez les documents légaux**\nUn transporteur professionnel doit posséder une licence de transport et une assurance responsabilité civile professionnelle valide.\n\n**3. Étudiez l'assurance proposée**\nQuelle est la valeur maximale couverte ? Y a-t-il une franchise ? L'assurance est-elle incluse dans le prix ou en option ?\n\n**4. Comparez les délais**\nLe prix le plus bas peut s'accompagner de délais plus longs. Assurez-vous que les délais proposés correspondent à vos besoins.\n\n**5. Évaluez la communication**\nUn bon transporteur répond rapidement à vos questions et communique clairement. C'est un bon indicateur de la qualité du service.\n\n**6. Méfiez-vous des prix anormalement bas**\nUn devis beaucoup moins cher que les autres peut cacher des clauses restrictives ou une couverture d'assurance insuffisante.`,
  },
  "transport-moto-guide-complet": {
    category: "Transport moto",
    title: "Guide complet : transporter sa moto en toute sécurité",
    excerpt: "Que ce soit pour des vacances, un déménagement ou une vente, voici tout ce qu'il faut savoir pour transporter votre moto sans risque.",
    date: "28 mars 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=500&fit=crop",
    content: `Transporter une moto demande des précautions particulières pour éviter tout dommage. Voici notre guide complet.\n\n**Les différents types de transport**\nIl existe deux grandes options : le transport ouvert (sur plateau) et le transport fermé (dans un véhicule). Le transport fermé est recommandé pour les motos de valeur ou les longues distances.\n\n**Préparer votre moto pour le transport**\nAvant de confier votre moto à un transporteur, vérifiez le niveau d'essence (idéalement moins d'un quart de réservoir), débranchez la batterie si nécessaire, et prenez des photos détaillées de votre moto.\n\n**Les points de fixation**\nUn bon transporteur utilise des sangles professionnelles placées aux bons endroits. N'hésitez pas à demander comment votre moto sera arrimée.\n\n**L'assurance**\nVérifiez que l'assurance couvre la valeur réelle de votre moto. Certains transporteurs proposent une assurance complémentaire pour les motos de collection.\n\n**Que faire en cas de dommage ?**\nInspectez votre moto dès la livraison, en présence du transporteur si possible. Signalez tout dommage immédiatement sur le bon de livraison.`,
  },
  "assurance-transport-ce-quil-faut-savoir": {
    category: "Assurance",
    title: "Assurance transport : ce que vous devez absolument savoir",
    excerpt: "Quelles garanties couvrent votre marchandise pendant le transport ? Que se passe-t-il en cas de dommage ? On vous explique tout sur l'assurance transport.",
    date: "20 mars 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=500&fit=crop",
    content: `L'assurance transport est souvent méconnue mais essentielle pour protéger vos biens. Voici tout ce qu'il faut savoir.\n\n**La responsabilité du transporteur**\nEn France, le transporteur est légalement responsable des dommages causés à votre bien pendant le transport. Cependant, cette responsabilité est souvent plafonnée.\n\n**Les limites de la responsabilité légale**\nLa responsabilité légale du transporteur est limitée à un montant calculé selon le poids de la marchandise. Pour les objets de valeur, ce plafond peut être insuffisant.\n\n**L'assurance ad valorem**\nPour les biens de grande valeur (voitures de collection, instruments de musique, œuvres d'art...), optez pour une assurance ad valorem qui couvre la valeur réelle du bien.\n\n**Comment déclarer un sinistre ?**\nEn cas de dommage, vous devez émettre des réserves sur le bon de livraison et envoyer une lettre recommandée au transporteur dans les 3 jours suivant la livraison.\n\n**Les exclusions courantes**\nAttention aux exclusions : usure normale, emballage insuffisant, vice propre de la marchandise, cas de force majeure...`,
  },
  "demenagement-international-guide": {
    category: "Déménagement",
    title: "Déménagement international : les étapes clés à ne pas manquer",
    excerpt: "Vous déménagez à l'étranger ? Formalités douanières, délais, assurances... Notre guide complet pour un déménagement international réussi.",
    date: "12 mars 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=500&fit=crop",
    content: `Un déménagement international est un projet complexe qui nécessite une préparation rigoureuse. Voici les étapes clés.\n\n**Commencez la planification 3 à 6 mois à l'avance**\nUn déménagement international prend beaucoup plus de temps qu'un déménagement national. Anticipez les délais douaniers, les permis de résidence et les formalités administratives.\n\n**Les formalités douanières**\nChaque pays a ses propres règles concernant l'importation de biens personnels. Renseignez-vous auprès du consulat de votre pays de destination.\n\n**L'inventaire détaillé**\nPour le passage en douane, un inventaire détaillé de vos biens est indispensable. Chaque article doit être listé avec sa valeur estimée.\n\n**Choisir le bon mode de transport**\nSelon votre destination, vous aurez le choix entre le transport maritime (économique pour de grands volumes) et le transport aérien (plus rapide mais coûteux).\n\n**L'assurance internationale**\nAssurez-vous que votre assurance couvre les dommages pendant un transport international, y compris pendant les opérations de chargement et déchargement.\n\n**Les démarches administratives en France**\nN'oubliez pas de vous signaler auprès des consulats français à l'étranger, de transférer votre véhicule, et de régler vos obligations fiscales en France.`,
  },
};

const categoryColors: Record<string, string> = {
  "Déménagement": "bg-blue-100 text-blue-700",
  "Transport auto": "bg-orange-100 text-orange-700",
  "Conseils": "bg-green-100 text-green-700",
  "Transport moto": "bg-purple-100 text-purple-700",
  "Assurance": "bg-yellow-100 text-yellow-700",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article introuvable — Klubbb" };
  return {
    title: `${article.title} | Blog Klubbb`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }));
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl mx-auto px-4 pb-8 w-full">
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${categoryColors[article.category] ?? "bg-gray-100 text-gray-600"}`}>
                {article.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-black text-white leading-tight">{article.title}</h1>
              <div className="flex items-center gap-4 mt-3 text-sm text-white/70">
                <span className="flex items-center gap-1.5"><Calendar size={14} />{article.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} />{article.readTime} de lecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#003DA5] mb-8 transition-colors">
              <ArrowLeft size={16} />
              Retour au blog
            </Link>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">{article.excerpt}</p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              {article.content.split("\n\n").map((para, i) => (
                <p key={i} className="leading-relaxed whitespace-pre-line">{para}</p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-[#003DA5] text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-black mb-3">Prêt à organiser votre transport ?</h2>
              <p className="text-blue-100 mb-6">Publiez gratuitement votre demande et recevez des devis sous 24h.</p>
              <Link href="/publier-demande" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-8 py-4 rounded-xl inline-flex items-center gap-2 transition-colors">
                Publier ma demande
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
