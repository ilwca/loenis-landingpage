#!/usr/bin/env bash
# Gera as versões desktop e mobile das fotos do site.
#
# Uso: coloque a foto original (qualquer formato, de preferência quadrada) em
# fotos-originais/ e rode:  bash scripts/redimensionar-fotos.sh
#
# Saída (sempre quadrada, cortada pelo centro se a original não for 1:1):
#   src/assets/fotos/desktop/<nome>.webp  1024x1024  (telas a partir de 900px)
#   src/assets/fotos/mobile/<nome>.webp    320x320   (celulares e tablets)
# Requer ImageMagick (comando `magick`).
set -euo pipefail
cd "$(dirname "$0")/.."

DESKTOP=1024
MOBILE=320
mkdir -p src/assets/fotos/desktop src/assets/fotos/mobile

shopt -s nullglob nocaseglob
for f in fotos-originais/*.{jpg,jpeg,png,webp,heic}; do
  nome=$(basename "${f%.*}")
  for alvo in desktop:$DESKTOP:82 mobile:$MOBILE:78; do
    IFS=: read -r pasta lado qualidade <<<"$alvo"
    magick "$f" -auto-orient -resize "${lado}x${lado}^" -gravity center -extent "${lado}x${lado}" \
      -strip -quality "$qualidade" "src/assets/fotos/$pasta/$nome.webp"
  done
  echo "✓ $nome"
done
