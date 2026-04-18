import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#003DA5] to-[#1a56c4]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
          Prêt à simplifier votre transport ?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Publiez votre demande gratuitement et recevez des devis de transporteurs vérifiés
          en moins de 24 heures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/publier-demande"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-lg shadow-lg"
          >
            Publier ma demande gratuitement
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/comment-ca-marche"
            className="border-2 border-white text-white hover:bg-white hover:text-[#003DA5] font-bold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-lg"
          >
            Comment ça marche ?
          </Link>
        </div>

        <p className="text-blue-200 text-sm mt-6">
          100% gratuit pour les expéditeurs · Sans engagement · Sans inscription obligatoire
        </p>
      </div>
    </section>
  );
}
