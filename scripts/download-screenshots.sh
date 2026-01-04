#!/bin/bash

# Script simple pour télécharger des screenshots via API
# Usage: bash scripts/download-screenshots.sh

echo "📸 Téléchargement des screenshots..."

# Créer le dossier screenshots
mkdir -p public/screenshots

# Utiliser l'API screenshot.one (gratuit) ou screenshotapi.net
# Alternative: utiliser curl avec des services de screenshots

# DashAI
echo "Téléchargement: DashAI..."
curl -o "public/screenshots/dashai-1.jpg" \
  "https://shot.screenshotapi.net/screenshot?url=https://dashai-ochre.vercel.app/&width=1920&height=1080&output=image&file_type=jpeg&wait_for_event=load"

# DashAI Vinted
echo "Téléchargement: DashAI Vinted..."
curl -o "public/screenshots/dashai-vinted-1.jpg" \
  "https://shot.screenshotapi.net/screenshot?url=https://dashai-ochre.vercel.app/vinted&width=1920&height=1080&output=image&file_type=jpeg&wait_for_event=load"

echo "✅ Screenshots téléchargés dans public/screenshots/"
