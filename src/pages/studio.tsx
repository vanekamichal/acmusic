import Head from 'next/head';

import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#2563eb] to-[#3b82f6] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300';


export default function StudioPage() {
  return (
    <>
      <Head>
        <title>STUDIO ACCENT – AC MUSIC</title>
        <meta
          name="description"
          content="Nahrávací a produkční studio Accent s více jak 24-letou historií. Nabízíme profesionální záznam, mix a mastering."
        />
      </Head>

      <PageHero
        title={
          <>
            Nahrávací a <span className="text-[#60a5fa]">produkční studio</span>
          </>
        }
        description="Součástí společnosti je nahrávací studio a produkční studio Accent s více jak 24-letou historií."
      />

      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              <h2 className="h2-section mb-2 text-white uppercase">TRADICE A KVALITA</h2>
              <div className="mt-3 h-[3px] w-16 rounded bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]" />
              <p className="mt-8 leading-relaxed text-[#8888a0] text-lg">
                Prozatím můžete mrknout na náš profil na facebooku :{' '}
                <a
                  href="https://www.facebook.com/accentaudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60a5fa] hover:underline"
                >
                  FB Accent
                </a>
              </p>
              <p className="mt-4 leading-relaxed text-[#8888a0] text-lg">
                Ukázky nahrávek můžete poslechnout zde na{' '}
                <a
                  href="https://soundcloud.com/accentrecord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60a5fa] hover:underline"
                >
                  soundcloud
                </a>
              </p>
              <p className="mt-4 leading-relaxed text-[#8888a0] text-lg">
                Ukázky našich karaoke zde{' '}
                <a
                  href="https://www.youtube.com/watch?v=Sgn7WOlaYPg&list=PL08A8B808A2ABEF98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#60a5fa] hover:underline"
                >
                  accentrecord karaoke samples
                </a>
              </p>
              <p className="mt-10">
                <a
                  href="https://www.karaokesong.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  Online prodej karaoke zde na karaokesong.eu
                </a>
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
                <img
                  src="https://acmusic.eu/wp-content/uploads/2021/11/rezie_new.jpg"
                  alt="Studio Accent"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
