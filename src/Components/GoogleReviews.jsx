import { useState } from 'react';
import { GOOGLE_REVIEWS, SITE } from '@/data/site';

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="text-[#fbbc04] tracking-tight" aria-hidden="true">
      ★★★★★
    </span>
  );
}

function ReviewCard({ review, reviewsUrl }) {
  const [open, setOpen] = useState(false);
  const long = review.text.length > 160;

  return (
    <article className="flex min-w-[85%] snap-start flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-card sm:min-w-[320px] md:min-w-0">
      <div className="flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
          style={{ backgroundColor: review.color }}
        >
          {review.initial}
        </span>
        <div className="min-w-0">
          <p className="truncate font-bold text-navy">{review.name}</p>
          <p className="text-xs text-stone-500">ביקורת בגוגל</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
        <Stars />
        <span className="text-xs text-stone-500">{review.date}</span>
        {review.isNew && (
          <span className="rounded-full bg-[#e8f0fe] px-2 py-0.5 text-[11px] font-bold text-[#1967d2]">חדש</span>
        )}
      </div>

      <p className={`mt-3 text-sm leading-6 text-stone-700 ${open ? '' : 'line-clamp-5'}`}>{review.text}</p>

      <div className="mt-auto flex items-center justify-between pt-3">
        {long ? (
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="text-sm font-bold text-navy"
          >
            {open ? 'פחות' : 'עוד'}
          </button>
        ) : (
          <span />
        )}
        <a
          href={reviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-stone-500 hover:text-navy"
        >
          בגוגל
        </a>
      </div>
    </article>
  );
}


export default function GoogleReviews() {
  const { rating, reviewCount, mapsUrl } = SITE.google;
  const reviewsUrl = mapsUrl;

  return (
    <section id="testimonials" className="bg-cream py-12">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mb-4 text-center sm:mb-6">
          <p className="text-sm font-bold text-navy">ביקורות אמיתיות מגוגל</p>
          <h2 className="mt-1 text-3xl font-bold text-navy">מה אומרים עלינו</h2>
        </div>

        <div className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-card sm:px-5 sm:py-4">
          <div className="flex min-w-0 items-center gap-3">
            <GoogleMark />
            <div>
              <p className="flex flex-wrap items-center gap-x-2 text-sm">
                <span className="text-xl font-bold text-navy sm:text-2xl">{rating}</span>
                <Stars />
              </p>
              <p className="text-xs text-stone-600 sm:text-sm">{reviewCount} ביקורות של 5 כוכבים</p>
            </div>
          </div>
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 rounded-full bg-navy px-3 py-2 text-xs font-bold text-white sm:px-4 sm:text-sm"
          >
            לכל הביקורות
          </a>
        </div>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3">
          {GOOGLE_REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} reviewsUrl={reviewsUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
