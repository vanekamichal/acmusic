import Head from 'next/head';

import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const contactData = [
  {
    title: 'Hudební produkce, agentura, technika',
    scope: 'Hudební nástroje a technika, hudební vydavatelství, kyslíkové koncentrátory, vodíkové generátory, sterilizátory.',
    email: 'acmusic@email.cz',
    tel: '603 332 100',
    img: 'https://acmusic.eu/wp-content/uploads/2024/01/AC-MUSIC-KRUHM.png',
  },
  {
    title: 'Nahrávací a produkční studio, karaoke',
    scope: 'Studio Accent, výroba a prodej karaoke písní.',
    email: 'accent@razdva.cz',
    tel: '603 332 100, 777 659 113',
    img: 'https://acmusic.eu/wp-content/uploads/2024/01/logo_new-removebg.png',
  },
];

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>KONTAKTY – AC MUSIC</title>
        <meta
          name="description"
          content="Kontaktujte nás pro hudební produkci, studiové náhrávání, karaoke nebo zdravotní techniku."
        />
      </Head>

      <PageHero
        title={
          <>
            KON<span className="text-[#60a5fa]">TAKTY</span>
          </>
        }
        description="Jsme vám k dispozici pro veškeré dotazy a poptávky."
      />

      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {contactData.map((contact, idx) => (
              <FadeUp key={contact.title} delay={idx * 0.1}>
                <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl transition-all duration-300 hover:border-[#3b82f6]/30">
                  <div className="mb-8 flex justify-center">
                    <img
                      src={contact.img}
                      alt={contact.title}
                      className="h-32 w-auto object-contain brightness-110"
                    />
                  </div>
                  <h2 className="text-2xl font-outfit font-extrabold text-white mb-4 tracking-tight uppercase text-center">
                    {contact.title}
                  </h2>
                  <p className="text-[#8888a0] mb-8 text-center flex-grow">
                    {contact.scope}
                  </p>
                  <div className="mt-auto space-y-6 pt-8 border-t border-white/10 text-center">
                    <div>
                      <div className="text-xs text-[#3b82f6] font-bold tracking-widest uppercase mb-2">E-mail:</div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-xl font-bold text-white hover:text-[#60a5fa] transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div>
                      <div className="text-xs text-[#3b82f6] font-bold tracking-widest uppercase mb-2">Tel.:</div>
                      <div className="text-xl font-bold text-white">
                        {contact.tel}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-24 text-center">
            <h3 className="text-xl font-bold text-white mb-6 uppercase">SÍDLO SPOLEČNOSTI</h3>
            <p className="text-[#8888a0] text-lg">
              AC MUSIC s.r.o.
              <br />
              (Další údaje dle obchodního rejstříku)
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
