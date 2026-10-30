export const scrollToSection = (sectionId) => {
  // The lead form sits in the hero — scroll to the very top so nothing is cut off.
  if (sectionId === 'lead-top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(sectionId);
  if (!element) return;
  const yOffset = -80;
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

    return true;
  } catch (error) {
    console.error('Error sending contact details:', error.message);
    return false;
  }
}
