import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
    to: 'matteodevweb@gmail.com',
    replyTo: email,
    subject: subject || `Nouveau message de ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00856F;">Nouveau message depuis le portfolio</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; color: #666; width: 100px;">Nom</td>
            <td style="padding: 8px; font-weight: 500;">${name}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px; color: #666;">Email</td>
            <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; color: #666;">Sujet</td>
            <td style="padding: 8px;">${subject || 'Non renseigné'}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px; color: #666; vertical-align: top;">Message</td>
            <td style="padding: 8px; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="color: #999; font-size: 12px; margin-top: 24px;">
          Envoyé depuis mateogoram.fr — Tu peux répondre directement à cet email.
        </p>
      </div>
    `,
  })

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ success: true })
}