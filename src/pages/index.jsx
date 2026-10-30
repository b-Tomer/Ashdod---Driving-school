import Head from 'next/head';
import Image from 'next/image';
import About from '@/Components/About';
import GoogleReviews from '@/Components/GoogleReviews';
import LeadForm from '@/Components/LeadForm';
import LicenseCard from '@/Components/LicenseCard';
import TrustBar from '@/Components/TrustBar';
import { IMAGES, SITE } from '@/data/site';

export default function Home() {
  return (
    <main>
      <Head>
        <title>בית ספר לנהיגה אשדוד | רישיון B ומשאית C1</title>
        <meta
          name="description"
          content="בית ספר לנהיגה באשדוד והסביבה. רישיון לרכב פרטי, רישיון למשאית ידני או אוטומט, וסימולטור נהיגה. השאירו פרטים ונחזור אליכם."
        />
      </Head>

      <section className="relative overflow-hidden bg-navy-deep">
        <Image
          src={IMAGES.carB}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-navy-deep via-navy-deep/80 to-navy/40" />
        <div className="relative mx-auto grid max-w-site gap-3 px-4 py-4 pb-24 sm:gap-8 sm:px-6 sm:py-10 md:pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-14">
          <div className="text-white">
            <p className="text-xs font-medium text-gold sm:text-sm">אשדוד והסביבה · מעל 30 שנות ניסיון</p>
            <h1 className="mt-1 max-w-xl text-2xl font-bold leading-tight sm:mt-3 sm:text-5xl">{SITE.name}</h1>
            <p className="mt-2 hidden max-w-lg text-base leading-7 text-white/85 sm:mt-4 sm:block sm:text-lg">
              לומדים נהיגה באשדוד לרכב פרטי או למשאית, בקצב שלכם, עם מורים מנוסים.
            </p>
            <div className="mt-4 hidden flex-wrap gap-2 text-sm sm:mt-6 sm:flex">
              <span className="rounded-full bg-white/10 px-3 py-1.5">רישיון B</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5">משאית C1 ידני</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5">משאית C1 אוטומט</span>
            </div>
          </div>

          <div id="lead-top" className="rounded-2xl bg-cream p-3.5 shadow-lift sm:p-6">
            <h2 className="text-lg font-bold text-navy sm:text-xl">השאירו פרטים</h2>
            <p className="mb-2 mt-0.5 hidden text-sm text-stone-600 sm:mb-4 sm:mt-1 sm:block">
              נחזור אליכם לשיחה קצרה, בלי התחייבות.
            </p>
            <LeadForm idPrefix="home-top" source="דף הבית - טופס עליון" variant="compact" />
          </div>
        </div>
      </section>

      <TrustBar />

      <section id="services" className="mx-auto max-w-site px-4 py-12 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-navy">מה תרצו ללמוד?</h2>
          <p className="mt-2 text-stone-600">רישיון לרכב פרטי או למשאית — בחרו מה שמתאים לכם.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <LicenseCard
            href="/b-license"
            badge="רכב פרטי"
            title="רישיון לרכב פרטי דרגה B"
            description="לומדים על רכב GEELY חדש, בקצב אישי, עם דגש על בטיחות וביטחון בדרך לרישיון."
            imageUrl={IMAGES.carBFront}
          />
          <LicenseCard
            href="/c1-license"
            badge="ידני / אוטומט"
            title="רישיון למשאית C1 עד 12 טון"
            description="משאית ידנית או אוטומטית — מתאים לשדרוג מרישיון B או למי שצריך רישיון למשאית."
            imageUrl={IMAGES.truckAuto}
          />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-site items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative h-48 overflow-hidden rounded-2xl sm:h-56">
            <Image src={IMAGES.simulator} alt="סימולטור נהיגה" fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold text-navy">סימולטור נהיגה</p>
            <h2 className="mt-1 text-2xl font-bold text-navy">תרגול בטוח לפני הכביש</h2>
            <p className="mt-3 max-w-xl text-stone-600 leading-7">
              אפשר לתרגל נהיגת לילה, גשם, ערפל ומצבים מורכבים בעיר ובכביש בין-עירוני — לפני שיוצאים לכביש האמיתי.
              זה עוזר לבנות ביטחון ומתאים גם לרכב פרטי וגם למשאית.
            </p>
          </div>
        </div>
      </section>

      <GoogleReviews />

      <section id="about" className="bg-white py-12">
        <div className="mx-auto max-w-site px-4 sm:px-6">
          <h2 className="mb-6 text-3xl font-bold text-navy">קצת עלינו</h2>
          <About />
        </div>
      </section>

      <section id="contact" className="bg-navy py-12">
        <div className="mx-auto max-w-site px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">מוכנים להתחיל?</h2>
          <p className="mx-auto mt-3 max-w-md text-white/80 leading-7">
            השאירו שם וטלפון, ונחזור אליכם לתיאום שיחה על רישיון B או משאית.
          </p>
          <p className="mt-4 text-sm text-gold">{SITE.address} · {SITE.phone}</p>
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
