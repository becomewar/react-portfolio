import sendgridTransport from 'nodemailer-sendgrid-transport';
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer';

const email = process.env.MAILADRESS;

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY
        }
    })
)

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { senderMail, name, content } = req.body;

        if (!senderMail.trim() || !name.trim() || !content.trim()) {
            return res.status(403).send('');
        }

        const message = {
            from: email,
            to: email,
            subject: `Nova mensagem de ${name}`,
            html: `<p><b>Email:</b> ${senderMail}<br /><b>Mensagem:</b> ${content}</p>`,
            reply: senderMail
        };

        await transporter.sendMail(message)
        return res.send('');
    } catch (err) {
        return res.json({
            error: true,
            message: err.message
        });
    }
}