const ITEMS = [
  { title: '30+ שנות ניסיון', text: 'שמעון בנאיים וצוות מורים קבוע' },
  { title: 'משאית ידני ואוטומט', text: 'רישיון C1 עד 12 טון' },
  { title: 'רכב פרטי  ', text: 'לימוד ברכב GEELY חדש ובטיחותי' },
  { title: 'סימולטור נהיגה', text: 'תרגול לילה, גשם ומצבי סכנה' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto grid max-w-site gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.title} className="rounded-xl bg-cream px-4 py-3">
            <p className="font-bold text-navy">{item.title}</p>
            <p className="mt-1 text-sm text-stone-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
