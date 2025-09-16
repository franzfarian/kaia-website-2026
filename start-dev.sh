#!/bin/bash

echo "🚀 Starting KAIA Website 2026 Development Server..."
echo "📍 Project: kaia-website-2026"
echo "🌐 URL: http://localhost:3000"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Initialize database if it doesn't exist
if [ ! -f "dev.db" ]; then
    echo "🗄️ Initializing database..."
    npx prisma generate
    npx prisma db push
    echo ""
fi

echo "✅ Starting development server..."
npm run dev