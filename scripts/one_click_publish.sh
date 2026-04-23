#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
NODE_BIN="/Applications/Cursor.app/Contents/Resources/app/resources/helpers/node"
NPM_CLI="/usr/local/lib/node_modules/npm/bin/npm-cli.js"

if [[ ! -x "$NODE_BIN" ]]; then
  echo "Cursor bundled node not found: $NODE_BIN"
  exit 1
fi

if [[ ! -f "$NPM_CLI" ]]; then
  echo "npm cli not found: $NPM_CLI"
  exit 1
fi

echo "==> Project: $PROJECT_DIR"
cd "$PROJECT_DIR"
echo "==> Step 1/6: Ensure dependencies"
"$NODE_BIN" "$NPM_CLI" --prefix "$PROJECT_DIR" install

echo "==> Step 2/6: Run lint"
"$NODE_BIN" "./node_modules/eslint/bin/eslint.js" .

echo "==> Step 3/6: Build check"
PATH="/Applications/Cursor.app/Contents/Resources/app/resources/helpers:$PATH" \
  "$NODE_BIN" "./node_modules/next/dist/bin/next" build .

echo "==> Step 4/6: Git commit"
git -C "$PROJECT_DIR" add .
if ! git -C "$PROJECT_DIR" diff --cached --quiet; then
  git -C "$PROJECT_DIR" commit -m "chore: prepare production release for akashi-webdesign.com"
else
  echo "No staged changes to commit."
fi

echo "==> Step 5/6: GitHub push"
if ! git -C "$PROJECT_DIR" remote get-url origin >/dev/null 2>&1; then
  echo "ERROR: Git remote 'origin' is not configured."
  echo "Run once:"
  echo "  git -C \"$PROJECT_DIR\" remote add origin <YOUR_GITHUB_REPO_URL>"
  exit 1
fi
git -C "$PROJECT_DIR" push -u origin main

echo "==> Step 6/6: Vercel production deploy"
echo "If login/link prompts appear, approve once in the terminal UI."
"$NODE_BIN" "$NPM_CLI" --prefix "$PROJECT_DIR" exec -- vercel --prod --yes

echo ""
echo "Done. Next checks:"
echo "  https://akashi-webdesign.com/"
echo "  https://akashi-webdesign.com/robots.txt"
echo "  https://akashi-webdesign.com/sitemap.xml"
