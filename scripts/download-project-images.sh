#!/usr/bin/env bash
set -euo pipefail

BASE="https://raw.githubusercontent.com/jeamshiv/portfolio/master/src/MemoryData/image"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/public/projects"

# id|github-relative-path
MAP=(
  "study-hub|web/StudyHub.webp"
  "dubuddy|web/dubuddy-webiste.webp"
  "food-taxi|web/FoodTaxi.webp"
  "movie-search|web/first-movie.webp"
  "jeamshiv-blogspot|web/jeamshivBlogspot.webp"
  "best-restaurant|web/Resturant.webp"
  "ecommerce-product-page|web/ecommerce-product-page-main-frontendmentor.webp"
  "movieapp-shiv|app/MovieAppShiv.webp"
)

for entry in "${MAP[@]}"; do
  id="${entry%%|*}"
  path="${entry##*|}"
  mkdir -p "$DEST/$id"
  echo "Downloading $id ..."
  curl -sSL -f -o "$DEST/$id/feature.webp" "$BASE/$path"
done

echo "---- Downloaded files ----"
find "$DEST" -type f | sort
