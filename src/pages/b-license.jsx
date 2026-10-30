import Head from 'next/head';
import Image from 'next/image';
import LeadForm from '@/Components/LeadForm';
import { IMAGES, SITE } from '@/data/site';

const POINTS = [
  'לימוד על רכב GEELY חדש עם מערכות בטיחות מתקדמות',
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
          content="לימוד נהיגה לרכב פרטי באשדוד על GEELY חדש. השאירו פרטים ונחזור אליכם לתיאום שיעור ראשון."
        />
      </Head>

      <section className="relative overflow-hidden bg-navy-deep">
        <Image src={IMAGES.carBStreet} alt="" fill className="object-cover object-center opacity-30" priority />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="relative mx-auto grid max-w-site gap-3 px-4 py-4 pb-24 sm:gap-8 sm:px-6 sm:py-10 md:pb-10 lg:grid-cols-2 lg:py-14">
          <div className="text-white">
            <p className="text-xs font-medium text-gold sm:text-sm">רישיון לרכב פרטי</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight sm:mt-2 sm:text-5xl">רישיון B בדרך רגועה ובטוחה</h1>
            <p className="mt-2 hidden max-w-lg text-white/85 leading-7 sm:mt-4 sm:block">
              מתחילים ברכב מודרני, לומדים בקצב שלכם, ומגיעים לטסט עם ביטחון. מתאים למי שמוציא רישיון ראשון באשדוד והסביבה.
            </p>
          </div>
          <div id="lead-top" className="rounded-2xl bg-cream p-3.5 shadow-lift sm:p-6">
            <h2 className="text-lg font-bold text-navy sm:text-xl">השאירו פרטים לרישיון B</h2>
            <p className="mb-2 mt-0.5 hidden text-sm text-stone-600 sm:mb-4 sm:mt-1 sm:block">
              נחזור אליכם לתיאום שיחה קצרה ולהתחלת הלימוד.
            </p>
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
          <Image src={IMAGES.carBFront} alt="רכב לימוד GEELY לרישיון B" fill className="object-cover" />
        </div>
      </section>

      <section id="contact" className="bg-navy py-12">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">רוצים להתחיל רישיון B?</h2>
          <p className="mt-2 text-white/80">{SITE.phone} · {SITE.address}</p>
          <a
            href="#lead-top"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy-deep"
          >
            השאירו פרטים
          </a>
        </div>
      </section>
    </main>
  );
}
