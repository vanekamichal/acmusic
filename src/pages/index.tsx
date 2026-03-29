import Image from 'next/image';
import Link from 'next/link';

import FadeUp from '@/components/FadeUp';

const badge = (text: string) => (
  <span className="mb-4 inline-block rounded-full border border-[rgba(59,130,246,0.35)] bg-[rgba(59,130,246,0.15)] px-3 py-1 text-[0.78rem] font-semibold tracking-[0.08em] text-[#60a5fa] uppercase">
    {text}
  </span>
);

const accentLine = (
  <span className="mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]" />
);

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#2563eb] to-[#3b82f6] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_0_0] hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]';
const btnOutline =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-[#e8e8f0] border border-white/10 hover:border-[#3b82f6] hover:text-[#60a5fa] hover:-translate-y-0.5 transition-all duration-300';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden md:min-h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/placeholder_hero.webp"
            alt="Profesionální pozadí šablony"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/30 to-[#0a0a0f]" />
        </div>
        <div className="relative z-10 mx-auto w-[90vw] max-w-[1200px] pt-[72px]">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#3b82f6] uppercase">
            HUDEBNÍ NÁSTROJE A TECHNIKA · OD ROKU 1992
          </p>
          <h1 className="h1-hero mb-5 text-white uppercase font-outfit">
            AC MUSIC
          </h1>
          <p className="mb-8 max-w-[65ch] text-lg text-[rgba(232,232,240,0.9)] leading-relaxed">
            Od roku 1992 prodáváme hudební nástroje a techniku a od pandemie i kyslíkové koncentrátory, vodíkové generátory a dezinfekční přístroje. Součástí firmy je i nahrávací a produkční studio Accent s více jak 25-letou historií. Vydáváme zvukové nosiče hudebních skupin a interpretů.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/agentura"
              className={btnPrimary}
            >
              <span>🎸</span> Naše Agentura
            </Link>
            <Link
              href="/studio"
              className={btnOutline}
            >
              <span>🎙️</span> Studio Accent
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap gap-10">
            {[
              { num: '1992', label: 'Rok založení' },
              { num: '30+', label: 'Let zkušeností' },
              { num: '100%', label: 'Kvalita a servis' },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="flex flex-col"
              >
                <span className="font-head text-4xl leading-none font-bold text-[#60a5fa]">
                  {num}
                </span>
                <span className="mt-1 text-xs tracking-widest text-[rgba(232,232,240,0.8)] uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAG BAND */}
      <section className="w-full border-y border-white/10 bg-gradient-to-br from-[#18181f] to-[#111118] py-12">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              '✨ Kvalita',
              '🚀 Rychlost',
              '🤝 Spolehlivost',
              '💡 Inovace',
              '📱 Responzivita',
              '🎨 Design',
              '📈 Růst',
              '🛡️ Bezpečnost',
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-[#8888a0]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* O NÁS */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              {badge('O nás')}
              <h2 className="h2-section mb-2 text-white">KVALITA A TRADICE</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#f0f0f5] text-lg italic">
                &quot;Naše karaoka s živými nástroji a vokály jsou dle hodnocení uživatelů nejlepší na našem trhu.&quot;
              </p>
              <p className="mt-4 leading-relaxed text-[#8888a0]">
                Zajistíme vystoupení uměleckých souborů, hudebních skupin a interpretů, karaoke show aj.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/karaoke"
                  className={btnPrimary}
                >
                  Více o Karaoke
                </Link>
                <Link
                  href="/agentura"
                  className={btnOutline}
                >
                  Naše Agentura
                </Link>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#444450]">
                <span className="text-xl">Obrázek týmu / prostor</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <FadeUp className="mb-10 text-center">
            {badge('Divize')}
            <h2 className="h2-section mb-2 text-white">Naše specializace</h2>
            <span className="mx-auto mt-3 block h-[3px] w-16 rounded bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]" />
            <p className="mx-auto mt-4 max-w-[56ch] text-[#8888a0]">
              Kompletní servis v oblasti hudební produkce, techniky i uměleckého zastoupení.
            </p>
          </FadeUp>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🎙️',
                title: 'Nahrávací studio',
                desc: 'Studio Accent s historií od roku 1998 nabízí high-end záznam, mix a mastering s využitím špičkové analogové techniky.',
              },
              {
                icon: '🎷',
                title: 'Umělecká agentura',
                desc: 'Zajištění kulturních akcí na klíč, zprostředkování umělců jako ABBA STAR, moderátorů a ozvučení.',
              },
              {
                icon: '🎸',
                title: 'Dovoz a prodej',
                desc: 'Výhradní distribuce japonských kytar TOKAI, mikrofonů MineSound a další hudební techniky.',
              },
              {
                icon: '💿',
                title: 'Vydavatelství',
                desc: 'Kompletní servis pro vydávání CD a vinylů pro kapely i sólové interprety.',
              },
              {
                icon: '🎤',
                title: 'Karaoke produkce',
                desc: 'Výroba a prodej profesionálních karaoke skladeb s živě nahranými nástroji pro nejlepší zážitek.',
              },
              {
                icon: '🔋',
                title: 'Zdravotní technika',
                desc: 'Dovoz a prodej generátorů vodíku a kyslíkových koncentrátorů pro regeneraci a vitalitu.',
              },
            ].map(({ icon, title, desc }, i) => (
              <FadeUp
                key={title}
                delay={i * 0.05}
              >
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(59,130,246,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(59,130,246,0.2)] bg-[rgba(59,130,246,0.12)] text-2xl">
                    {icon}
                  </div>
                  <h3 className="h3-card mb-2 text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#8888a0]">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="https://eshop.acmusic.cz"
              className={btnPrimary}
            >
              Přejít do E-shopu
            </Link>
          </div>
        </div>
      </section>

      {/* PRO PARTNERY */}
      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1200px]">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <FadeUp>
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#444450]">
                <span className="text-xl">Obrázek produktu / výsledku</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              {badge('Proč my')}
              <h2 className="h2-section mb-2 text-white">Vize dotažená k dokonalosti</h2>
              {accentLine}
              <p className="mt-5 leading-relaxed text-[#8888a0]">
                Proč byste měli spolupracovat právě s námi? Zakládáme si na individuálním přístupu
                ke každému projektu a na transparentnosti celého procesu.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {[
                  {
                    title: 'Individuální přístup',
                    sub: 'Všechna řešení navrhujeme přesně podle vašich potřeb a cílů',
                  },
                  {
                    title: 'Transparentní komunikace',
                    sub: 'O průběhu projektu budete mít vždy aktuální a přehledné informace',
                  },
                  {
                    title: 'Odbornost a certifikace',
                    sub: 'Náš tým pravidelně sleduje nejnovější trendy v oboru',
                  },
                ].map(({ title, sub }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:translate-x-1 hover:border-[rgba(59,130,246,0.3)]"
                  >
                    <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#3b82f6]" />
                    <div>
                      <strong className="text-sm text-white">{title}</strong>
                      <span className="mt-0.5 block text-xs text-[#8888a0]">{sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="w-full border-t border-white/10 bg-[#111118] py-24">
        <div className="mx-auto w-[90vw] max-w-[700px] text-center">
          {badge('Kontaktujte nás')}
          <FadeUp>
            <h2 className="h2-section mb-3 text-white">Připraveni na další krok?</h2>
            <p className="mb-8 text-base text-[#8888a0]">
              Rádi s vámi probereme váš projekt a navrhneme nejlepší možné řešení. Nezávazná
              konzultace je samozřejmostí.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={btnPrimary}
              >
                ✉️ Odeslat poptávku
              </Link>
              <Link
                href="/reference"
                className={btnOutline}
              >
                🎨 Naše reference
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
