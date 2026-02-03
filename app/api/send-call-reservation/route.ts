import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message } = await request.json()

    // Send notification email to yourself
    await resend.emails.send({
      from: 'noreply@nash369.com',
      to: 'nash3691215@gmail.com', // Your email to receive call reservations
      subject: `📞 APPEL RÉSERVÉ - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">📞 Nouvelle réservation d'appel</h2>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            <p><strong>Entreprise/Projet:</strong> ${company || 'Non spécifié'}</p>
          </div>

          <div style="background: white; padding: 20px; border: 2px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0;"><strong>⏰ Action requise:</strong> Appelle ${name} au ${phone} ou envoie-lui un email pour confirmer l'horaire de l'appel.</p>
          </div>
        </div>
      `
    })

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'noreply@nash369.com',
      to: email,
      subject: 'Ton appel découverte est réservé ! 📅 - NASH369',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Génial ${name} ! 🎉</h2>

          <p style="font-size: 16px; line-height: 1.6;">
            Ton appel découverte gratuit de 30 minutes est confirmé !
          </p>

          <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
            <p style="margin: 0; font-size: 15px;">
              <strong>📅 Prochaines étapes :</strong>
            </p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Tu vas recevoir un email de confirmation avec le lien de l'appel</li>
              <li>On va discuter de ton projet et comprendre tes besoins</li>
              <li>Je te proposerai les solutions les mieux adaptées à ta situation</li>
              <li>Sans pression, sans engagement - juste du conseil honnête</li>
            </ul>
          </div>

          <div style="background: #f9fafb; padding: 15px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              <strong>💡 Conseil :</strong> Prépare une courte liste de tes 3 défis principaux avant l'appel. Ça nous aidera à être encore plus efficace !
            </p>
          </div>

          <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">
            Si tu as des questions avant l'appel, réponds simplement à cet email. Je suis là pour t'aider !
          </p>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 13px;">
              NASH369<br/>
              Construire des systèmes utiles. Les rendre simples. Les rendre rentables.
            </p>
          </div>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending call reservation:', error)
    return NextResponse.json(
      { error: 'Failed to send call reservation' },
      { status: 500 }
    )
  }
}
