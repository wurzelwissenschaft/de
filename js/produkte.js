const products = {
  licht: [
    {
      name: 'SANSI T10 Stehende Pflanzenlampe Vollspektrum, 55W Grow Lampe, Fernbedienung',
      tag: 'Top Pick',
      price: '€49',
      description: 'Vollspektrum-LED mit Fernbedienung für kräftigere Triebe und besseres Wachstum im Winter.',
      image: 'bilder/lampe-steh.svg',
      link: 'https://link.amazon/B09x9j1CM'
    },
    {
      name: 'Pflanzenlampe LED, 243 LEDs Pflanzenlicht mit 3 Beleuchtungsmodi Rot Blau Vollspektrum',
      tag: 'Vollspektrum',
      price: '€39',
      description: 'Starkes Indoor-Wachstumslight mit 3 Modi und Timer für Zimmerpflanzen und kleine Kulturen.',
      image: 'bilder/lampe-steh.svg',
      link: 'https://link.amazon/B063tW7Vw'
    }
  ],
  erde: [
    {
      name: 'Westland Zimmerpflanzen Erde, 8 l – Erde mit Tongranulat für ein gesundes Wachstum',
      tag: 'Allrounder',
      price: '€14',
      description: 'Ideale Wasser- und Nährstoffverteilung für gesunde Zimmerpflanzen mit stabiler Struktur.',
      image: 'bilder/erde-mineral.svg',
      link: 'https://link.amazon/B0i6dtjh7'
    },
    {
      name: 'Floragard Green Jungle Mix, mineralisches Pflanzsubstrat aus Bims, Zeolith und Lava',
      tag: 'Luftig',
      price: '€18',
      description: 'Mineralisches Substrat für gute Drainage, Wurzelatmung und weniger Staunässe.',
      image: 'bilder/erde-mineral.svg',
      link: 'https://link.amazon/B0fd37O3R'
    }
  ],
  moos: [
    {
      name: 'Sphagnum Moosziegel Chile 100g · ergibt 5 L langfaseriges Premium Torfmoos',
      tag: 'Bewurzeln',
      price: '€12',
      description: 'Langfaseriges, feuchtigkeitsreiches Torfmoos für Ableger, Moosstäbe und Orchideen.',
      image: 'bilder/moos.svg',
      link: 'https://link.amazon/B0e5CLso4'
    }
  ],
  sensoren: [
    {
      name: '4 in 1 Pflanzenfeuchtigkeitsmesser Gießanzeiger mit Bodenmonitor für Feuchtigkeit, Licht, Fruchtbarkeit und Temperatur',
      tag: 'Praktisch',
      price: '€29',
      description: 'Überwacht automatisch Bodenfeuchte, Licht, Nährstoffe und Temperatur mit einfacher App-Auswertung.',
      image: '',
      link: 'https://link.amazon/B0c9PXnh4'
    }
  ]
};

function buildCard(item) {
  const imageMarkup = item.image
    ? `<div class="thumb"><img src="${item.image}" alt="${item.name}"></div>`
    : `<div class="thumb empty">Kein Bild</div>`;

  return `
    <article class="product-card">
      ${imageMarkup}
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
