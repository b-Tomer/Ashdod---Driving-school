import { FaWhatsapp } from 'react-icons/fa';
import { SITE } from '@/data/site';
import { scrollToSection } from '@/utils/helpers';

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone-200 bg-white/95 p-2 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-site grid-cols-2 gap-2">
        <a
          href={SITE.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#128C7E] px-3 py-2.5 text-sm font-bold text-white"
        >
          <FaWhatsapp className="h-4 w-4" />
          וואטסאפ
        </a>
        <button
          type="button"
          onClick={() => scrollToSection('lead-top')}
          className="rounded-xl bg-gold px-3 py-2.5 text-sm font-bold text-navy-deep"
        >
          השאירו פרטים
        </button>
      </div>
    </div>
  );
}
