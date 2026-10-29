import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/data/site';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white pb-24 pt-10 md:pb-10">
      <div className="mx-auto flex max-w-site flex-col items-center gap-6 px-4 text-center sm:px-6">
        <div className="flex items-center gap-3">
          <Image src={SITE.logo} alt="" width={36} height={36} className="rounded-full" />
          <p className="font-bold text-navy">{SITE.name}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-stone-600">
          <Link href="/b-license">רישיון לרכב פרטי</Link>
          <Link href="/c1-license">רישיון למשאית</Link>
          <a href={SITE.phoneHref}>{SITE.phone}</a>
          <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer">
            {SITE.address}
          </a>
        </div>
        <p className="text-xs text-stone-500">© כל הזכויות שמורות · {SITE.name}</p>
      </div>
    </footer>
  );
}
