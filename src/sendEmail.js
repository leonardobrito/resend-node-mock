const { Resend } = require('resend');
const resend = new Resend('API_KEY');

async function sendEmail() {
  try {
    await resend.sendEmail({
      from: 'you@example.com',
      to: 'user@gmail.com',
      subject: 'hello world',
      text: 'it works!',
    });
  } catch (error) {
    console.log('Error sending email', error);
  }
}

module.exports = { sendEmail };
