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
              <p style="color:rgba(255,255,255,0.85);font-size:14px;margin:8px 0 0;">Discipline &middot; Energie &middot; Elegance</p>
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
                Ton <strong>guide gratuit (5 pages, PDF)</strong> te sera envoye sous <strong>24h maximum</strong> a cette adresse : <strong>${email}</strong>
              </p>

              <!-- What's inside -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f6ff;border-radius:8px;border-left:4px solid #6C3AED;margin:24px 0;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="color:#6C3AED;font-size:14px;font-weight:700;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.5px;">📦 Ce que contient ton guide gratuit</p>
                    <p style="color:#333;font-size:15px;line-height:1.7;margin:0;">
                      ✅ <strong>5 systemes concrets</strong> pour automatiser ton business<br>
                      ✅ Creer un <strong>site pro en 5 min</strong> avec Claude AI + Hostinger<br>
                      ✅ <strong>Reseaux sociaux en autopilot</strong> sur 3 plateformes<br>
                      ✅ <strong>Generation de leads</strong> automatique + scoring IA<br>
                      ✅ <strong>200+ avis Google</strong> sans effort + CRM auto<br>
                      ✅ Chaque automatisation = <strong>un service vendable</strong>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Produits -->
              <p style="color:#555;font-size:16px;line-height:1.6;margin:24px 0 16px;">
                Envie d'aller plus loin ? Decouvre nos <strong>ebooks premium</strong> :
              </p>

              <!-- Ebook 1 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;margin:0 0 12px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#2563EB;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">🎯 Ebook 1 — Prospection</p>
                    <p style="margin:0 0 6px;font-size:16px;color:#0b0b0b;font-weight:600;">Trouve Tes Clients</p>
                    <p style="margin:0;font-size:14px;color:#555;line-height:1.5;">Scripts DM, methode de closing en 15 min, pricing, template Notion. Signe tes premiers clients cette semaine.</p>
                    <p style="margin:8px 0 0;font-size:18px;font-weight:700;color:#2563EB;">19,90 &euro; <span style="font-size:13px;color:#999;text-decoration:line-through;font-weight:400;">39,90 &euro;</span></p>
                  </td>
                </tr>
              </table>

              <!-- Ebook 2 -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;margin:0 0 24px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 4px;font-size:11px;color:#6C3AED;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">⚡ Ebook 2 — Automatisation</p>
                    <p style="margin:0 0 6px;font-size:16px;color:#0b0b0b;font-weight:600;">Automatise Ton Business en 7 Jours</p>
                    <p style="margin:0;font-size:14px;color:#555;line-height:1.5;">Site IA + 10 workflows N8N/Make + templates JSON + prompts optimises. Support email 30 jours.</p>
                    <p style="margin:8px 0 0;font-size:18px;font-weight:700;color:#6C3AED;">79 &euro; <span style="font-size:13px;color:#999;text-decoration:line-through;font-weight:400;">149 &euro;</span></p>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://nash369.com#ebooks" style="display:inline-block;background:linear-gradient(135deg,#6C3AED,#5B21B6);color:#ffffff;font-size:16px;font-weight:600;text-decoration:none;padding:14px 40px;border-radius:8px;">
                      🔥 Decouvrir les offres →
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Bundle mention -->
              <p style="color:#999;font-size:13px;text-align:center;margin:16px 0 0;">
                💡 Astuce : le Bundle (les 2 ebooks) est a <strong style="color:#6C3AED;">89 &euro;</strong> au lieu de 189 &euro; — economise 100 &euro;
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
                NASH369 — Discipline &middot; Energie &middot; Elegance 🇫🇷
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
    "Ton guide gratuit (5 pages, PDF) te sera envoye sous 24h maximum a cette adresse : " + email,
    "",
    "Ce que contient ton guide gratuit :",
    "- 5 systemes concrets pour automatiser ton business",
    "- Creer un site pro en 5 min avec Claude AI + Hostinger",
    "- Reseaux sociaux en autopilot sur 3 plateformes",
    "- Generation de leads automatique + scoring IA",
    "- 200+ avis Google sans effort + CRM auto",
    "- Chaque automatisation = un service vendable",
    "",
    "Envie d'aller plus loin ? Decouvre nos ebooks premium :",
    "",
    "Ebook 1 - Trouve Tes Clients (19,90 EUR au lieu de 39,90 EUR)",
    "Scripts DM, methode de closing en 15 min, pricing, template Notion. Signe tes premiers clients cette semaine.",
    "",
    "Ebook 2 - Automatise Ton Business en 7 Jours (79 EUR au lieu de 149 EUR)",
    "Site IA + 10 workflows N8N/Make + templates JSON + prompts optimises. Support email 30 jours.",
    "",
    "Le Bundle (les 2 ebooks) est a 89 EUR au lieu de 189 EUR — economise 100 EUR",
    "",
    "Decouvre les offres : https://nash369.com#ebooks",
    "",
    "---",
    "NASH369 — Discipline - Energie - Elegance"
  ];
  return lines.join("\n");
}
