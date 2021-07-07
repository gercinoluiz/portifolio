import nodemailler from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export default async (req: IRequest, res: Response) => {

    interface Transporter {
        host: string
    }

    try {

        const transporter = nodemailler.createTransport({

            host: process.env.SMPTP_SERVER,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_LOGIN,
                pass: process.env.SMTP_PASS
            },

        } as Transporter)

        const body = req.body


        const mail = await transporter.sendMail({
            from: body.email,
            to: `gercino.neto.luiz@gmail.com`,
            subject: 'Contact from my portfolio',
            text: body.mesage

        })

    } catch (error) {
        console.log({ error })
    }




    // console.log({name, email, mesage})

}