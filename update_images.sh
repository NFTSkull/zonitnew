#!/bin/bash

# Script para actualizar todas las imágenes JPG a SVG en las páginas de automatización

echo "Actualizando imágenes en páginas de automatización..."

# Lista de archivos a actualizar
files=(
  "src/app/automatizacion/control-iluminacion/page.tsx"
  "src/app/automatizacion/audio-distribuido/page.tsx"
  "src/app/automatizacion/control-accesos-seguridad/page.tsx"
  "src/app/automatizacion/telefonia-ip-videoconferencia/page.tsx"
  "src/app/automatizacion/video/page.tsx"
  "src/app/automatizacion/cableado-estructurado/page.tsx"
  "src/app/automatizacion/audio-profesional/page.tsx"
  "src/app/paneles-solares/page.tsx"
  "src/app/nosotros/page.tsx"
  "src/app/proyectos/page.tsx"
  "src/app/blog/page.tsx"
  "src/app/contacto/page.tsx"
)

# Actualizar cada archivo
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Actualizando $file..."
    sed -i '' 's/\.jpg/\.svg/g' "$file"
  else
    echo "Archivo no encontrado: $file"
  fi
done

echo "Actualización completada!"

