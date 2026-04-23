# GitHub + Vercel Auto Publish

この手順は「Runを押すだけ」を目指した公開フローです。

## One-Time Setup (初回のみ)

1. GitHubで空リポジトリを作成（例: `akashi-webdesign-site`）
2. 以下を1回だけ実行（`<...>`は置き換え）

```bash
git -C "/Users/yamaneakifumi/my-agency/02_Clients/202604_Internal_MyAgency_LP" remote add origin <YOUR_GITHUB_REPO_URL>
```

## Publish (毎回これだけ)

```bash
"/Users/yamaneakifumi/my-agency/02_Clients/202604_Internal_MyAgency_LP/scripts/one_click_publish.sh"
```

スクリプトが以下を自動実行します。

- install
- lint
- build
- commit
- push to GitHub
- vercel production deploy

## Notes

- `vercel` 初回はログイン/リンク確認が出る場合あり（承認は1回だけ）
- 本番ドメインは `akashi-webdesign.com` 前提
- 環境変数は `.env.local` に設定済み
