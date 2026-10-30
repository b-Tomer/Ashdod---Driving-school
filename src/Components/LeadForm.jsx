import { useRef, useState } from 'react';
import { LICENSE_OPTIONS } from '@/data/site';
import { trackEvent } from '@/utils/analytics';
import { sendEmail } from '@/utils/helpers';
import WhatsAppLink from './WhatsAppLink';

export default function LeadForm({
  variant = 'default',
  idPrefix = 'lead',
  defaultLicense = '',
  source = 'דף הבית',
  compact = false,
}) {
  const isCompact = variant === 'compact' || compact;
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    licenseType: defaultLicense,
  });
  const [status, setStatus] = useState('idle');
  const startedRef = useRef(false);

  function formParams(extra = {}) {
    return {
      form_id: idPrefix,
      form_name: source,
      license_type: formData.licenseType || '(not set)',
      ...extra,
    };
  }

  function trackFormStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent('form_start', formParams());
  }

  function handleChange(event) {
    trackFormStart();
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    const ok = await sendEmail({ ...formData, source });
    if (ok) {
      trackEvent('generate_lead', formParams({ lead_source: source }));
      setStatus('success');
      setFormData({ name: '', tel: '', licenseType: defaultLicense });
      return;
    }
    trackEvent('form_error', formParams({ error_type: 'submit_failed' }));
    setStatus('error');
  }

  const fieldClass =
    'w-full rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-gold/50 sm:px-3.5 sm:py-3';

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-gold/40 bg-white p-5 text-center shadow-card">
        <p className="text-lg font-bold text-navy">קיבלנו את הפרטים</p>
        <p className="mt-1 text-sm text-stone-600">נחזור אליכם בהקדם לתיאום שיחה.</p>
        <WhatsAppLink />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={isCompact ? 'space-y-2 sm:space-y-3' : 'space-y-4'}>
      <div className={isCompact ? 'grid grid-cols-2 gap-2 sm:gap-3' : 'space-y-4'}>
        <div>
          <label htmlFor={`${idPrefix}-name`} className="mb-1 block text-xs font-medium text-stone-700 sm:mb-1.5 sm:text-sm">
            שם
          </label>
          <input
            required
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            value={formData.name}
            onChange={handleChange}
            onFocus={trackFormStart}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-tel`} className="mb-1 block text-xs font-medium text-stone-700 sm:mb-1.5 sm:text-sm">
            טלפון
          </label>
          <input
            required
            id={`${idPrefix}-tel`}
            name="tel"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={fieldClass}
            value={formData.tel}
            onChange={handleChange}
            onFocus={trackFormStart}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-license`} className="mb-1 block text-xs font-medium text-stone-700 sm:mb-1.5 sm:text-sm">
          במה אתם מתעניינים?
        </label>
        <select
          id={`${idPrefix}-license`}
          name="licenseType"
          className={fieldClass}
          value={formData.licenseType}
          onChange={handleChange}
          onFocus={trackFormStart}
        >
          {LICENSE_OPTIONS.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="flex w-full items-center justify-center rounded-xl bg-gold px-4 py-3 text-sm font-bold text-navy-deep transition hover:brightness-95 disabled:opacity-70 sm:py-3.5 sm:text-base"
      >
        {status === 'loading' ? 'שולחים...' : 'השאירו פרטים ונחזור אליכם'}
      </button>

      {status === 'error' && (
        <p className="text-center text-sm text-red-700">משהו השתבש. אפשר לנסות שוב או לפנות בוואטסאפ.</p>
      )}

      <p className="hidden text-center text-xs text-stone-500 sm:block">
        בלי התחייבות. נחזור אליכם לשיחה קצרה.
      </p>
      <WhatsAppLink />
    </form>
  );
}
