import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaWhatsapp } from 'react-icons/fa6';
import { MdMailOutline, MdPhone } from 'react-icons/md';
import { SITE } from '@/data/site';

export default function SideNav({ onClose, isOpen, links = [], onLeadClick }) {
  const router = useRouter();

  return (
    <div className="md:hidden">
      <div
        role="presentation"
        onClick={onClose}
        className={`fixed inset-x-0 bottom-0 top-16 z-50 bg-navy-deep/45 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        id="mobile-menu"
        aria-label="תפריט ניווט"
        aria-hidden={!isOpen}
        className={`fixed bottom-0 top-16 z-[60] flex w-[min(18rem,86vw)] flex-col bg-white shadow-lift transition-transform duration-300 ease-out ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{
          right: 0,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          {links.map((link) => {
            const active = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`rounded-xl px-4 py-3 text-base ${
                  active ? 'bg-gold-soft font-bold text-navy' : 'text-navy hover:bg-cream'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="#lead-top"
            onClick={onLeadClick}
            className="mt-2 rounded-xl bg-gold px-4 py-3 text-center text-base font-bold text-navy-deep"
          >
            השאירו פרטים
          </a>
        </nav>

        <div className="space-y-3 border-t border-stone-200 px-4 py-5 pb-28 text-center text-sm text-stone-600">
          <p>{SITE.address}</p>
          <div className="flex items-center justify-center gap-4 text-navy">
            <a href={SITE.phoneHref} aria-label="טלפון">
              <MdPhone className="h-6 w-6" />
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="וואטסאפ">
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a href={SITE.emailHref} aria-label="מייל">
              <MdMailOutline className="h-6 w-6" />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
