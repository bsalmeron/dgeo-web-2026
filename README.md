# D'GEO Soluciones - Sitio estático (HTML)

## Deploy en Netlify (sin build)
Este proyecto es 100% estático (HTML/CSS/JS).

- El repositorio incluye `netlify.toml` con:
  - `publish = "."`
  - `command = ""`

Si ya tenías un build configurado en Netlify, cambiá:
- **Build command**: (vacío)
- **Publish directory**: `.`

## Estructura
- `index.html`: landing principal
- `blog/`: páginas del blog
- `assets/`: imágenes y scripts
