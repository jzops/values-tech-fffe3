# values.tech

**What tech actually stands for.**

A public database of tech companies, executives, and VCs - tracking their stances on issues like layoffs, DEI, remote work, Palestine, AI ethics, and more. Every claim is sourced from public records.

## Features

- **Company Profiles** - Track stances from Meta, Google, Amazon, Tesla, Stripe, OpenAI, and more
- **People Profiles** - Elon Musk, Mark Zuckerberg, Sam Altman, Guillermo Rauch, etc.
- **VC Profiles** - a16z, Sequoia, Founders Fund, Y Combinator, etc.
- **Topic Pages** - Browse by topic (layoffs, DEI, remote work, etc.)
- **Search** - Find any company, person, or VC
- **Sources** - Every stance links to the original source

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (Postgres) - currently using mock data
- **Hosting**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy

Or use the Vercel CLI:
```bash
vercel login
vercel --prod
```

### Environment Variables

For production with Supabase:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Data

Currently using mock data with 55+ documented stances including:

**Companies**: Meta, Google, Amazon, Apple, Microsoft, Tesla, Twitter/X, Stripe, OpenAI, Anthropic, Vercel, Coinbase, Shopify, Salesforce, Netflix, Spotify, Airbnb, Uber, Palantir, Cloudflare

**People**: Mark Zuckerberg, Elon Musk, Sundar Pichai, Tim Cook, Satya Nadella, Sam Altman, Patrick Collison, Guillermo Rauch, Brian Armstrong, Brian Chesky, Marc Benioff, Peter Thiel

**VCs**: Andreessen Horowitz, Sequoia Capital, Founders Fund, Y Combinator, Tiger Global, SoftBank

**Topics**: Layoffs, DEI, Remote Work, Unionization, Politics, Palestine, Environment, AI Ethics, Worker Treatment, Executive Pay, Free Speech, Immigration

## Contributing

This is an anonymous project. Contact: tips@values.tech

## License

All data is sourced from public records.
