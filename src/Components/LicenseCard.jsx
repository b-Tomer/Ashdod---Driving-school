import Image from 'next/image';
import Link from 'next/link';

export default function LicenseCard({ title, description, imageUrl, href, badge }) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      <div className="relative h-40 w-full overflow-hidden sm:h-44">
        <Image src={imageUrl} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" />
        {badge && (
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy">
            {badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-navy">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-stone-600">{description}</p>
        <span className="mt-4 text-sm font-bold text-navy">לפרטים נוספים ←</span>
      </div>
    </Link>
  );
}
