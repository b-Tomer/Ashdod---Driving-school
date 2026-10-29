import { FaWhatsapp } from 'react-icons/fa';
import { SITE } from '@/data/site';

export default function WhatsAppLink() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#128C7E]/25 bg-[#128C7E]/8 px-4 py-3 text-sm font-bold text-[#128C7E] transition hover:bg-[#128C7E]/12"
    >
      <FaWhatsapp className="h-5 w-5" />
      מענה מהיר בוואטסאפ
    </a>
  );
}
