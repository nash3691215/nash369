import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email, leadMagnet } = await request.json()

    // Send lead magnet to user
    await resend.emails.send({
      from: 'Nash @ NASH369 <noreply@nash369.com>',
      to: email,
      subject: '🎁 Voici ton guide : Comment créer des sites en 5 min',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #4f46e5; font-size: 28px; margin-bottom: 10px;">🎉 Ton guide est prêt !</h1>
            <p style="color: #6b7280; font-size: 16px;">Merci pour ton intérêt. Voici la méthode complète.</p>
          </div>

          <div style="background: linear-gradient(135deg, #4f46e5 0%, #059669 100%); border-radius: 16px; padding: 30px; color: white; margin-bottom: 30px;">
            <h2 style="margin-top: 0; font-size: 24px;">Comment je crée des sites en 5 min</h2>

            <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; font-size: 18px;">🛠️ Ma Stack Technique</h3>
              <ul style="line-height: 1.8;">
                <li><strong>Claude AI</strong> - Pour générer le code propre et professionnel</li>
                <li><strong>Hostinger</strong> - Hébergement rapide et pas cher (environ 3€/mois)</li>
                <li><strong>Next.js</strong> - Framework moderne pour des sites ultra-rapides</li>
              </ul>
            </div>

            <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; font-size: 18px;">⚡ Le Process en 5 étapes</h3>
              <ol style="line-height: 1.8;">
                <li><strong>Consultation rapide</strong> - Je comprends le besoin du client (15 min max)</li>
                <li><strong>Prompt à Claude</strong> - Je décris le projet, Claude génère le code de base</li>
                <li><strong>Customisation</strong> - J'ajuste les couleurs, textes, images avec Claude</li>
                <li><strong>Déploiement Hostinger</strong> - Upload via FTP ou Git (5 min)</li>
                <li><strong>Livraison client</strong> - Formation rapide et facturation</li>
              </ol>
            </div>

            <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; font-size: 18px;">💰 Comment facturer</h3>
              <ul style="line-height: 1.8;">
                <li><strong>Site vitrine simple</strong> - 299€ à 799€ selon complexité</li>
                <li><strong>Site avec formulaire avancé</strong> - 799€ à 1499€</li>
                <li><strong>E-commerce basique</strong> - 999€ à 2500€</li>
              </ul>
              <p style="margin-top: 15px; font-size: 14px; opacity: 0.9;">
                💡 <strong>Astuce :</strong> La rapidité est une valeur ajoutée. Ne sous-estime pas ton expertise, même si tu vas vite.
              </p>
            </div>

            <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; font-size: 18px;">🚀 Les prompts que j'utilise</h3>
              <p style="margin-bottom: 10px;"><strong>Exemple de prompt de départ :</strong></p>
              <p style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.6;">
                "Crée un site vitrine Next.js moderne pour [NOM ACTIVITÉ]. Le site doit avoir :
                - Une page d'accueil avec hero section, services, témoignages
                - Design professionnel avec gradient indigo/emerald
                - Formulaire de contact fonctionnel
                - Responsive mobile/desktop
                - SEO optimisé avec meta tags"
              </p>
            </div>
          </div>

          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <p style="margin: 0; color: #92400e;">
              ⚠️ <strong>Important :</strong> Ce guide te donne l'aperçu de ma méthode. Pour maîtriser complètement la création de sites avec l'IA et lancer ton activité, check mes formations payantes.
            </p>
          </div>

          <div style="text-align: center; margin-top: 40px;">
            <a href="https://nash369.com/#produits" style="display: inline-block; background: linear-gradient(135deg, #4f46e5 0%, #059669 100%); color: white; padding: 16px 32px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 16px;">
              Voir les formations complètes
            </a>
          </div>

          <div style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
            <p>Des questions ? Réponds simplement à cet email.</p>
            <p style="margin-top: 10px;">
              <a href="https://nash369.com" style="color: #4f46e5; text-decoration: none;">nash369.com</a>
            </p>
          </div>
        </div>
      `
    })

    // Notify yourself about new lead
    await resend.emails.send({
      from: 'noreply@nash369.com',
      to: 'nash3691215@gmail.com',
      subject: `🎯 Nouveau lead: ${email} (Guide Sites 5min)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">🔥 Nouveau lead capturé !</h2>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Lead Magnet:</strong> Guide Sites 5 min</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString('fr-FR')}</p>
          </div>

          <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; border-left: 4px solid #059669;">
            <p style="margin: 0;"><strong>⚡ Action:</strong> Ajoute ${email} à ta liste email et prépare le follow-up pour vendre les formations.</p>
          </div>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending lead magnet:', error)
    return NextResponse.json(
      { error: 'Failed to send lead magnet' },
      { status: 500 }
    )
  }
}
