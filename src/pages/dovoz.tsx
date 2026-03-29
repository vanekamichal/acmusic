import Head from 'next/head';

import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#2563eb] to-[#3b82f6] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300';


export default function DovozPage() {
  return (
    <>
      <Head>
        <title>DOVOZ – AC MUSIC</title>
        <meta
          name="description"
          content="Výhradní dovoz japonských kytar TOKAI, mikrofonů Radigs a MineSound. Nabízíme také kyslíkové koncentrátory DEDAKJ."
        />
      </Head>

      <PageHero
        title={
          <>
            DOVÁŽENÉ <span className="text-[#60a5fa]">ZNAČKY</span>
          </>
        }
        description="Zajišťujeme přímý dovoz a distribuci špičkových hudebních nástrojů a techniky pro zdraví."
      />

      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <h2 className="text-3xl font-outfit font-extrabold text-white mb-6 uppercase tracking-tight">
                HUDEBNÍ NÁSTROJE
              </h2>
              <div className="space-y-10">
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-3">TOKAI</h3>
                  <p className="text-[#8888a0]">
                    Kytary japonské značky založené v roce 1947. Legendární nástroje vyhledávané profesionály.
                  </p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <h3 className="text-xl font-bold text-white mb-3">MIKROFONY</h3>
                  <ul className="text-[#8888a0] space-y-2">
                    <li>• Mikrofony Radigs</li>
                    <li>• Mikrofony Minesound</li>
                  </ul>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-3xl font-outfit font-extrabold text-white mb-6 uppercase tracking-tight">
                ZDRAVOTNÍ TECHNIKA
              </h2>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold text-[#60a5fa] mb-4">DEDAKJ GERMAN BRAND</h3>
                <p className="text-lg text-white mb-4 italic leading-relaxed">
                  &quot;NĚMECKÉ ZNAČKY 3 v 1 + IONIZÉR a ATOMIZÉR ... už nemusíte jezdit do lázní.&quot;
                </p>
                <p className="text-[#8888a0] mb-8">
                  Vhodné pro domácí oxygenoterapii, regeneraci a zlepšení dýchání.
                </p>
                <div className="relative aspect-[3/1] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <img
                    src="https://acmusic.eu/wp-content/uploads/2023/05/DEDAKJ-banner.jpg"
                    alt="DEDAKJ Banners"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp className="mt-16 text-center">
            <a
              href="https://vyhodnynakup.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className={btnPrimary}
            >
              Více produktů v e-shopu
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
