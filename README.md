## My Agency LP

このプロジェクトは自社集客用LPです。問い合わせは Formspree 経由で受信します。

### Contact Settings

1. `.env.example` を `.env.local` にコピー
2. `NEXT_PUBLIC_FORMSPREE_ENDPOINT` に Formspree の endpoint を設定
3. `NEXT_PUBLIC_SITE_URL` に本番URLを設定
4. Formspree 側の受信先メールを `akashi.web.design1031@gmail.com` に設定

```bash
cp .env.example .env.local
```

`.env.local` 例:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

設定前はフォーム送信時にエラー表示し、メール直送リンクへ誘導します。

### Test Checklist

- `CONTACT_FORM_TEST_CHECKLIST.md` を使って、本番前に送信テストを実施
- `SEO_LAUNCH_CHECKLIST.md` でSEO公開チェックを実施
- `SEARCH_CONSOLE_SETUP.md` でSearch Console初期設定を実施
- `RELEASE_TODAY_RUNBOOK.md` で本日公開の実行手順を確認
- `GITHUB_VERCEL_AUTOPUBLISH.md` でRun一発公開フローを実行

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
