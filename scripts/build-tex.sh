#!/bin/bash
mkdir -p static/pdfs
for file in tex/*.tex; do
  echo "Compiling $file..."
  filename=$(basename "$file" .tex)

  # latexmk automatically runs pdflatex multiple times and handles images
  latexmk -pdf -interaction=nonstopmode -halt-on-error -output-directory=tex "$file"

  mv "tex/$filename.pdf" "static/pdfs/$filename.pdf"
done