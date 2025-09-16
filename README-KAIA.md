# KAIA Website 2026

A compelling marketing website with order functionality and login based on the KAIA platform content, built with Next.js 14, TypeScript, Tailwind CSS, and NextAuth.js.

## 🚀 Features

- **Sovereignty-Focused Messaging**: Emphasizes data sovereignty and EU compliance
- **3-Tier Pricing Structure**: Starter (Free), Professional (€69/month), Business (€219/month) 
- **User Authentication**: Sign up, login, and user dashboard
- **Order Processing**: Complete checkout flow with subscription management
- **Competitive Positioning**: Dedicated "Why KAIA?" page highlighting advantages over US competitors
- **Compliance Focus**: Detailed GDPR and EU AI Act compliance information
- **Mobile Responsive**: Fully responsive design with Tailwind CSS
- **Database Integration**: SQLite database with Prisma ORM

## 🏗️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js v5 (beta)
- **Icons**: Lucide React
- **UI Components**: Headless UI (where needed)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to the project**:
   ```bash
   cd kaia-website-2026
   ```

2. **Quick start** (recommended):
   ```bash
   ./start-dev.sh
   ```
   
   Or manually:

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   The `.env.local` file is already configured with development values:
   ```bash
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="kaia-website-2026-secret-key-for-development"
   NEXTAUTH_URL="http://localhost:3000"
   ```

3. **Initialize the database**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The application uses Prisma with SQLite and includes the following models:

- **User**: User accounts with company information
- **Account/Session**: NextAuth.js session management
- **Order**: Order tracking and billing
- **Subscription**: User subscription management

## 🔐 Authentication

The app uses NextAuth.js v5 with:
- Credentials provider (email/password)
- Protected routes via middleware
- User dashboard with account management
- Session management and persistence

## 💰 Pricing Structure

Based on the go-to-market strategy recommendations:

- **Starter**: €0/month - 1 agent, 500 interactions
- **Professional**: €79/month (€69 annual) - 5 agents, 5,000 interactions  
- **Business**: €249/month (€219 annual) - Unlimited agents, 20,000 interactions
- **Enterprise**: Custom pricing with dedicated support

## 🎨 Key Pages

1. **Homepage** (`/`): Sovereignty-focused hero with trust signals
2. **Why KAIA?** (`/why-kaia`): Competitive positioning vs US platforms
3. **Pricing** (`/pricing`): Clear 3-tier structure with interaction-based billing
4. **Compliance** (`/compliance`): GDPR, EU AI Act, and data sovereignty focus
5. **Login/Signup** (`/login`, `/signup`): Multi-step registration with plan selection
6. **Dashboard** (`/dashboard`): User account overview and management

## 🌍 Sovereignty Messaging

The website emphasizes KAIA's key differentiator:

- **German company**: Mavens GmbH, Hamburg
- **EU-only hosting**: No US CLOUD Act risk
- **GDPR by design**: Built for European compliance
- **Data sovereignty**: Complete control over data location and governance

## 📱 Responsive Design

Fully responsive with mobile-first approach:
- Mobile navigation
- Responsive pricing tables
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔧 Development

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── lib/                # Utilities (auth, prisma, etc.)
├── types/              # TypeScript type definitions
└── middleware.ts       # Route protection middleware
```

### Key Components

- **Navigation**: Consistent across all pages
- **SessionProvider**: NextAuth.js session management
- **Protected Routes**: Middleware-based route protection
- **Form Components**: Multi-step signup, login forms

## 🚀 Deployment

### Environment Variables for Production

Update `.env.local` with production values:

```bash
DATABASE_URL="your-production-database-url"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://your-domain.com"
STRIPE_SECRET_KEY="your-stripe-secret"
STRIPE_PUBLISHABLE_KEY="your-stripe-public-key"
```

### Deploy to Vercel

1. Push to GitHub repository
2. Connect to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Database Migration

For production, migrate to PostgreSQL:

1. Update `prisma/schema.prisma` provider to `postgresql`
2. Update `DATABASE_URL` to PostgreSQL connection string
3. Run `npx prisma db push`

## 📞 Support

For support and questions:
- Email: contact@kaia.team
- Website: [kaia.team](https://kaia.team)
- Address: Bahrenfelder Steindamm 22, 22761 Hamburg, Germany

---

**Built in Hamburg, Germany. Made for Europe.** 🇪🇺