// utils/sendDetailsMail.js
import sgMail from '@sendgrid/mail';
import mailTemplate from './mailTemplate';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendDetailsMail = async (details) => {
    const emailHtml = mailTemplate(details);

    const msg = {
        to: "shimonbenaim@gmail.com", 
        from: 'noyavneri5@gmail.com',
        subject: 'השאירו פרטים באתר!',
        html: emailHtml,
    };

    try {
        await sgMail.send(msg);
        // console.log(' email sent successfully');
    } catch (error) {
        console.error('Failed to send workshop signup confirmation email', error);
        throw error; // Re-throw the error to be caught by the calling function
    }
};

export default sendDetailsMail;
