# Nest

Nest is a consumer AI savings app that onboards web2 users into Mantle without exposing them to raw DeFi complexity.

## Apps

- `apps/api`: VPS-hosted API
- `apps/worker`: VPS-hosted background processor
- `apps/web`: Vercel-hosted frontend

## Core workflow

1. Onboard by email or passkey
2. Generate a plain-English savings plan
3. Guide funding into Mantle-native goal vaults
4. Explain progress and portfolio movement
5. Power referrals, support, and admin recovery

## Local development

1. Run the shared infrastructure in `../shared-infra`
2. Create a PostgreSQL database named `nest`
3. Apply `apps/api/db/schema.sql`
4. Apply `apps/api/db/seed.sql`
5. Install dependencies with `npm install`
6. Start each app:
   - `npm run dev:api`
   - `npm run dev:worker`
   - `npm run dev:web`

## Production notes

- API and worker are VPS-ready through Docker
- frontend remains Vercel-oriented
- PostgreSQL is the source of truth for onboarding, plans, portfolios, and admin audit logs
- smart contract registry skeletons live in `contracts/`
