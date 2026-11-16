---
layout: default
title: Wurzelwissenschaft - Deine Pflanzen reden Klartext
---

<div style="text-align: center; margin-bottom: 40px;">
  <img src="assets/img/banner.png" alt="Wurzelwissenschaft Banner" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</div>

# Empfohlenes Equipment für dein Pflanzen-Setup

Hier findest du die datenbasierten Empfehlungen aus meinen Videos (wie z.B. meine genauen Messungen zu Licht und Bodenfeuchtigkeit).

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 30px;">
{% for produkt in site.data.produkte %}
  <div style="border: 1px solid #2e4a35; border-radius: 10px; padding: 20px; background-color: #f9f9f9; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
    <div>
        {% if produkt.image %}
          <img src="assets/img/{{ produkt.image }}" alt="{{ produkt.category }}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 8px; margin-bottom: 15px;">
        {% else %}
          <div style="width: 100%; height: 180px; background-color: #e0e0e0; border-radius: 8px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; color: #666;">Kein Bild</div>
        {% endif %}
        <h3 style="font-size: 1.1em; color: #1a2f20; margin-bottom: 10px;">{{ produkt.name }}</h3>
        <p style="color: #4a7c59; font-weight: bold; margin-bottom: 15px;">{{ produkt.category }}</p>
    </div>
    <a href="{{ produkt.link }}" target="_blank" rel="sponsored" style="display: inline-block; background-color: #2e4a35; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; width: 100%; box-sizing: border-box;">Produkt ansehen</a>
  </div>
{% endfor %}
</div>
