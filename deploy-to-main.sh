#!/bin/bash
set -euo pipefail

BACKUP="/Users/krishnahonnikhere/Desktop/portfolio-main"
DEPLOY="/Users/krishnahonnikhere/Desktop/portfolio-deploy"
REPO="https://github.com/Hkrish098/portfolio.git"

echo "→ Cloning fresh copy from GitHub..."
rm -rf "$DEPLOY"
git clone "$REPO" "$DEPLOY"

echo "→ Copying your local changes..."
rsync -av \
  --exclude node_modules \
  --exclude .next \
  --exclude .git \
  "$BACKUP/" "$DEPLOY/"

cd "$DEPLOY"

echo "→ Staging changes..."
git add -A
git restore --staged .DS_Store public/.DS_Store 2>/dev/null || true

echo "→ Changes:"
git diff --cached --stat

git commit -m "$(cat <<'EOF'
Add in-portfolio document viewers and fix dev stability.

Embed resume, research, and certification pages inside the portfolio with download support, reorder certifications, restore gitignore and webpack dev config, and suppress browser extension noise.
EOF
)" || echo "(No new changes to commit)"

echo "→ Pushing to main..."
git push origin main

echo ""
echo "✓ Done! Pushed to $REPO"
echo "  Optional: replace old folder with the clean copy:"
echo "  mv $BACKUP ${BACKUP}-old && mv $DEPLOY $BACKUP"
