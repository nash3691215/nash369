import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, projectType, budget, description, timeline } = await request.json()

    // Send notification email to yourself
    await resend.emails.send({
      from: 'noreply@nash369.com',
      to: 'nash3691215@gmail.com', // Your email to receive quote requests
      subject: `🎯 PROSPECT QUALIFIÉ - ${name} [${budget || 'Budget NC'}]`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">🔥 Nouveau prospect qualifié</h2>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
            <p><strong>Type de projet:</strong> ${projectType}</p>
            <p><strong>💰 Budget:</strong> <span style="color: #059669; font-size: 18px; font-weight: bold;">${budget || 'Non spécifié'}</span></p>
            <p><strong>📅 Date souhaitée:</strong> ${timeline || 'Non spécifié'}</p>
          </div>

          <div style="background: white; padding: 20px; border: 2px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0;">Description du projet:</h3>
            <p style="white-space: pre-wrap;">${description}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: #ecfdf5; border-radius: 8px; border-left: 4px solid #059669;">
            <p style="margin: 0;"><strong>⚡ Action requise:</strong> Réponds sous 24h avec un devis détaillé adapté au budget ${budget || 'à définir'}</p>
          </div>
        </div>
      `
    })

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'noreply@nash369.com',
      to: email,
      subject: 'Demande de devis reçue - NASH369',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">Merci ${name} !</h2>

          <p style="font-size: 16px; line-height: 1.6;">
            J'ai bien reçu ta demande de devis pour ton projet <strong>${projectType}</strong>.
          </p>

          <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4f46e5;">
            <p style="margin: 0; font-size: 15px;">
              <strong>⏰ Je te réponds sous 24h</strong> avec un devis détaillé et transparent incluant :
            </p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Scope exact du projet</li>
              <li>Timeline précis de livraison</li>
              <li>Tarification détaillée</li>
              <li>Prochaines étapes</li>
            </ul>
          </div>

          <p style="font-size: 14px; color: #6b7280;">
            En attendant, si tu as des questions ou des précisions à ajouter, réponds directement à cet email.
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
    console.error('Error sending quote request:', error)
    return NextResponse.json(
      { error: 'Failed to send quote request' },
      { status: 500 }
    )
  }
}
