import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie-Claire D.",
    location: "Paris → Lyon",
    service: "Déménagement complet",
    rating: 5,
    text: "Service impeccable ! J'ai reçu 6 devis en moins de 3 heures. J'ai économisé plus de 400€ par rapport au premier devis que j'avais reçu en dehors de Klubbb. Le déménageur choisi était professionnel et ponctuel.",
    avatar: "M",
  },
  {
    name: "Thomas R.",
    location: "Marseille → Bordeaux",
    service: "Transport de voiture",
    rating: 5,
    text: "Ma voiture a été livrée en parfait état. La plateforme est très intuitive, j'ai publié ma demande en 5 minutes et j'ai eu mes premiers devis dès le lendemain matin. Je recommande vivement.",
    avatar: "T",
  },
  {
    name: "Sophie & Marc L.",
    location: "Nantes → Toulouse",
    service: "Meubles & Électroménager",
    rating: 5,
    text: "On a déménagé nos gros meubles sans stress grâce à Klubbb. Économie de 55% ! Le transporteur a été soigneux avec notre piano. On n'utilisera plus jamais les agences de déménagement traditionnelles.",
    avatar: "S",
  },
  {
    name: "Jean-Pierre M.",
    location: "Nice → Paris",
    service: "Transport de moto",
    rating: 5,
    text: "Ma moto de collection est arrivée sans une égratignure. Le suivi en temps réel est rassurant. Excellent rapport qualité-prix, je suis très satisfait du service Klubbb.",
    avatar: "J",
  },
  {
    name: "Isabelle C.",
    location: "Strasbourg → Rennes",
    service: "Transport de bateau",
    rating: 4,
    text: "Très bonne expérience pour le transport de mon voilier. L'équipe Klubbb a répondu rapidement à mes questions. Le transporteur spécialisé était compétent. Je ferai appel à Klubbb pour mes prochains transports.",
    avatar: "I",
  },
  {
    name: "Kevin B.",
    location: "Lille → Lyon",
    service: "Produits industriels",
    rating: 5,
    text: "Pour notre PME, Klubbb est devenu indispensable. On gère nos transports d'équipements industriels via la plateforme depuis 1 an. Fiable, rapide, économique. Parfait pour les professionnels.",
    avatar: "K",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="section-subtitle">
            Plus de 156 000 clients satisfaits en France et en Europe
          </p>
          {/* Rating summary */}
          <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-3 rounded-full shadow-sm border border-gray-100 mt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-gray-900 text-sm">4.8/5</span>
            <span className="text-gray-400 text-xs sm:text-sm">basé sur 12 400+ avis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote size={24} className="text-[#003DA5]/20 mb-3" />
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#003DA5] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.service}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
