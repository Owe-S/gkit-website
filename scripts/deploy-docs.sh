#!/bin/bash

# GKIT Dokumentasjons Deploy Script
# Bygger og publiserer MkDocs til GitHub Pages

echo "🚀 GKIT Dokumentasjons Deploy"
echo "================================"
echo ""

# Sjekk at mkdocs er installert
if ! command -v mkdocs &> /dev/null; then
    echo "❌ MkDocs er ikke installert."
    echo "Installer med: pip install mkdocs mkdocs-material"
    exit 1
fi

echo "📦 Bygger MkDocs..."
mkdocs build

if [ $? -ne 0 ]; then
    echo "❌ MkDocs build feilet!"
    exit 1
fi

echo "✅ MkDocs build OK"
echo ""

echo "🌐 Deploy til GitHub Pages (gh-pages branch)..."
mkdocs gh-deploy

if [ $? -ne 0 ]; then
    echo "❌ Deploy feilet!"
    exit 1
fi

echo "✅ Deploy OK!"
echo ""
echo "📍 Dokumentasjonen er nå live på:"
echo "   https://golfklubb-it.github.io/gkit-website/"
echo ""
