#!/bin/bash

echo "🚀 Checklist Deployment Script"
echo "=============================="

# Build the project
echo "📦 Building production version..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "🌐 Your app is ready to deploy!"
echo ""
echo "Choose your deployment platform:"
echo "1️⃣  Vercel (Recommended)"
echo "   Run: vercel --prod"
echo ""
echo "2️⃣  Netlify"
echo "   Run: netlify deploy --prod --dir=build"
echo ""
echo "3️⃣  Surge.sh" 
echo "   Run: surge build/ checklist-gift.surge.sh"
echo ""
echo "4️⃣  GitHub Pages"
echo "   Run: npm run deploy (after setting up gh-pages)"
echo ""
echo "5️⃣  Manual Upload"
echo "   Upload the 'build' folder to any web hosting service"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
echo ""
echo "💝 Your girlfriend will love this gift! 💕"