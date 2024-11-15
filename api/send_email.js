// api/send_email.js

const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        // Set up the transporter with your email service credentials
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Change to your email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        // Set up email data
        const mailOptions = {
            from: email,
            to: 'mail@theartagora.com',
            subject: 'Newsletter Subscription',
            text: `New signup:\n${email}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Thank you for subscribing!' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Oops! Something went wrong. Please try again later.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
