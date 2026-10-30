import Head from 'next/head';
import Image from 'next/image';
import LeadForm from '@/Components/LeadForm';
import { IMAGES, SITE } from '@/data/site';

export default function TruckPage() {
  return (
    <main>
      <Head>
        <title>רישיון למשאית C1 ידני ואוטומט | בית ספר לנהיגה אשדוד</title>
        <meta
          name="description"
          content="רישיון למשאית עד 12 טון דרגה C1 באשדוד — ידני או אוטומט. השאירו פרטים ונחזור אליכם."
        />
      </Head>

      <section className="relative overflow-hidden bg-navy-deep">
        <Image src={IMAGES.truckAuto} alt="" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="relative mx-auto grid max-w-site gap-3 px-4 py-4 pb-24 sm:gap-8 sm:px-6 sm:py-10 md:pb-10 lg:grid-cols-2 lg:py-14">
          <div className="text-white">
            <p className="text-xs font-medium text-gold sm:text-sm">רישיון למשאית עד 12 טון</p>
            <h1 className="mt-1 text-2xl font-bold leading-tight sm:mt-2 sm:text-5xl">C1 ידני או אוטומט, לפי מה שמתאים לכם</h1>
            <p className="mt-2 hidden max-w-lg text-white/85 leading-7 sm:mt-4 sm:block">
              שדרוג מרישיון B או לימוד נהיגה על משאית. אפשר לבחור ידני או אוטומט — ונעזור לכם לבחור מה שמתאים.
            </p>
          </div>
          <div id="lead-top" className="rounded-2xl bg-cream p-3.5 shadow-lift sm:p-6">
            <h2 className="text-lg font-bold text-navy sm:text-xl">השאירו פרטים למשאית</h2>
            <p className="mb-2 mt-0.5 hidden text-sm text-stone-600 sm:mb-4 sm:mt-1 sm:block">
              ציינו אם מעניין אתכם ידני או אוטומט, ונחזור אליכם.
            </p>
            <LeadForm idPrefix="truck-top" source="עמוד משאית - עליון" variant="compact" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-5 px-4 py-12 sm:px-6 md:grid-cols-2">
        <article id="automatic" className="overflow-hidden rounded-2xl bg-white shadow-card">
          <div className="relative h-40">
            <Image src={IMAGES.truckAuto} alt="משאית אוטומט" fill className="object-cover" />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-navy">משאית אוטומט C1</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              נוח יותר למי שמתקשה בהעברת הילוכים או מעדיף ללמוד בצורה חלקה. מתאים גם לשימוש אישי וגם לעבודה.
            </p>
          </div>
        </article>
        <article id="manual" className="overflow-hidden rounded-2xl bg-white shadow-card">
          <div className="relative h-40">
            <Image src={IMAGES.truckManual} alt="משאית ידני" fill className="object-cover" />
          </div>
          <div className="p-5">
            <h2 className="text-xl font-bold text-navy">משאית ידני C1</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              לימוד על משאית טויוטה שמתמודדת היטב בצמתים וברחובות צרים. מתאים למי שצריך רישיון ידני מלא.
            </p>
          </div>
        </article>
      </section>

      <section id="contact" className="bg-navy py-12">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">רוצים רישיון על משאית?</h2>
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
