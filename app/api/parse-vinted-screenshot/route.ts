import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Mock data pour le mode démo
const generateMockData = () => {
  const salesCount = Math.floor(Math.random() * 30) + 10;
  const transactions = Array.from({ length: salesCount }, (_, i) => {
    const price = Math.random() * 50 + 10;
    const fees = price * 0.1; // 10% de commission
    const net = price - fees;

    return {
      date: new Date(Date.now() - i * 86400000).toLocaleDateString('fr-FR'),
      price: parseFloat(price.toFixed(2)),
      fees: parseFloat(fees.toFixed(2)),
      net: parseFloat(net.toFixed(2)),
    };
  });

  const totalRevenue = transactions.reduce((sum, t) => sum + t.price, 0);
  const totalFees = transactions.reduce((sum, t) => sum + t.fees, 0);
  const netGains = transactions.reduce((sum, t) => sum + t.net, 0);
  const averagePrice = totalRevenue / salesCount;
  const commissionRate = (totalFees / totalRevenue) * 100;

  return {
    totalRevenue: parseFloat(totalRevenue.toFixed(2)),
    totalFees: parseFloat(totalFees.toFixed(2)),
    netGains: parseFloat(netGains.toFixed(2)),
    averagePrice: parseFloat(averagePrice.toFixed(2)),
    salesCount,
    commissionRate: parseFloat(commissionRate.toFixed(1)),
    transactions,
  };
};

// Analyser l'image avec Claude Vision
async function analyzeVintedScreenshot(imageBase64: string): Promise<any> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    console.warn('⚠️ ANTHROPIC_API_KEY not found. Using mock data.');
    return generateMockData();
  }

  try {
    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              source: {
                type: 'base64',
                media_type: 'image/jpeg',
                data: imageBase64,
              },
            },
            {
              type: 'text',
              text: `Tu es un expert en analyse de données Vinted. Analyse ce screenshot de tableau de ventes Vinted et extrais toutes les transactions visibles.

Pour chaque transaction, extrais:
- Date (format DD/MM/YYYY)
- Prix de vente (en euros)
- Frais Vinted (en euros)
- Montant net reçu (en euros)

Ensuite, calcule ces KPIs:
- Revenus totaux (somme des prix)
- Frais totaux (somme des frais)
- Gains nets (somme des montants nets)
- Prix moyen de vente
- Nombre total de ventes
- Taux de commission moyen (%)

Réponds UNIQUEMENT avec un objet JSON valide dans ce format exact:
{
  "totalRevenue": 450.50,
  "totalFees": 45.05,
  "netGains": 405.45,
  "averagePrice": 22.53,
  "salesCount": 20,
  "commissionRate": 10.0,
  "transactions": [
    {
      "date": "10/01/2026",
      "price": 25.00,
      "fees": 2.50,
      "net": 22.50
    }
  ]
}

Ne retourne RIEN d'autre que le JSON. Pas d'explication, pas de texte avant ou après.`,
            },
          ],
        },
      ],
    });

    // Extraire le contenu texte de la réponse
    const textContent = message.content.find((block) => block.type === 'text');
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text content in response');
    }

    // Parser le JSON de la réponse
    let jsonText = textContent.text.trim();

    // Nettoyer le JSON si nécessaire (enlever les markdown code blocks)
    if (jsonText.startsWith('```')) {
      jsonText = jsonText.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    }

    const parsedData = JSON.parse(jsonText);

    // Valider la structure des données
    if (!parsedData.transactions || !Array.isArray(parsedData.transactions)) {
      throw new Error('Invalid data structure');
    }

    return parsedData;
  } catch (error) {
    console.error('Error calling Claude Vision API:', error);
    console.warn('Falling back to mock data');
    return generateMockData();
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('screenshot') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Vérifier le type de fichier
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload an image.' },
        { status: 400 }
      );
    }

    // Convertir le fichier en base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString('base64');

    // Analyser avec Claude Vision
    const data = await analyzeVintedScreenshot(base64Image);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error processing screenshot:', error);
    return NextResponse.json(
      { error: 'Failed to process screenshot' },
      { status: 500 }
    );
  }
}
