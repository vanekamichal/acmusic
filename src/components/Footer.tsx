import Link from 'next/link';

const pages = [
  { href: '/', label: 'Domů' },
  { href: '/agentura', label: 'Agentura' },
  { href: '/studio', label: 'Studio' },
  { href: '/vydavatelstvi', label: 'Vydavatelství' },
  { href: '/karaoke', label: 'Karaoke' },
  { href: '/contact', label: 'Kontakt' },
];

const services = [
  { href: '/agentura', label: 'Umělecká agentura' },
  { href: '/studio', label: 'Studio Accent' },
  { href: '/vydavatelstvi', label: 'Vydavatelství' },
  { href: '/karaoke', label: 'Karaoke produkce' },
  { href: '/dovoz', label: 'Dovoz kytar Tokai' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#111118] pt-16 pb-8">
      <div className="mx-auto w-[90vw] max-w-[1200px]">
        <div className="mb-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="font-outfit text-xl font-extrabold text-white">AC MUSIC</div>
            <div className="mb-3 text-[0.7rem] tracking-[0.18em] text-[#3b82f6] uppercase">
              Podtitul nebo Obor
            </div>
            <p className="text-sm leading-relaxed text-[#8888a0]">
              Stručný popis vaší společnosti a jejích hlavních hodnot. Tento text slouží k
              představení vaší vize.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-outfit mb-4 text-xs font-bold tracking-[0.1em] text-white uppercase">
              Stránky
            </h4>
            {pages.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="block py-1 text-sm text-[#8888a0] transition-colors duration-300 hover:text-[#60a5fa]"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit mb-4 text-xs font-bold tracking-[0.1em] text-white uppercase">
              Služby
            </h4>
            {services.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="block py-1 text-sm text-[#8888a0] transition-colors duration-300 hover:text-[#60a5fa]"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit mb-4 text-xs font-bold tracking-[0.1em] text-white uppercase">
              Kontakt
            </h4>
            <a
              href="mailto:acmusic@email.cz"
              className="block py-1 text-sm text-[#8888a0] transition-colors duration-300 hover:text-[#60a5fa]"
            >
              acmusic@email.cz
            </a>
            <a
              href="tel:+420603332100"
              className="block py-1 text-sm text-[#8888a0] transition-colors duration-300 hover:text-[#60a5fa]"
            >
              +420 603 332 100
            </a>
            <Link
              href="/contact"
              className="block py-1 text-sm text-[#8888a0] transition-colors duration-300 hover:text-[#60a5fa]"
            >
              AC MUSIC s.r.o.
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-sm text-[#8888a0]">© 2024 AC MUSIC. Všechna práva vyhrazena.</p>
          <div className="flex gap-3">
            {[
              { href: 'https://www.facebook.com', label: 'f', title: 'Facebook' },
              { href: 'https://soundcloud.com', label: '☁', title: 'SoundCloud' },
              { href: 'https://youtube.com', label: '▶', title: 'YouTube' },
            ].map(({ href, label, title }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm text-[#8888a0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3b82f6] hover:text-[#60a5fa]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
