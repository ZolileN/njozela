# Njozela Attorneys Inc - Next.js Production Build

This is a production-ready Next.js marketing website scaffold for Njozela Attorneys Inc.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Web3Forms for contact form submissions

## Pages

- /
- /about
- /services
- /raf-claims
- /faq
- /contact

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Web3Forms setup

Replace this placeholder in `components/ContactForm.tsx`:

```tsx
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
```

with your live Web3Forms access key.

## Recommended next steps

1. Replace placeholder copy with final attorney-approved content.
2. Add real team photos and office imagery.
3. Add favicon and brand assets to `/public`.
4. Add legal pages such as Privacy Policy and POPIA notice.
5. Deploy to Vercel.
