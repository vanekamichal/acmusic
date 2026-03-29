import Head from 'next/head';

import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#2563eb] to-[#3b82f6] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300';


const releases = [
  {
    title: 'SIFON – 100 HŘÍCHŮ',
    desc: 'Vydali jsme legendární album skupiny Sifon “ 100 HŘÍCHŮ “.',
    img: 'https://acmusic.eu/wp-content/uploads/2025/10/100-hrichu-PS.jpeg',
    link: 'https://vyhodnynakup.eu/sifon-100-hrichu',
  },
  {
    title: 'KOHN – PATŘÍM DÁLKÁM',
    desc: 'Nové CD hard rockové skupiny KOHN ke koupi zde : PATŘÍM DÁLKÁM',
    img: 'https://acmusic.eu/wp-content/uploads/2024/01/CD-KOHN.jpeg',
    link: 'https://vyhodnynakup.eu/kohn-rock-cd-patrim-dalkam-2022/',
  },
  {
    title: 'KEČUP – NÁŠ PŘÍBĚH',
    desc: 'Nové CD pop rockové skupiny Kečup ke koupi zde : NÁŠ PŘÍBĚH',
    img: 'https://acmusic.eu/wp-content/uploads/2021/11/Titulka-1-768x752.jpg',
    link: 'https://vyhodnynakup.eu/kecup-cd-nas-pribeh/',
  },
  {
    title: 'SIFON – SRDCE V OKOVECH',
    desc: 'Nové CD rock metalové skupiny Sifon ke koupi zde : SRDCE V OKOVECH',
    img: 'https://acmusic.eu/wp-content/uploads/2021/11/CD-tit-1.png',
  },
  {
    title: 'ARTUR',
    desc: 'Další vydané tituly',
    img: 'https://acmusic.eu/wp-content/uploads/2021/11/CD-nahled-768x768.jpg',
  },
];

export default function VydavatelstviPage() {
  return (
    <>
      <Head>
        <title>VYDAVATELSTVÍ – AC MUSIC</title>
        <meta
          name="description"
          content="Vydáváme zvukové nosiče hudebních skupin a interpretů. Podívejte se na naše nejnovější releasy."
        />
      </Head>

      <PageHero
        title={
          <>
            VYDA<span className="text-[#60a5fa]">VATELSTVÍ</span>
          </>
        }
        description="Vydáváme zvukové nosiče hudebních skupin a interpretů."
      />

      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-16">
            <h2 className="text-3xl font-outfit font-extrabold text-white mb-4 tracking-tight uppercase">
              NOVINKY
            </h2>
            <div className="h-[2px] w-12 bg-[#3b82f6] mb-6 rounded-full" />
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {releases.map((release, idx) => (
              <FadeUp key={release.title} delay={idx * 0.1}>
                <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#3b82f6]/30">
                  <div className="relative aspect-square w-full">
                    <img
                      src={release.img}
                      alt={release.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {release.title}
                    </h3>
                    <p className="text-[#8888a0] mb-8 flex-grow">
                      {release.desc}
                    </p>
                    {release.link && (
                      <a
                        href={release.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btnPrimary}
                      >
                        Koupit v e-shopu
                      </a>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
