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
      subject: '🎁 Voici ton guide : Les Opportunités IA 2026',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #4f46e5; font-size: 28px; margin-bottom: 10px;">🎉 Ton guide est prêt !</h1>
            <p style="color: #6b7280; font-size: 16px;">Merci pour ton intérêt. Voici les opportunités à saisir en 2026.</p>
          </div>

          <div style="background: linear-gradient(135deg, #4f46e5 0%, #059669 100%); border-radius: 16px; padding: 30px; color: white; margin-bottom: 30px;">
            <h2 style="margin-top: 0; font-size: 24px;">Les Opportunités IA 2026 vues par NASH369</h2>

            <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; font-size: 18px;">💎 Opportunité #1 : Sites IA automatisés</h3>
              <p style="line-height: 1.8; margin-bottom: 10px;">Crée et vends des sites e-commerce qui tournent seuls :</p>
              <ul style="line-height: 1.8;">
                <li>Utilise Claude AI pour générer le code Next.js complet</li>
                <li>Intègre Stripe pour les paiements automatiques</li>
                <li>Configure l'email automation avec Resend</li>
                <li><strong>Prix de vente : 500€ à 2500€ par site</strong></li>
              </ul>
              <p style="margin-top: 15px; font-size: 14px; opacity: 0.9;">
                💡 Les clients adorent l'idée d'un site qui vend 24/7 sans intervention.
              </p>
            </div>

            <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; font-size: 18px;">🤖 Opportunité #2 : Services d'automation</h3>
              <p style="line-height: 1.8; margin-bottom: 10px;">Les automatisations les plus demandées :</p>
              <ul style="line-height: 1.8;">
                <li><strong>Automation email</strong> - Séquences de bienvenue, relance panier (300€-800€)</li>
                <li><strong>Chatbots IA</strong> - Support client automatisé (500€-1500€)</li>
                <li><strong>Scraping & data</strong> - Extraction automatique de données (400€-1200€)</li>
              </ul>
              <p style="margin-top: 15px; font-size: 14px; opacity: 0.9;">
                💡 <strong>Aucune compétence technique requise</strong> - Les outils no-code et l'IA font tout.
              </p>
            </div>

            <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; font-size: 18px;">📚 Opportunité #3 : Formation & conseil IA</h3>
              <p style="line-height: 1.8; margin-bottom: 10px;">Vends ton expertise (même en débutant) :</p>
              <ul style="line-height: 1.8;">
                <li><strong>Mini-formations</strong> - Crée des guides PDF/vidéo (9€-49€)</li>
                <li><strong>Consulting 1-to-1</strong> - Accompagne des clients sur leurs projets IA (100€-300€/h)</li>
                <li><strong>Templates & tools</strong> - Vends des prompts, templates de sites (5€-99€)</li>
              </ul>
              <p style="margin-top: 15px; font-size: 14px; opacity: 0.9;">
                💡 La demande explose. Les gens payent pour gagner du temps.
              </p>
            </div>

            <div style="background: rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin: 20px 0;">
              <h3 style="margin-top: 0; font-size: 18px;">🚀 Le Framework 0 → Revenu</h3>
              <p style="margin-bottom: 10px;"><strong>Les 4 étapes pour tes premiers 1000€ :</strong></p>
              <ol style="line-height: 1.8;">
                <li><strong>Choisis 1 opportunité</strong> - Focus sur celle qui te parle le plus</li>
                <li><strong>Maîtrise les outils gratuits</strong> - Claude AI, Cursor, Vercel, Stripe</li>
                <li><strong>Crée ton premier projet</strong> - Pour ton portfolio (même fictif)</li>
                <li><strong>Trouve tes premiers clients</strong> - LinkedIn, communautés, bouche-à-oreille</li>
              </ol>
              <p style="margin-top: 15px; font-size: 14px; opacity: 0.9;">
                💡 <strong>Timeline réaliste :</strong> 2-4 semaines pour ton premier revenu si tu t'y mets sérieusement.
              </p>
            </div>
          </div>

          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
            <p style="margin: 0; color: #92400e;">
              ⚠️ <strong>Important :</strong> Ce guide te donne une <strong>vision complète des opportunités</strong>. Pour maîtriser chaque méthode en détail et générer tes premiers revenus rapidement, découvre mes formations.
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
      subject: `🎯 Nouveau lead: ${email} (Opportunités IA 2026)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">🔥 Nouveau lead capturé !</h2>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Lead Magnet:</strong> Opportunités IA 2026</p>
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
