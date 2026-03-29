import Head from 'next/head';
import FadeUp from '@/components/FadeUp';
import PageHero from '@/components/PageHero';

const btnPrimary =
  'inline-flex items-center gap-2 px-7 py-3 rounded text-sm font-semibold text-black bg-gradient-to-br from-[#2563eb] to-[#3b82f6] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300';


const artists = [
  {
    name: 'ABBA STAR',
    desc: 'Skupina ABBA STAR je jeden z nejlepších revivalů legendární švédské skupiny ABBA a můžete si být jisti, že je tou pravou show pro vaši akci a jejich vystoupení nadchne vaše publikum, klienty, zákazníky i vás. Zpěvačky Anna Batková a Genny Ciatti spolu s klávesistou Michalem Vaňkem mají za sebou koncerty v Německu, Francii, Itálii a dalších zemích Evropy a hlavně veleúspěšné turné ve Španělsku, kde po koncertech v Madridu, Zaragoze, Mallorce, Vigu, Bilbau a dalších vyprodali kultovní palác hudby &bdquo;Palau de la Musica&ldquo; v Barceloně. Novým členem je kytarista Vašík Křivanec.',
    img: 'https://acmusic.eu/wp-content/uploads/2025/03/ABBA-Inst.jpg',
    link: 'https://abbastar.cz/',
  },
  {
    name: 'SIFON',
    desc: 'Plzeňská skupina SIFON se pohybuje na rockových pódiích již přes čtyřicet let a má na kontě 9 alb a dvě live DVD. Legendární gramofonová deska &bdquo;100 HŘÍCHŮ&ldquo; z roku 1991 má dnes již sběratelskou hodnotu a cena na burze se pohybuje kolem 300 Euro. Skupina se vyznačuje melodičností a hitovostí svých skladeb s výbornou instrumentací a vícehlasými vokály. Její rockové balady jsou vyhlášené jako například Soudnej den ze stejnojmenného alba.',
    img: 'https://acmusic.eu/wp-content/uploads/2025/10/100-hrichu-PS.jpeg',
    link: 'https://vyhodnynakup.eu/sifon-100-hrichu',
  },
  {
    name: 'QUEENWAYS',
    desc: 'QUEENWAYS si zakládá na interpretaci nejslavnějších hitů legendární kapely Queen a svou živou produkcí a energickými vystoupeními přenese zpět do doby, kdy Queen ovládal stadiony po celém světě. V čele kapely stojí charismatický frontman Jaroslav Bulsara ( Břeský ), který se proslavil svými přesvědčivými interpretacemi písní Queen a svou hlasovou barvou, podobnou Freddie Mercurymu. Jaroslav byl pozván na festival Montreux Music a měl možnost se osobně setkat s členy skupiny Queen.',
    img: 'https://acmusic.eu/wp-content/uploads/2023/05/QUEEN-WAYS.png',
    link: 'http://www.queenways.cz/',
  },
  {
    name: 'SIFON Original',
    desc: '* ZASE ŽIVĚ ! * Aneb legendární plzeňská rocková skupina Palice, kterou založil v roce 1997 zakladatel Alice Jiří Jiří Mikeš Milý spolu s Michalem Pošvářem a Pavlem Mouřencem je po letech opět na scéně s novým zpěvákem a druhým kytaristou.',
    img: 'https://acmusic.eu/wp-content/uploads/2023/05/Sifon-OR-1.jpg',
  },
  {
    name: 'ELECTRIC THERAPY',
    desc: 'Electric začal zkoušet v počátcích roku 2015 jako projekt dvou kytaristů, dnes již legendární plzeňské skupiny ALICE. Její základní filozofií je hrát na profesionální úrovni převzaté skladby, které na ně měly během jejich více než 25ti leté hudební kariéry zásadní vliv. Tyto skladby jsou během vystoupení doplněny několika vlastními kusy z dílny ELECTRIC THERAPY a autorskými počiny obou kytaristů z působení v jejich domovské kapele ALICE (Ani náhodou, Klidná, Chápej mě, Teritoriální král...)',
    link: 'https://www.facebook.com/ElectricTherapy/',
  },
  {
    name: 'KROKY MICHALA DAVIDA',
    desc: 'Skupina KROKY MICHALA DAVIDA je v současné době jednou z nejžádanějších kapel nejen v Čechách, ale i na Slovensku. Kromě samostatných koncertů vystupuje kapela nejčastěji na městských slavnostech, diskotékách, firemních a V.I.P. akcích a jako hosté reprezentačních, městských či obecních plesů. Hity Michala Davida jsou prostě nesmrtelné a v podání skupiny Kroky Michala Davida, které největší jeho hity upravily do moderních aranží slaví obrovský úspěch. Patronem této skupiny je sám Michal David, jedná se tedy o jediný autorizovaný revival band v ČR a SR.',
    link: 'https://www.krokymichaladavida.cz/',
  },
  {
    name: 'OLYMPIC Revival',
    desc: 'Nejžádanější revival legendární kapely Olympic. Nikdo nedokáže nahradit originál. Naším cílem není být kapelou Olympic, ale věrně interpretovat písně této legendy. Notoricky známé hity a podiová show nám dovoluje naladit tu správnou atmosféru a přiblížit tak posluchačům obdobný zážitek, který by zažili na koncertě pravé kapely. Naše formace je složená z profesionálních muzikantů s letitými zkušenostmi, které se snažíme vložit do těchto nezapomenutelných hitů legendy České populární hudby.',
    link: 'https://www.olympicrevival.cz/',
  },
];

export default function AgenturaPage() {
  return (
    <>
      <Head>
        <title>AGENTURA – AC MUSIC</title>
        <meta
          name="description"
          content="Zajišťujeme vystoupení uměleckých souborů, hudebních skupin a interpretů. Moderátory, ozvučení a karaoke show."
        />
      </Head>

      <PageHero
        title={
          <>
            AGENTURA <span className="text-[#60a5fa]">HUDEBNÍ PRODUKCE</span>
          </>
        }
        description="ZAJISTÍME : VYSTOUPENÍ UMĚLECKÝCH SOUBORŮ, HUDEBNÍCH SKUPIN A INTERPRETŮ, MODERÁTORY A MODERÁTORKY, OZVUČENÍ AKCÍ, ŽIVÉ KARAOKE SHOW."
      />

      <section className="w-full py-24">
        <div className="mx-auto w-[90vw] max-w-[1000px]">
          <div className="flex flex-col gap-24">
            {artists.map((artist, idx) => (
              <FadeUp key={artist.name} delay={idx * 0.05}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                  {artist.img && (
                    <div className="md:col-span-5">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl">
                        <img
                          src={artist.img}
                          alt={artist.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div className={artist.img ? 'md:col-span-7' : 'md:col-span-12'}>
                    <h2 className="text-3xl font-outfit font-extrabold text-white mb-4 tracking-tight uppercase">
                      {artist.name}
                    </h2>
                    <div className="h-[2px] w-12 bg-[#3b82f6] mb-6 rounded-full" />
                    <p className="text-[#8888a0] leading-relaxed mb-8 text-lg">
                      {artist.desc}
                    </p>
                    {artist.link && (
                      <a
                        href={artist.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={btnPrimary}
                      >
                        Oficiální stránky
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
