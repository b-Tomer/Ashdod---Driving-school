export const scrollToSection = (sectionId) => {
    const yOffset = -60; 
    const element = document.getElementById(sectionId);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
  
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

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

        const data = await response.json();
        
        // console.log('Workshop signup confirmation email sent:', data.message);
    } catch (error) {
        console.error('Error sending workshop signup confirmation:', error.message);
    }
}