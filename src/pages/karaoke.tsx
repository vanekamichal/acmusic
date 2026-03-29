import Head from 'next/head';

import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#2563eb] to-[#3b82f6] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300';


export default function KaraokePage() {
  return (
    <>
      <Head>
        <title>KARAOKE – AC MUSIC</title>
        <meta
          name="description"
          content="Výroba a prodej profesionálních karaoke písní s živými nástroji. Nejlepší karaoke na českém a slovenském trhu."
        />
      </Head>

      <PageHero
        title={
          <>
            Profesionální <span className="text-[#60a5fa]">KARAOKE</span>
          </>
        }
        description="Po třech letech provozování živých karaoke párty se naše studio Accent se rozhodlo zahájit tvorbu, výrobu a prodej karaoke písní."
      />

      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              <h2 className="h2-section mb-2 text-white uppercase tracking-tight">ŽIVÉ NÁSTROJE A VOKÁLY</h2>
              <div className="mt-3 h-[3px] w-16 rounded bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]" />
              <p className="mt-8 leading-relaxed text-[#8888a0] text-lg">
                Naše karaoke jsou s živými nástroji a vokály a dle hodnocení uživatelů jsou nejlepší na našem trhu. Zaměřujeme se hlavně na české a slovenské hity.
              </p>
              <p className="mt-4 leading-relaxed text-[#8888a0] text-lg">
                V současné době tvoříme karaoke nahrávky pro české i slovenské televizní kanály a pro většinu českých i slovenských interpretů.
              </p>
              <div className="mt-10">
                <a
                  href="https://www.karaokesong.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  Přejít na e-shop: www.karaokesong.eu
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative aspect-[4/1] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl flex items-center justify-center p-4">
                <img
                  src="https://acmusic.eu/wp-content/uploads/2021/11/Logo-karaoke-768x173.jpg"
                  alt="Karaoke Live Show"
                  className="h-full w-full object-contain"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
