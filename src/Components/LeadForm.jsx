import { useState } from 'react';
import { LICENSE_OPTIONS } from '@/data/site';
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

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    const ok = await sendEmail({ ...formData, source });
    setStatus(ok ? 'success' : 'error');
    if (ok) {
      setFormData({ name: '', tel: '', licenseType: defaultLicense });
    }
  }

  const fieldClass =
    'w-full rounded-xl border border-stone-200 bg-white px-3.5 py-3 text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-gold/50';

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-gold/40 bg-white p-5 text-center shadow-card">
        <p className="text-lg font-bold text-navy">קיבלנו את הפרטים</p>
        <p className="mt-1 text-sm text-stone-600">נחזור אליכם בהקדם עם התאמה למסלול.</p>
        <WhatsAppLink />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={isCompact ? 'space-y-3' : 'space-y-4'}>
      <div className={isCompact ? 'grid gap-3 sm:grid-cols-2' : 'space-y-4'}>
        <div>
          <label htmlFor={`${idPrefix}-name`} className="mb-1.5 block text-sm font-medium text-stone-700">
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
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-tel`} className="mb-1.5 block text-sm font-medium text-stone-700">
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
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-license`} className="mb-1.5 block text-sm font-medium text-stone-700">
          במה אתם מתעניינים?
        </label>
        <select
          id={`${idPrefix}-license`}
          name="licenseType"
          className={fieldClass}
          value={formData.licenseType}
          onChange={handleChange}
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
        className="flex w-full items-center justify-center rounded-xl bg-gold px-4 py-3.5 text-base font-bold text-navy-deep transition hover:brightness-95 disabled:opacity-70"
      >
        {status === 'loading' ? 'שולחים...' : 'השאירו פרטים ונחזור אליכם'}
      </button>

      {status === 'error' && (
        <p className="text-center text-sm text-red-700">משהו השתבש. אפשר לנסות שוב או לפנות בוואטסאפ.</p>
      )}

      <p className="text-center text-xs text-stone-500">בלי התחייבות. נחזור אליכם לשיחה קצרה והתאמת מסלול.</p>
      <WhatsAppLink />
    </form>
  );
}
