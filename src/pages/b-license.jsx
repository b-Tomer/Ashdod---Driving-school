import Head from 'next/head';
import Image from 'next/image';
import LeadForm from '@/Components/LeadForm';
import { IMAGES, SITE } from '@/data/site';

const POINTS = [
  'לימוד על רכב BYD חדש עם מערכות בטיחות מתקדמות',
  'קצב אישי, בלי לחץ מיותר ובלי קיצורי דרך מסוכנים',
  'תרגול בסימולטור לפני יציאה למצבים מורכבים',
  'ליווי של מורים מנוסים באשדוד והסביבה',
];

export default function LicenseBPage() {
  return (
    <main>
      <Head>
        <title>רישיון לרכב פרטי דרגה B | בית ספר לנהיגה אשדוד</title>
        <meta
          name="description"
          content="לימוד נהיגה לרכב פרטי באשדוד על BYD חדש. השאירו פרטים ונחזור אליכם לתיאום שיעור ראשון."
        />
      </Head>

      <section className="relative overflow-hidden bg-navy-deep">
        <Image src={IMAGES.carB} alt="" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="relative mx-auto grid max-w-site gap-8 px-4 py-8 pb-28 sm:px-6 md:pb-10 lg:grid-cols-2 lg:py-14">
          <div className="text-white">
            <p className="text-sm font-medium text-gold">רישיון לרכב פרטי</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-5xl">רישיון B בדרך רגועה ובטוחה</h1>
            <p className="mt-4 max-w-lg text-white/85 leading-7">
              מתחילים ברכב מודרני, לומדים בקצב שלכם, ומגיעים לטסט עם ביטחון. מתאים למי שמוציא רישיון ראשון באשדוד והסביבה.
            </p>
          </div>
          <div id="lead-top" className="rounded-2xl bg-cream p-5 shadow-lift sm:p-6">
            <h2 className="text-xl font-bold text-navy">השאירו פרטים לרישיון B</h2>
            <p className="mt-1 mb-4 text-sm text-stone-600">נחזור אליכם לתיאום שיחה קצרה והתחלת מסלול.</p>
            <LeadForm idPrefix="b-top" source="עמוד רישיון B - עליון" defaultLicense="רכב פרטי B" variant="compact" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-site items-start gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-bold text-navy">למה אצלנו</h2>
          <ul className="mt-5 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="rounded-xl bg-white px-4 py-3 text-stone-700 shadow-card">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-52 overflow-hidden rounded-2xl sm:h-64">
          <Image src={IMAGES.carB} alt="רכב לימוד לרישיון B" fill className="object-cover" />
        </div>
      </section>

      <section id="contact" className="bg-navy py-12">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="mb-5 text-center text-white">
            <h2 className="text-3xl font-bold">רוצים להתחיל רישיון B?</h2>
            <p className="mt-2 text-white/80">{SITE.phone} · {SITE.address}</p>
          </div>
          <div className="rounded-2xl bg-cream p-5 sm:p-6">
            <LeadForm idPrefix="b-bottom" source="עמוד רישיון B - תחתון" defaultLicense="רכב פרטי B" />
          </div>
        </div>
      </section>
    </main>
  );
}
