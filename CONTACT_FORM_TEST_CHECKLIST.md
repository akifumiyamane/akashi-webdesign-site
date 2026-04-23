# Contact Form Test Checklist

対象: `202604_Internal_MyAgency_LP`

## 1. Pre-check (Before Sending)

- `.env.local` に `NEXT_PUBLIC_FORMSPREE_ENDPOINT` が設定済み
- Formspree 側の受信先が `akashi.web.design1031@gmail.com` になっている
- スパムフォルダ確認手順を事前に共有済み

## 2. Functional Test (Send Flow)

- 必須項目未入力時にブラウザバリデーションが効く
- 正常入力で送信すると成功メッセージが表示される
- 送信内容（名前/メール/種別/予算/本文）が受信メールに含まれる
- 連続送信してもフロントがフリーズしない

## 3. Failure Test (Error Flow)

- エンドポイントを一時的に無効値にしたときエラー表示になる
- エラー表示時に `mailto:akashi.web.design1031@gmail.com` が表示される
- エラー状態でも再送信できる

## 4. Post-check (Operations)

- 受信メールへの初回返信SLA（24h以内）で運用できる
- 問い合わせを `02_Clients` の案件化フローへ接続できる
- テスト結果を `10_Meetings_and_Decisions` に記録する

---

## Profit Impact (Expected)

- 取りこぼし防止: 受信失敗や導線断絶を本番前に潰せる。
- 受注率向上: 返信遅延を減らし、初回対応品質を安定させる。
- 工数削減: 障害発生時の切り分け時間を短縮できる。
