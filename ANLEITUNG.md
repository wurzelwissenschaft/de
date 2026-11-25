# Wurzelwissenschaft – Affiliate-Website

Einfache, statische Website (HTML + CSS), veröffentlicht über GitHub Pages
(Workflow `.github/workflows/static.yml`, startet automatisch bei jedem Push auf `main`).

## Dateien
- `index.html` – Startseite mit allen Produkten (Licht, Erde, Moos, Messen)
- `impressum.html`, `datenschutz.html`, `affiliate-hinweis.html` – Pflichtseiten
- `css/style.css` – Design
- `bilder/logo.png` – Logo

## Produkt hinzufügen
In `index.html` eine `<article class="card">…</article>` kopieren, Text und Link anpassen.
Links immer mit `target="_blank" rel="sponsored nofollow noopener"` und dem ✱ im Button.

## Vor dem Teilen
- Gelb markierte Platzhalter (Adresse, E-Mail) in `impressum.html` und `datenschutz.html` ersetzen.
- Website-Adresse im Amazon PartnerNet unter „Websites und Apps“ eintragen.
- Keine Preise und keine Amazon-Produktfotos auf die Seite kopieren.

## SEO
- Jede Seite hat `<title>`, `<meta name="description">` und `<link rel="canonical">`. Bei neuen Seiten mitkopieren und anpassen.
- Impressum, Datenschutz und Affiliate-Hinweis stehen auf `noindex` (sollen nicht in Google erscheinen).
- `sitemap.xml`: neue Seiten dort eintragen und `lastmod` aktualisieren. Die Sitemap in der Google Search Console einreichen.
- Vorschaubild für geteilte Links: `bilder/og-image.png` (1200 × 630 px).
- Kleine Logo-Varianten (`logo-144.png`, `favicon-32.png`, `apple-touch-icon.png`) statt des großen `logo.png` verwenden.
- Ziehst du auf eine eigene Domain um: Adressen in `canonical`, `og:url`, `og:image`, im JSON-LD und in `sitemap.xml` ändern und eine `robots.txt` mit `Sitemap:`-Zeile anlegen.
