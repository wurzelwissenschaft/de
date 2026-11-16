<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Wurzelwissenschaft – Deine Pflanzen reden Klartext</title>
  <meta name="description" content="Datenbasierte Empfehlungen für dein Pflanzen-Setup: Pflanzenlampen, Erde, Moos und Sensoren.">
  <link rel="icon" href="bilder/logo.svg">
  <style>
    :root { color-scheme: light; --green: #2e4a35; --dark-green: #1a2f20; --soft-green: #4a7c59; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #26332a; background: #fff; font: 16px/1.6 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
    .wrap { width: min(1100px, calc(100% - 32px)); margin-inline: auto; }
    header { padding: 18px 0; border-bottom: 1px solid #e6ebe7; }
    .topbar { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
    .brand { display: inline-flex; align-items: center; gap: 10px; color: var(--dark-green); text-decoration: none; font-weight: 750; }
    .brand img { width: 40px; height: 40px; object-fit: contain; }
    nav { display: flex; flex-wrap: wrap; gap: 16px; }
    nav a { color: var(--green); text-decoration: none; font-weight: 650; }
    main { padding: 28px 0 56px; }
    .banner { display: block; width: 100%; max-height: 340px; object-fit: cover; border-radius: 12px; box-shadow: 0 4px 12px #00000014; }
    h1 { margin: 38px 0 8px; color: var(--dark-green); font-size: clamp(1.8rem, 4vw, 2.5rem); line-height: 1.2; }
    .intro { max-width: 760px; margin: 0; color: #4d5d51; }
    .notice { margin: 20px 0 0; padding: 12px 16px; border-left: 4px solid var(--soft-green); background: #f3f7f3; font-size: .92rem; }
    .products { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr)); gap: 20px; margin-top: 30px; }
    .product-card { overflow: hidden; display: flex; flex-direction: column; border: 1px solid #dce5de; border-radius: 10px; background: #f9fbf9; }
    .product-image { display: flex; align-items: center; justify-content: center; height: 180px; padding: 12px; background: #fff; }
    .product-image img { width: 100%; height: 100%; object-fit: contain; }
    .no-image { display: grid; width: 100%; height: 100%; place-items: center; border-radius: 8px; background: #e8eee9; color: #627067; }
    .product-content { display: flex; flex: 1; flex-direction: column; align-items: flex-start; padding: 18px; }
    .category { margin: 0 0 8px; color: var(--soft-green); font-weight: 700; }
    .product-card h2 { margin: 0 0 20px; color: var(--dark-green); font-size: 1.05rem; line-height: 1.45; }
    .product-link { display: block; width: 100%; margin-top: auto; padding: 10px 16px; border-radius: 5px; background: var(--green); color: #fff; text-align: center; text-decoration: none; font-weight: 700; }
    .product-link:hover { background: #203a29; }
    footer { padding: 24px 16px; background: #f3f6f3; color: #526057; text-align: center; font-size: .9rem; }
    footer a { margin: 0 8px; color: var(--green); }
    @media (max-width: 600px) { .topbar { align-items: flex-start; flex-direction: column; } nav { gap: 12px; } }
  </style>
</head>
<body>
  <header>
    <div class="wrap topbar">
      <a class="brand" href="index.html"><img src="bilder/logo.svg" alt=""><span>Wurzelwissenschaft</span></a>
      <nav aria-label="Hauptnavigation">
        <a href="#products">Empfehlungen</a>
        <a href="impressum.html">Impressum</a>
      </nav>
    </div>
  </header>
  <main class="wrap">
    <img class="banner" src="bilder/hero.svg" alt="Wurzelwissenschaft – Pflanzenpflege">
    <h1>Empfohlenes Equipment für dein Pflanzen-Setup</h1>
    <p class="intro">Hier findest du datenbasierte Empfehlungen aus meinen Videos – von Pflanzenlampen und Substrat bis zu Moos und Sensoren.</p>
    <p class="notice"><strong>Anzeige / Werbung:</strong> Die Produktlinks sind Affiliate-Links. Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Für dich ändert sich am Preis nicht.</p>
    <section id="products" class="products" aria-label="Produkte"></section>
  </main>
  <footer>
    <a href="impressum.html">Impressum</a> ·
    <a href="datenschutz.html">Datenschutz</a> ·
    <a href="affiliate-hinweis.html">Affiliate-Hinweis</a>
    <p>© <span id="copyright-year">2026</span> Wurzelwissenschaft – Nirjhar Basak</p>
  </footer>
  <script src="js/app.js"></script>
</body>
</html>
