/**
 * Script pour capturer automatiquement les screenshots des applications DashAI
 * Utilise Puppeteer pour prendre des captures d'écran
 *
 * Installation: npm install --save-dev puppeteer
 * Usage: node scripts/capture-screenshots.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const screenshots = [
  {
    url: 'https://dashai-ochre.vercel.app/',
    filename: 'dashai-1.jpg',
    viewport: { width: 1920, height: 1080 },
    description: 'DashAI - Page d\'accueil'
  },
  {
    url: 'https://dashai-ochre.vercel.app/vinted',
    filename: 'dashai-vinted-1.jpg',
    viewport: { width: 1920, height: 1080 },
    description: 'DashAI Vinted - Page d\'accueil'
  }
];

async function captureScreenshots() {
  // Créer le dossier screenshots s'il n'existe pas
  const screenshotsDir = path.join(__dirname, '..', 'public', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
    console.log('📁 Dossier screenshots créé');
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  console.log('🚀 Début de la capture des screenshots...\n');

  for (const screenshot of screenshots) {
    try {
      console.log(`📸 Capture de ${screenshot.description}...`);
      const page = await browser.newPage();

      await page.setViewport(screenshot.viewport);
      await page.goto(screenshot.url, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      // Attendre un peu pour que tout soit chargé
      await page.waitForTimeout(2000);

      const screenshotPath = path.join(screenshotsDir, screenshot.filename);
      await page.screenshot({
        path: screenshotPath,
        quality: 90,
        type: 'jpeg'
      });

      console.log(`✅ ${screenshot.filename} sauvegardé\n`);
      await page.close();
    } catch (error) {
      console.error(`❌ Erreur lors de la capture de ${screenshot.filename}:`, error.message);
    }
  }

  await browser.close();
  console.log('✨ Capture terminée !');
  console.log(`\n📁 Les screenshots sont dans: ${screenshotsDir}`);
}

// Exécuter le script
captureScreenshots().catch(console.error);
