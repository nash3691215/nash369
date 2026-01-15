import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy')

export async function POST(req: NextRequest) {
  try {
    const { email, type } = await req.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email requis' },
        { status: 400 }
      )
    }

    // Email pour le lead magnet (100 Prompts)
    if (type === 'lead_magnet') {
      await resend.emails.send({
        from: 'NASH369 <noreply@nash369.com>',
        to: email,
        subject: '🎁 Tes 100 Prompts ChatGPT sont prêts !',
        html: `
          <h1>Salut !</h1>
          <p>Voici tes 100 prompts ChatGPT prêts à l'emploi pour booster ta productivité.</p>

          <a href="${process.env.NEXT_PUBLIC_BASE_URL}/products/100_prompts_gpt.html"
             style="display: inline-block; background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; margin: 20px 0;">
            Télécharger les 100 Prompts
          </a>

          <h3>Comment utiliser ces prompts ?</h3>
          <ul>
            <li>Copie le prompt qui t'intéresse</li>
            <li>Colle-le dans ChatGPT</li>
            <li>Personnalise selon ton besoin</li>
            <li>Profite du résultat !</li>
          </ul>

          <p><strong>Intéressé par aller plus loin ?</strong></p>
          <p>Découvre mes formations complètes :</p>
          <ul>
            <li><a href="${process.env.NEXT_PUBLIC_BASE_URL}/produits/burnout">Le Burnout du Battant</a> - 9€</li>
            <li><a href="${process.env.NEXT_PUBLIC_BASE_URL}/produits/zero-vivre">De Zéro à Vivre de Ton Activité</a> - 9€</li>
            <li><a href="${process.env.NEXT_PUBLIC_BASE_URL}/produits/site-ia">Créer un Site Pro avec l'IA</a> - 49€</li>
          </ul>

          <p>Des questions ? Réponds simplement à cet email.</p>

          <p>À bientôt,<br>Nash<br><a href="https://twitter.com/nash3691215">@nash3691215</a></p>
        `,
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: 'Type email non reconnu' },
      { status: 400 }
    )
  } catch (error: any) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
