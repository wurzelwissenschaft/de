const products = {
  licht: [
    {
      name: 'LED Pflanzenlampe 120 cm',
      tag: 'Top Pick',
      price: '€39',
      description: 'Breite, gleichmäßige Ausleuchtung für Balkon, Fensterbank und kleine Zimmerpflanzen.',
      image: 'bilder/lampe-steh.svg',
      link: 'https://www.amazon.de/'
    },
    {
      name: 'Nano Grow Mini',
      tag: 'Klein & stark',
      price: '€24',
      description: 'Perfekt für kleine Räume, Schreibtisch und Blühpflanzen im Winter.',
      image: 'bilder/lampe-steh.svg',
      link: 'https://www.amazon.de/'} ,
    {
      name: 'Full Spectrum Tower',
      tag: 'Für große Pflanzen',
      price: '€59',
      description: 'Stabile, energieeffiziente Lichtlösung mit langlebigem LED-Panel.',
      image: 'bilder/lampe-steh.svg',
      link: 'https://www.amazon.de/'
    }
  ],
  erde: [
    {
      name: 'Aroma-Blumenerde',
      tag: 'Allrounder',
      price: '€12',
      description: 'Feuchtigkeitsspeichernd und leicht, ideal für Topfpflanzen mit regelmäßiger Pflege.',
      image: 'bilder/erde-mineral.svg',
      link: 'https://www.amazon.de/'
    },
    {
      name: 'Mineralisches Substrat',
      tag: 'Luftig',
      price: '€18',
      description: 'Verbessert die Drainage und sorgt dafür, dass Wurzeln nicht in Staunässe stehen.',
      image: 'bilder/erde-mineral.svg',
      link: 'https://www.amazon.de/'
    },
    {
      name: 'Pflanzensubstrat Mix',
      tag: 'Für Zimmerpflanzen',
      price: '€16',
      description: 'Ausgewogene Mischung aus Humus, Mineralien und Kokosfasern für gesunde Wurzeln.',
      image: 'bilder/erde-mineral.svg',
      link: 'https://www.amazon.de/'
    }
  ],
  moos: [
    {
      name: 'Sphagnum-Moos',
      tag: 'Bewurzeln',
      price: '€9',
      description: 'Schnell feucht, ideal zum Bewurzeln von Ablegern und für Orchideen.',
      image: 'bilder/moos.svg',
      link: 'https://www.amazon.de/'
    },
    {
      name: 'Moosstab Premium',
      tag: 'Praktisch',
      price: '€14',
      description: 'Für Monstera, Philodendron und andere Pflanzen, die zusätzliche Feuchtigkeit lieben.',
      image: 'bilder/moos.svg',
      link: 'https://www.amazon.de/'
    },
    {
      name: 'Orchid Moss Blend',
      tag: 'Für Orchideen',
      price: '€15',
      description: 'Feuchtigkeitsreich und luftdurchlässig: perfekt für tropische Gewächse.',
      image: 'bilder/moos.svg',
      link: 'https://www.amazon.de/'
    }
  ]
};

function buildCard(item) {
  return `
    <article class="product-card">
      <div class="thumb">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="body">
        <div class="meta">
          <span class="tag">${item.tag}</span>
        </div>
        <h3 class="name">${item.name}</h3>
        <p class="description">${item.description}</p>
        <div class="bottom">
          <span class="price">${item.price}</span>
          <a class="cta" href="${item.link}" target="_blank" rel="noopener">Mehr</a>
        </div>
      </div>
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const categoryBlocks = document.querySelectorAll('.produkte');

  categoryBlocks.forEach((block) => {
    const key = block.dataset.kategorie;
    const items = products[key] || [];
    block.innerHTML = items.map(buildCard).join('');
  });

  const year = document.querySelector('footer p');
  if (year && year.textContent.includes('2026')) {
    year.innerHTML = 'Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. · © ' + new Date().getFullYear() + ' Wurzelwissenschaft – Nirjhar Basak';
  }
});
