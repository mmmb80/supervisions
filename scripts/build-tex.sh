#!/bin/bash
mkdir -p static/pdfs
for file in tex/*.tex; do
  filename=$(basename "$file" .tex)
  echo "Compiling $file..."
  pdflatex -interaction=nonstopmode -output-directory=static/pdfs "$file"
done