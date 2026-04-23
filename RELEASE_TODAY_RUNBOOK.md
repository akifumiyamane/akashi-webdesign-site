# Release Today Runbook

この手順は「本日公開」を想定した最短実行版です。

## A. Done by Noguchi (Completed)

- 問い合わせフォームの実送信実装（Formspree連携）
- 受信先メール設定方針反映（`akashi.web.design1031@gmail.com`）
- SEO基本実装（metadata / robots / sitemap / JSON-LD）
- ビルド検証完了（lint/build通過）

## B. Owner Action (Today)

1. 本番ドメインを確定する
2. `.env.local` の `NEXT_PUBLIC_SITE_URL` を本番URLへ更新
3. 本番へデプロイする
4. 本番URLでフォーム送信テスト1件実施する
5. Search Consoleへ登録し `sitemap.xml` を送信する

## C. Post-Deploy Checks (Copy and Check)

- [ ] `https://<domain>/` が表示される
- [ ] `https://<domain>/robots.txt` が表示される
- [ ] `https://<domain>/sitemap.xml` が表示される
- [ ] 問い合わせフォーム送信が成功し、受信メールが届く
- [ ] Search Consoleでサイトマップ送信が成功する
- [ ] URL検査でトップページのインデックス登録をリクエストする

## D. Response Template (After Launch)

公開完了しました。SEO初期設定（robots/sitemap/Search Console登録）を実施済みです。  
今週は表示回数とCTRを確認し、タイトルと説明文を1回改善します。

---

## Profit Impact (Expected)

- 早期集客開始: 公開初日から検索流入獲得の準備を完了できる。
- 機会損失防止: 問い合わせ導線と受信確認を公開日に完了できる。
- 実行速度向上: 手順固定で迷いを削減し、平日夜でも進められる。
