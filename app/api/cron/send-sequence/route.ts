import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getLeadsForNextEmail, updateSequenceStep } from '@/lib/db'

export async function GET(req: NextRequest) {
  // Vérification du secret pour sécuriser le cron
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY || '')

  try {
    // Récupérer les leads prêts pour le prochain email
    const leads = await getLeadsForNextEmail()

    console.log(`Traitement de ${leads.length} leads pour la séquence email`)

    for (const lead of leads) {
      const nextStep = lead.sequence_step + 1

      // Contenu des emails de la séquence
      const emailContent = getEmailContent(nextStep)

      if (!emailContent) {
        console.log(`Pas de contenu pour l'étape ${nextStep}, fin de séquence`)
        continue
      }

      try {
        // Envoyer l'email
        await resend.emails.send({
          from: 'NASH369 <noreply@nash369.com>',
          to: lead.email,
          subject: emailContent.subject,
          html: emailContent.html,
        })

        // Mettre à jour l'étape
        await updateSequenceStep(lead.email, nextStep)

        console.log(`✅ Email ${nextStep} envoyé à ${lead.email}`)
      } catch (error) {
        console.error(`Erreur envoi email à ${lead.email}:`, error)
      }
    }

    return NextResponse.json({
      success: true,
      processed: leads.length,
      message: `${leads.length} emails envoyés`
    })
  } catch (error: any) {
    console.error('Erreur cron séquence email:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// Fonction pour obtenir le contenu de chaque email de la séquence
function getEmailContent(step: number): { subject: string; html: string } | null {
  const emails = [
    // Email 1 - Jour 0 (déjà envoyé lors de l'inscription)
    null,

    // Email 2 - Jour 2
    {
      subject: '💡 Comment j\'ai automatisé mes ventes avec l\'IA',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">Hey ! 👋</h1>
          <p style="font-size: 16px; line-height: 1.6;">
            Il y a 2 jours, tu as téléchargé mon guide gratuit sur la création de sites en 5 min.
          </p>

          <p>Aujourd'hui, je veux te partager comment j'ai automatisé <strong>tout le processus de vente</strong> avec l'IA :</p>

          <ul style="line-height: 2;">
            <li>Stripe pour encaisser les paiements</li>
            <li>Resend pour envoyer les accès automatiquement</li>
            <li>Supabase pour stocker les clients</li>
          </ul>

          <p><strong>Résultat ?</strong> Je dors pendant que le site vend.</p>

          <div style="background: #f3f4f6; padding: 20px; border-radius: 12px; margin: 24px 0;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              💡 <strong>Astuce du jour</strong> : Commence par un produit simple à 9,90€. Ça convertit mieux qu'un gros produit au début.
            </p>
          </div>

          <a href="https://nash369.com/produits/zero-vivre" style="display: inline-block; background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 16px 0;">
            Découvrir ma méthode complète (9,90€)
          </a>

          <p style="margin-top: 24px; color: #6b7280;">À dans 2 jours pour le prochain email,<br><strong>NASH369</strong></p>
        </div>
      `,
    },

    // Email 3 - Jour 4
    {
      subject: '🚀 La stack technique que j\'utilise (0€/mois)',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">La vérité sur ma stack 🎯</h1>

          <p style="font-size: 16px; line-height: 1.6;">
            Beaucoup pensent qu'il faut payer Shopify, Systeme.io ou autre pour vendre en ligne.
          </p>

          <p><strong>Spoiler</strong> : Je paie 0€/mois.</p>

          <p>Voici ma stack exacte :</p>

          <ul style="line-height: 2;">
            <li><strong>Next.js</strong> - Framework gratuit</li>
            <li><strong>Vercel</strong> - Hébergement gratuit</li>
            <li><strong>Stripe</strong> - Paiements (tu paies que quand tu vends)</li>
            <li><strong>Resend</strong> - Emails gratuits jusqu'à 3K/mois</li>
            <li><strong>Supabase</strong> - Base de données gratuite</li>
          </ul>

          <div style="background: #d1fae5; border-left: 4px solid #10b981; padding: 20px; margin: 24px 0;">
            <p style="margin: 0; font-size: 16px; color: #065f46;">
              💰 <strong>Économie réelle</strong> : 87€/mois vs Shopify + Systeme.io<br>
              Soit <strong>1 044€/an</strong> dans ta poche.
            </p>
          </div>

          <p>Dans ma formation <strong>"Crée ton Site Prêt à Vendre"</strong>, je te montre exactement comment monter cette stack en quelques heures.</p>

          <a href="https://nash369.com/produits/site-ia" style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 16px 0;">
            Voir la formation complète (199,90€)
          </a>

          <p style="margin-top: 24px; color: #6b7280;">À bientôt,<br><strong>NASH369</strong></p>
        </div>
      `,
    },

    // Email 4 - Jour 6
    {
      subject: '⚡ Mon premier client à 2 500€ (case study)',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">Comment j'ai décroché mon premier client à 2 500€</h1>

          <p style="font-size: 16px; line-height: 1.6;">
            Il y a 3 mois, un client m'a payé 2 500€ pour un site e-commerce clé en main.
          </p>

          <p><strong>Temps passé</strong> : 2 jours.<br>
          <strong>Stack</strong> : Next.js + Stripe + Vercel (celle du guide gratuit).</p>

          <h3 style="color: #111827;">Le breakdown :</h3>

          <ol style="line-height: 2; color: #374151;">
            <li><strong>Jour 1</strong> : Création site avec Claude AI (4h)</li>
            <li><strong>Jour 1</strong> : Config Stripe + emails (2h)</li>
            <li><strong>Jour 2</strong> : Tests + déploiement (3h)</li>
            <li><strong>Jour 2</strong> : Formation client (1h)</li>
          </ol>

          <p><strong>Total</strong> : 10 heures de taf = 250€/h.</p>

          <div style="background: #fef3c7; padding: 16px; border-radius: 8px; margin: 24px 0;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
              💡 Le secret ? J'ai une <strong>checklist étape par étape</strong> que je réutilise pour chaque projet. Pas de réinvention de la roue.
            </p>
          </div>

          <p>Si tu veux faire pareil, j'ai tout documenté dans ma formation :</p>

          <a href="https://nash369.com/produits/site-ia" style="display: inline-block; background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 16px 0;">
            Accéder à ma méthode exacte (199,90€)
          </a>

          <p style="margin-top: 24px; color: #6b7280;">Talk soon,<br><strong>NASH369</strong></p>
        </div>
      `,
    },

    // Email 5 - Jour 8
    {
      subject: '🎁 Cadeau de fin de séquence (accès exclusif)',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">Merci d'avoir lu jusqu'ici 🙏</h1>

          <p style="font-size: 16px; line-height: 1.6;">
            C'est le dernier email de cette séquence.
          </p>

          <p>En 8 jours, je t'ai partagé :</p>

          <ul style="line-height: 2;">
            <li>✅ Comment créer des sites en 5 min avec l'IA</li>
            <li>✅ Ma stack 0€/mois pour vendre en ligne</li>
            <li>✅ Comment j'ai décroché un client à 2 500€</li>
          </ul>

          <p><strong>Maintenant, c'est ton tour de passer à l'action.</strong></p>

          <div style="background: #d1fae5; border-left: 4px solid #10b981; padding: 20px; margin: 24px 0;">
            <p style="margin: 0; font-size: 16px; color: #065f46;">
              🎁 <strong>Cadeau exclusif</strong> : Code promo <strong>SEQUENCE10</strong> pour -10% sur toutes les formations (valable 48H)
            </p>
          </div>

          <h3 style="color: #111827;">Mes 3 formations :</h3>

          <ul style="line-height: 2;">
            <li><a href="https://nash369.com/produits/zero-vivre" style="color: #6366f1; text-decoration: none;">De Zéro à Vivre de Ton Activité</a> - <s>9,90€</s> <strong>8,91€</strong></li>
            <li><a href="https://nash369.com/produits/site-vitrine" style="color: #6366f1; text-decoration: none;">Créer un Site Pro avec l'IA</a> - <s>49,90€</s> <strong>44,91€</strong></li>
            <li><a href="https://nash369.com/produits/site-ia" style="color: #6366f1; text-decoration: none;">Crée ton Site Prêt à Vendre</a> - <s>199,90€</s> <strong>179,91€</strong></li>
          </ul>

          <p style="background: #fef3c7; padding: 16px; border-radius: 8px; margin: 24px 0; font-size: 14px;">
            ⚠️ <strong>Le code expire dans 48H</strong> (${new Date(Date.now() + 48 * 60 * 60 * 1000).toLocaleDateString('fr-FR')})
          </p>

          <p>Tu continueras à recevoir mes emails hebdo avec mes meilleurs tips.</p>

          <p style="margin-top: 32px; color: #6b7280;">Merci pour ta confiance,<br><strong>NASH369</strong><br><a href="https://twitter.com/nash3691215" style="color: #6366f1;">@nash3691215</a></p>
        </div>
      `,
    },
  ]

  return emails[step] || null
}
