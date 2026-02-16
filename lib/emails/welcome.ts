export function getWelcomeEmailHtml(email: string): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenue chez NASH369</title>
</head>
<body style="margin:0;padding:0;background-color:#f8f8f8;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f8f8;padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#6C3AED,#2563EB);padding:32px 40px;text-align:center;">
              <h1 style="color:#ffffff;font-size:28px;margin:0;font-weight:700;">NASH369</h1>
              <p style="color:rgba(255,255,255,0.85);font-size:14px;margin:8px 0 0;">Lance ton business avec l'IA en 2026</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#0b0b0b;font-size:22px;margin:0 0 16px;">Bienvenue ! 🎉</h2>

              <p style="color:#555;font-size:16px;line-height:1.6;margin:0 0 20px;">
                Merci de rejoindre la communaute NASH369. Tu as fait le premier pas pour <strong>lancer ou optimiser ton business avec l'IA</strong>.
              </p>

              <p style="color:#555;font-size:16px;line-height:1.6;margin:0 0 20px;">
                Ton <strong>guide gratuit</strong> est en cours de preparation et te sera envoye sous <strong>24h maximum</strong> a cette adresse : <strong>${email}</strong>
              </p>

              <!-- What's inside -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f6ff;border-radius:8px;border-left:4px solid #6C3AED;margin:24px 0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="color:#6C3AED;font-size:14px;font-weight:700;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.5px;">📦 Ce que tu vas recevoir</p>
                    <p style="color:#333;font-size:15px;line-height:1.7;margin:0;">
                      ✅ Comment creer un site pro en <strong>5 minutes</strong> avec l'IA<br>
                      ✅ Les meilleurs outils pour <strong>automatiser</strong> ton business<br>
                      ✅ Nos recommandations d'hebergement et d'outils no-code<br>
                      ✅ Des <strong>prompts et templates</strong> prets a l'emploi
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Produits -->
              <p style="color:#555;font-size:16px;line-height:1.6;margin:24px 0 16px;">
                En attendant, decouvre nos <strong>deux ebooks</strong> pour passer a l'action :
              </p>

              <!-- Ebook 1 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;margin:0 0 12px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#2563EB;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">🌐 Ebook 1 — Site Web</p>
                    <p style="margin:0 0 6px;font-size:16px;color:#0b0b0b;font-weight:600;">Sites Web Express</p>
                    <p style="margin:0;font-size:14px;color:#555;line-height:1.5;">Cree un site professionnel en 5 min avec Claude AI + Hostinger. 22 pages, 7 prompts inclus.</p>
                    <p style="margin:8px 0 0;font-size:18px;font-weight:700;color:#2563EB;">19,90 € <span style="font-size:13px;color:#999;text-decoration:line-through;font-weight:400;">39,90 €</span></p>
                  </td>
                </tr>
              </table>

              <!-- Ebook 2 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;margin:0 0 24px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#6C3AED;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">⚡ Ebook 2 — Automatisation</p>
                    <p style="margin:0 0 6px;font-size:16px;color:#0b0b0b;font-weight:600;">Automatise Ton Business en 7 Jours</p>
                    <p style="margin:0;font-size:14px;color:#555;line-height:1.5;">Plan J0-J7 avec N8N. 25 pages, 10 templates JSON inclus. Zero code.</p>
                    <p style="margin:8px 0 0;font-size:18px;font-weight:700;color:#6C3AED;">49,90 € <span style="font-size:13px;color:#999;text-decoration:line-through;font-weight:400;">99,90 €</span></p>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://nash369.com" style="display:inline-block;background:linear-gradient(135deg,#6C3AED,#5B21B6);color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;padding:14px 40px;border-radius:8px;">
                      🔥 Decouvrir les offres →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Bundle mention -->
              <p style="color:#999;font-size:13px;text-align:center;margin:16px 0 0;">
                💡 Astuce : le Bundle (les 2 ebooks) est a <strong style="color:#6C3AED;">59,90 €</strong> au lieu de 119,90 €
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8f8f8;padding:24px 40px;border-top:1px solid #eee;">
              <p style="color:#999;font-size:12px;text-align:center;margin:0 0 8px;">
                Tu recois cet email car tu t'es inscrit sur <a href="https://nash369.com" style="color:#6C3AED;text-decoration:none;">nash369.com</a>
              </p>
              <p style="color:#bbb;font-size:11px;text-align:center;margin:0;">
                NASH369 — Ressources IA pour indie hackers 🇫🇷
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export function getWelcomeEmailText(email: string): string {
  const lines = [
    "Bienvenue chez NASH369 !",
    "",
    "Merci de rejoindre la communaute NASH369. Tu as fait le premier pas pour lancer ou optimiser ton business avec l'IA.",
    "",
    "Ton guide gratuit est en cours de preparation et te sera envoye sous 24h maximum a cette adresse : " + email,
    "",
    "Ce que tu vas recevoir :",
    "- Comment creer un site pro en 5 minutes avec l'IA",
    "- Les meilleurs outils pour automatiser ton business",
    "- Nos recommandations d'hebergement et d'outils no-code",
    "- Des prompts et templates prets a l'emploi",
    "",
    "En attendant, decouvre nos deux ebooks :",
    "",
    "Ebook 1 - Sites Web Express (19,90 EUR au lieu de 39,90 EUR)",
    "Cree un site professionnel en 5 min avec Claude AI + Hostinger. 22 pages, 7 prompts inclus.",
    "",
    "Ebook 2 - Automatise Ton Business en 7 Jours (49,90 EUR au lieu de 99,90 EUR)",
    "Plan J0-J7 avec N8N. 25 pages, 10 templates JSON inclus. Zero code.",
    "",
    "Le Bundle (les 2 ebooks) est a 59,90 EUR au lieu de 119,90 EUR",
    "",
    "Decouvre les offres : https://nash369.com",
    "",
    "---",
    "NASH369 - Ressources IA pour indie hackers"
  ];
  return lines.join("\n");
}
