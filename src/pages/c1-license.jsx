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
        <div className="relative mx-auto grid max-w-site gap-8 px-4 py-8 pb-28 sm:px-6 md:pb-10 lg:grid-cols-2 lg:py-14">
          <div className="text-white">
            <p className="text-sm font-medium text-gold">רישיון למשאית עד 12 טון</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-5xl">C1 ידני או אוטומט, לפי מה שמתאים לכם</h1>
            <p className="mt-4 max-w-lg text-white/85 leading-7">
              שדרוג מרישיון B או לימוד מקצועי למשאית. אפשר לבחור הילוכים ידניים או אוטומט — ונכוון אתכם למסלול הנכון.
            </p>
          </div>
          <div id="lead-top" className="rounded-2xl bg-cream p-5 shadow-lift sm:p-6">
            <h2 className="text-xl font-bold text-navy">השאירו פרטים למשאית</h2>
            <p className="mt-1 mb-4 text-sm text-stone-600">ציינו אם מעניין אתכם ידני או אוטומט, ונחזור אליכם.</p>
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
              מסלול נוח יותר למי שמתקשה בהעברת הילוכים או רוצה למידה חלקה. מתאים גם לצרכים אישיים וגם להתקדמות מקצועית.
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
              לימוד על משאית טויוטה שמתמודדת היטב בצמתים וברחובות צרים. מסלול יעיל למי שצריך רישיון ידני מלא.
            </p>
          </div>
        </article>
      </section>

      <section id="contact" className="bg-navy py-12">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <div className="mb-5 text-center text-white">
            <h2 className="text-3xl font-bold">רוצים רישיון על משאית?</h2>
            <p className="mt-2 text-white/80">{SITE.phone} · {SITE.address}</p>
          </div>
          <div className="rounded-2xl bg-cream p-5 sm:p-6">
            <LeadForm idPrefix="truck-bottom" source="עמוד משאית - תחתון" />
          </div>
        </div>
      </section>
    </main>
  );
}
