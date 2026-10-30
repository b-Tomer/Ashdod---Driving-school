import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { SITE } from '@/data/site';
import { scrollToSection } from '@/utils/helpers';
import SideNav from './SideNav';

const NAV_LINKS = [
  { href: '/', label: 'ראשי' },
  { href: '/b-license', label: 'רישיון B' },
  { href: '/c1-license', label: 'רישיון משאית' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function toggleNav() {
    setIsOpen((open) => !open);
  }

  function closeNav() {
    setIsOpen(false);
  }

  function goToLead(event) {
    event.preventDefault();
    setIsOpen(false);
    if (document.getElementById('lead-top')) {
      scrollToSection('lead-top');
      return;
    }
    router.push('/#lead-top');
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const close = () => setIsOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const line = 'h-0.5 w-6 rounded-full bg-navy transition';

  return (
    <>
      <header className="sticky top-0 z-[70] border-b border-stone-200/80 bg-cream/95 backdrop-blur">
        <nav className="mx-auto flex max-w-site items-center gap-2 px-4 py-2 sm:px-6 sm:py-3">
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center md:hidden"
            onClick={toggleNav}
            aria-label={isOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={`${line} ${isOpen ? 'translate-y-[5px] rotate-45' : ''}`} />
            <span className={`${line} my-1 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`${line} ${isOpen ? '-translate-y-[5px] -rotate-45' : ''}`} />
          </button>

          <Link href="/" className="flex min-w-0 flex-1 items-center gap-2.5 md:flex-none">
            <Image src={SITE.logo} alt="" width={40} height={40} className="rounded-full" />
            <span className="truncate text-sm font-bold text-navy sm:text-base">{SITE.name}</span>
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-6 md:flex">
            {NAV_LINKS.map((link) => {
              const active = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium ${active ? 'text-navy' : 'text-stone-600 hover:text-navy'}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#128C7E] shadow-sm"
              aria-label="וואטסאפ"
            >
              <FaWhatsapp className="h-5 w-5" />
            </a>
            <a
              href="#lead-top"
              onClick={goToLead}
              className="hidden rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy-deep sm:inline-flex"
            >
              השאירו פרטים
            </a>
          </div>
        </nav>
      </header>

      <SideNav
        isOpen={isOpen}
        onClose={closeNav}
        links={NAV_LINKS}
        onLeadClick={goToLead}
      />
    </>
  );
}
