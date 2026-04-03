import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "matteodevweb@gmail.com",
    replyTo: email,
    subject: subject || `Nouveau message de ${name}`,
    html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #080b09; font-family: 'DM Sans', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #080b09; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

          <!-- HEADER -->
          <tr>
            <td style="padding: 40px 40px 32px; background-color: #0d110e; border: 1px solid rgba(0,133,111,0.15); border-bottom: none; border-radius: 4px 4px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-family: Arial, sans-serif; font-size: 28px; font-weight: 700; letter-spacing: 4px; color: #e8ede9;">
                      <span style="color: #00856F;">M</span>ATÉO
                    </span>
                  </td>
                  <td align="right">
                    <span style="font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #7a8a7c;">
                      Portfolio
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- LIGNE VERTE -->
          <tr>
            <td style="height: 2px; background-color: #00856F;"></td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding: 40px; background-color: #0d110e; border: 1px solid rgba(0,133,111,0.15); border-top: none; border-bottom: none;">

              <!-- TITRE -->
              <p style="margin: 0 0 8px; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #00856F;">
                Nouveau message
              </p>
              <h1 style="margin: 0 0 32px; font-size: 32px; font-weight: 700; color: #e8ede9; letter-spacing: 1px;">
                ${subject || "Sans sujet"}
              </h1>

              <!-- INFOS EXPÉDITEUR -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px; background-color: #141a15; border: 1px solid rgba(0,133,111,0.1); border-radius: 3px;">
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #7a8a7c; width: 80px;">De</td>
                        <td style="font-size: 14px; color: #e8ede9; font-weight: 500;">${name}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #7a8a7c; width: 80px;">Email</td>
                        <td>
                          <a href="mailto:${email}" style="font-size: 14px; color: #00a688; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- MESSAGE -->
              <p style="margin: 0 0 12px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #7a8a7c;">
                Message
              </p>
              <div style="background-color: #141a15; border: 1px solid rgba(0,133,111,0.1); border-left: 2px solid #00856F; border-radius: 0 3px 3px 0; padding: 20px 24px;">
                <p style="margin: 0; font-size: 15px; color: #e8ede9; line-height: 1.8; white-space: pre-wrap;">${message}</p>
              </div>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 32px;">
                <tr>
                  <td>
                    <a href="mailto:${email}" style="display: inline-block; background-color: #00856F; color: #080b09; padding: 12px 28px; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 2px;">
                      Répondre à ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding: 24px 40px; background-color: #080b09; border: 1px solid rgba(0,133,111,0.15); border-top: 1px solid rgba(255,255,255,0.05); border-radius: 0 0 4px 4px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size: 11px; color: #7a8a7c; letter-spacing: 1px;">
                    Envoyé depuis <span style="color: #00856F;">mateogoram.fr</span>
                  </td>
                  <td align="right" style="font-size: 11px; color: #7a8a7c;">
                    Créé par <a href="https://matteo-dev.fr" style="color: #00856F; text-decoration: none;">Mattéo Dev</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
  });

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ success: true });
}
