import { Resend } from 'resend';
import mailTemplate from './mailTemplate';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'shimonbenaim@gmail.com';
// Free starter sender until a custom domain is verified in Resend:
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || 'בית ספר לנהיגה אשדוד <onboarding@resend.dev>';

const sendDetailsMail = async (details) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is missing');
  }

  const resend = new Resend(apiKey);
  const emailHtml = mailTemplate(details);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    subject: 'השאירו פרטים באתר!',
    html: emailHtml,
  });

  if (error) {
    console.error('Failed to send lead email', error);
    throw new Error(error.message || 'Failed to send email');
  }
};

export default sendDetailsMail;
