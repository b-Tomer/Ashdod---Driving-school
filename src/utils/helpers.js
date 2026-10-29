export const scrollToSection = (sectionId) => {
  const yOffset = -80;
  const element = document.getElementById(sectionId);
  if (!element) return;
  const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

export async function sendEmail(details) {
  try {
    const response = await fetch('/api/send-details-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ details }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'contact',
        license_type: details.licenseType || '',
        page: details.source || '',
      });
    }

    return true;
  } catch (error) {
    console.error('Error sending contact details:', error.message);
    return false;
  }
}
