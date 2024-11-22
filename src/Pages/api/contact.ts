import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function contactHandler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            return res.status(400).json({error: 'All fields are required'});
        }

        try {
            await sendEmail(name, email, phone, message);
            return res.status(200).json({message: 'Email Sent Successfully'});
        } catch(error) {
            return res.status(500).json({error: error, errorMessage: 'Error sending email'});
        } 
    } else {
        return res.status(405).json({error: 'Method Not Allowed'});
    }
}


async function sendEmail(
  name: string,
  email: string,
  phone: string,
  message: string
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_EMAIL_KEY,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIEVER_EMAIL,
    subject: `Home Care Message - FROM ${name}`,
    text: `Sender's Name: ${name}\nSender's Email is: ${email} \nSender's Phone Number: ${phone} \n\nSenders's Message\n********************\n${message}\n********************`,
  };

  return transporter.sendMail(mailOptions);
}
