import Image from 'next/image';

export default function TestimonialCard({ imageUrl, name, text }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-card">
      <div className="flex items-center gap-3">
        <Image src={imageUrl} alt={name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
        <p className="font-bold text-navy">{name}</p>
      </div>
      <blockquote className="mt-3 text-sm leading-6 text-stone-600">“{text}”</blockquote>
    </article>
  );
}
