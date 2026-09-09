/* =========================================================
   HADDAD AUTO BEJAÏA — script.js
   ========================================================= */

const dealership = {
  name: "HADDAD AUTO BEJAÏA",
  phone: "0553021122",
  phone2: "0540022441",
  phoneIntl: "+213553021122",
  phone2Intl: "+213540022441",
  phoneFr: "+33745585978",
  whatsapp: "213540022441",
  address: "Sidi Ahmed, Béjaïa, Algérie",
  hours: " 9h - 19h sauf le vendredi ",
  city: "Béjaïa",
  country: "Algérie",
  mapQuery: "Haddad Auto Béjaïa, Algérie",
  instagram: "https://www.instagram.com/haddad_auto_bejaia?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  facebook: "https://www.facebook.com/share/1GZucJq1MF/?mibextid=wwXIfr"
};

/* -------------------------------------------------------------
   VÉHICULES (VENTE)
   ------------------------------------------------------------- */
const VEHICLES = [
  {
    brand: "Geely",
    model: "Coolray Full Option",
    year: null,
    fuel: null,
    gearbox: null,
    mileage: null,
    price: null,
    availability: "available",
    image: "images/geely-coolray.jpg",
    alt: "Geely Coolray Full Option grise métallisée — Haddad Auto Béjaïa"
  },
  {
    brand: "Livan",
    model: "X3 Pro",
    year: null,
    fuel: null,
    gearbox: null,
    mileage: null,
    price: null,
    availability: "available",
    image: "images/livan-x3-pro.jpg",
    alt: "Livan X3 Pro grise sous housse premium en showroom — Haddad Auto Béjaïa"
  },
  {
    brand: "Volkswagen",
    model: "Golf 8 R-Line",
    year: null,
    fuel: null,
    gearbox: null,
    mileage: null,
    price: null,
    availability: "available",
    image: "images/vw-golf-8-rline.jpg",
    alt: "Volkswagen Golf 8 R-Line bleue — Haddad Auto Béjaïa"
  },
  {
    brand: "Audi",
    model: "Q3",
    year: null,
    fuel: null,
    gearbox: null,
    mileage: null,
    price: null,
    availability: "available",
    image: "images/audi-q3.jpg",
    alt: "Audi Q3 bleue SUV compacte — Haddad Auto Béjaïa"
  },
  {
    brand: "Kia",
    model: "Seltos",
    year: null,
    fuel: null,
    gearbox: null,
    mileage: null,
    price: null,
    availability: "available",
    image: "images/kia-seltos.jpg",
    alt: "Kia Seltos blanche SUV — Haddad Auto Béjaïa"
  },
//   {
//     brand: "Kia",
//     model: "Sonet",
//     year: null,
//     fuel: null,
//     gearbox: null,
//     mileage: null,
//     price: null,
//     availability: "demand",
//     image: null,
//     alt: "Kia Sonet — photo sur demande chez Haddad Auto Béjaïa"
//   },
  {
    brand: "Suzuki",
    model: "Swift",
    year: null,
    fuel: null,
    gearbox: null,
    mileage: null,
    price: null,
    availability: "available",
    image: "images/suzuki-swift.jpg",
    alt: "Suzuki Swift grise sportive — Haddad Auto Béjaïa"
  }
];

/* -------------------------------------------------------------
   LOCATION
   ------------------------------------------------------------- */
const RENTALS = [
  {
    brand: "MG",
    model: "MG5",
    gearbox: "Manuelle",
    price: 10000,
    image: 'images/mg5.jpg',
    features: ["Boîte manuelle", "Livraison aéroport disponible"]
  },
  {
    brand: "Livan",
    model: "X3 Pro",
    gearbox: "Automatique",
    price: 10000,
    image: "images/livan-x3-pro.jpg",
    features: ["Boîte automatique", "Livraison aéroport disponible"]
  },
  {
    brand: "Seat",
    model: "Ibiza",
    gearbox: "Manuelle",
    price: 9000,
    image: 'images/ibiza.jpg',
    features: ["Boîte manuelle", "Livraison aéroport disponible"]
  }
];

/* -------------------------------------------------------------
   AVIS CLIENTS
   ------------------------------------------------------------- */
const REVIEWS = [
  {
    name: "Karim B.",
    text: "Excellent service, voiture livrée propre et à l'heure. Je recommande vivement Haddad Auto pour la location.",
    rating: 5
  },
  {
    name: "Amel M.",
    text: "J'ai acheté une Geely Coolray, très bon rapport qualité-prix. L'équipe est professionnelle et à l'écoute.",
    rating: 5
  },
  {
    name: "Sofiane T.",
    text: "Location rapide et sans souci. La livraison à l'aéroport est un vrai plus. Merci !",
    rating: 5
  }
];

/* ================= Helpers ================= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const ON_DEMAND = "Sur demande";

const specIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>';
const specIconFuel = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 21V6a2 2 0 012-2h6a2 2 0 012 2v15M3 21h14M15 9h2a2 2 0 012 2v6a1.5 1.5 0 003 0V9.5L20 7"/></svg>';
const specIconGear = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/><circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="18" r="2.2"/><path d="M8 6h8M6 8v8M18 8v8M8 18h8"/></svg>';
const specIconKm = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21a9 9 0 110-18 9 9 0 010 18z"/><path d="M12 12l4-4M7 15l1.5 1.5M17 15l-1.5 1.5"/></svg>';
const phoneIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.4 2.1L8.1 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.9.6 2.9.7a2 2 0 011.7 2z"/></svg>';
const pinIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1116 0z"/><circle cx="12" cy="10" r="3"/></svg>';
const clockIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>';
const waIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.5 8.5 0 01-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1121 11.5z"/></svg>';
const checkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
const starIcon = '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';

function formatPhone(num) {
  return num.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
}

function waLink(message, waId = dealership.whatsapp) {
  return `https://wa.me/${waId}?text=${encodeURIComponent(message)}`;
}

const PHONE_CONTACTS = [
  {
    label: "Téléphone 1",
    display: formatPhone(dealership.phone),
    tel: dealership.phoneIntl,
    wa: null
  },
  {
    label: "Téléphone 2",
    display: formatPhone(dealership.phone2),
    tel: dealership.phone2Intl,
    wa: "213540022441"
  },
  {
    label: "Depuis la France",
    display: dealership.phoneFr,
    tel: dealership.phoneFr,
    wa: "33745585978",
    tag: '<span class="tag tag-fr">International</span>'
  }
];

const waDefaultMsg = () => `Bonjour, je vous contacte depuis le site de ${dealership.name}.`;

/* ================= Rendu Location ================= */
function renderRentals() {
  const grid = $("#rentalsGrid");
  if (!grid) return;
  grid.innerHTML = RENTALS.map((r, i) => {
    const media = r.image
      ? `<img src="${r.image}" alt="${r.brand} ${r.model}" loading="lazy">`
      : `<div style="position:absolute;inset:0;display:grid;place-items:center;color:#9a9aa0;font-weight:700;padding:1rem;text-align:center;background:#1d1d20;">${r.brand} ${r.model}</div>`;
    return `
    <article class="rental-card reveal" style="transition-delay:${(i % 3) * 90}ms">
      <div class="rental-media">
        ${media}
      </div>
      <div class="rental-body">
        <p class="rental-brand">${r.brand}</p>
        <h3 class="rental-model">${r.model}</h3>
        <p class="rental-price">${r.price.toLocaleString("fr-FR")} DA <small>/ jour</small></p>
        <div class="rental-features">
          ${r.features.map(f => {
            const isAirport = f.toLowerCase().includes("aéroport");
            const text = isAirport ? `<span class="feature-airport">${f}</span>` : f;
            return `<span>${checkIcon}${text}</span>`;
          }).join("")}
        </div>
        <button type="button" class="btn btn-whatsapp rental-wa-btn" data-ridx="${i}" style="width:100%;margin-top:auto">Réserver sur WhatsApp</button>
      </div>
    </article>`;
  }).join("");
  grid.querySelectorAll(".rental-wa-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const r = RENTALS[Number(btn.dataset.ridx)];
      if (r) openWaChoiceModal(rentalWaMessage(r));
    });
  });
}

/* ================= Rendu des véhicules ================= */
const BADGES = {
  available: '<span class="vehicle-badge badge-available">Disponible</span>',
  order: '<span class="vehicle-badge badge-order">Sur commande</span>',
  demand: '<span class="vehicle-badge badge-demand">Sur demande</span>'
};

function specRow(icon, label, value) {
  const v = value ? `<b>${value}</b>` : `<b>${ON_DEMAND}</b>`;
  return `<div>${icon}<span>${label} : ${v}</span></div>`;
}

let activeBrand = "all";

function uniqueSaleBrands() {
  return [...new Set(VEHICLES.map(v => v.brand))];
}

function renderBrandFilters() {
  const el = $("#brandFilters");
  if (!el) return;
  const brands = uniqueSaleBrands();
  el.innerHTML = `
    <button type="button" class="brand-filter${activeBrand === "all" ? " is-active" : ""}" data-brand="all" aria-pressed="${activeBrand === "all"}">Tous</button>
    ${brands.map(b => `
      <button type="button" class="brand-filter${activeBrand === b ? " is-active" : ""}" data-brand="${b}" aria-pressed="${activeBrand === b}">${b}</button>
    `).join("")}
  `;
  el.querySelectorAll(".brand-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      activeBrand = btn.dataset.brand;
      renderBrandFilters();
      renderVehicles();
      initReveal();
    });
  });
}

function renderVehicles() {
  const grid = $("#vehiclesGrid");
  const list = activeBrand === "all" ? VEHICLES : VEHICLES.filter(v => v.brand === activeBrand);
  currentVehicleList = list;
  if (!list.length) {
    grid.innerHTML = `<p class="vehicles-empty">Aucun véhicule pour cette marque.</p>`;
    return;
  }
  grid.innerHTML = list.map((v, i) => {
    const media = v.image
      ? `<img src="${v.image}" alt="${v.alt}" loading="lazy">`
      : `<div style="position:absolute;inset:0;display:grid;place-items:center;color:#9a9aa0;font-weight:700;padding:1rem;text-align:center;background:#1d1d20;">Photo sur demande</div>`;
    const price = v.price ? `${v.price.toLocaleString("fr-FR")} DA` : ON_DEMAND;
    return `
    <article class="vehicle-card reveal" style="transition-delay:${(i % 3) * 90}ms">
      <div class="vehicle-media">
        ${BADGES[v.availability] || ""}
        ${media}
      </div>
      <div class="vehicle-body">
        <p class="vehicle-brand">${v.brand}</p>
        <h3 class="vehicle-model">${v.model}</h3>
        <div class="vehicle-specs">
          ${specRow(specIcon, "Année", v.year)}
          ${specRow(specIconFuel, "Carburant", v.fuel)}
          ${specRow(specIconGear, "Boîte", v.gearbox)}
          ${specRow(specIconKm, "Kilométrage", v.mileage)}
        </div>
        <p class="vehicle-price">${price} ${v.price ? '<small>DA</small>' : ''}</p>
        <div class="vehicle-actions">
          <button type="button" class="btn btn-whatsapp vehicle-wa-btn" data-vidx="${i}">WhatsApp</button>
          <a href="tel:${dealership.phoneIntl}" class="btn btn-ghost">Détails</a>
        </div>
      </div>
    </article>`;
  }).join("");
  grid.querySelectorAll(".vehicle-wa-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const v = currentVehicleList[Number(btn.dataset.vidx)];
      if (v) openWaChoiceModal(vehicleWaMessage(v));
    });
  });
}

/* ================= Rendu Avis ================= */
function renderReviews() {
  const container = $("#reviewsGrid");
  if (!container) return;
  container.innerHTML = REVIEWS.map((r, i) => `
    <div class="review-card reveal" style="transition-delay:${(i % 3) * 90}ms">
      <div class="stars">${starIcon.repeat(r.rating)}</div>
      <p class="review-text">"${r.text}"</p>
      <p class="review-author">${r.name}</p>
    </div>
  `).join("");
}

/* ================= Rendu du contact ================= */
function contactCard(icon, title, value, href, extraTag) {
  return `
    <div class="contact-card reveal">
      <div class="contact-icon">${icon}</div>
      <h3>${title}</h3>
      <a class="value" href="${href}" target="_self">${value}</a>
      ${extraTag || ""}
    </div>`;
}

function phoneContactCard(p) {
  return `
    <div class="contact-card contact-card--phone reveal">
      <div class="contact-icon">${phoneIcon}</div>
      <h3>${p.label}</h3>
      <p class="contact-number">${p.display}</p>
      ${p.tag || ""}
      <div class="contact-actions">
        <a href="tel:${p.tel}" target="_self" class="btn btn-ghost btn-contact" aria-label="Appeler ${p.display}">Appel</a>
        ${p.wa ? `<a href="${waLink(waDefaultMsg(), p.wa)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-contact" aria-label="WhatsApp ${p.display}">WhatsApp</a>` : ""}
      </div>
    </div>`;
}

function renderContact() {
  const grid = $("#contactGrid");
  grid.innerHTML =
    PHONE_CONTACTS.map(phoneContactCard).join("") +
    contactCard(pinIcon, "Adresse", dealership.address, "#localisation") +
    contactCard(clockIcon, "Horaires", dealership.hours, "#contact");
}

/* ================= Localisation ================= */
function renderMap() {
  $("#mapAddress").textContent = dealership.address;
  const q = encodeURIComponent(dealership.mapQuery);
  $("#gmap").src = `https://www.google.com/maps?q=${q}&z=15&output=embed`;
  $("#mapsLink").href = `https://www.google.com/maps/search/?api=1&query=${q}`;
}

/* ================= Footer / liens globaux ================= */
function renderGlobal() {
  $("#footerContact").innerHTML = `
    <h4>Contact</h4>
    <a href="tel:${dealership.phoneIntl}">Tél 1 : ${formatPhone(dealership.phone)}</a>
    <a href="tel:${dealership.phone2Intl}">Tél 2 : ${formatPhone(dealership.phone2)}</a>
    <a href="tel:${dealership.phoneFr}">Depuis la France : ${dealership.phoneFr}</a>
    <a href="${waLink("Bonjour !")}" target="_blank" rel="noopener">WhatsApp</a>
    <a href="#localisation">${dealership.address}</a>`;
  $("#year").textContent = new Date().getFullYear();
}

/* ================= WhatsApp flottant ================= */
function closeWaLauncher() {
  const launcher = $("#waLauncher");
  const panel = $("#waPanel");
  const btn = $("#waFloat");
  if (!launcher) return;
  launcher.classList.remove("is-open");
  if (panel) panel.hidden = true;
  if (btn) btn.setAttribute("aria-expanded", "false");
}

function initWaLauncher() {
  const launcher = $("#waLauncher");
  const panel = $("#waPanel");
  const btn = $("#waFloat");
  if (!launcher || !panel || !btn) return;

  panel.innerHTML = VEHICLE_WA_NUMBERS.map(p => `
    <a class="wa-panel-link" href="${waLink(waDefaultMsg(), p.wa)}" target="_blank" rel="noopener">
      <span class="wa-panel-label">${p.label}</span>
      <span class="wa-panel-num">${p.display}</span>
    </a>
  `).join("");

  btn.addEventListener("click", e => {
    e.stopPropagation();
    const open = launcher.classList.toggle("is-open");
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", e => {
    if (!launcher.contains(e.target)) closeWaLauncher();
  });
}

/* ================= Navigation mobile ================= */
function initNav() {
  const toggle = $("#navToggle");
  const nav = $("#mainNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("open");
    document.body.style.overflow = "";
  }));
  const header = $("#siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ================= Apparition au scroll ================= */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ================= Modale WhatsApp véhicule ================= */
/* Numéros WhatsApp valides pour les véhicules (le 0553 n'est PAS sur WhatsApp) */
const VEHICLE_WA_NUMBERS = [
  { label: "WhatsApp Algérie", display: formatPhone(dealership.phone2), wa: "213540022441" },
  { label: "Depuis la France", display: "+33 7 45 58 59 78", wa: "33745585978" }
];

let currentVehicleList = [];

/* Message pré-rempli avec les caractéristiques du véhicule */
function vehicleWaMessage(v) {
  const specs = [];
  if (v.year)    specs.push(`Année : ${v.year}`);
  if (v.fuel)    specs.push(`Carburant : ${v.fuel}`);
  if (v.gearbox) specs.push(`Boîte : ${v.gearbox}`);
  if (v.mileage) specs.push(`Kilométrage : ${v.mileage}`);
  let msg = `Bonjour ${dealership.name},\nJe suis intéressé par le véhicule ${v.brand} ${v.model}.`;
  if (specs.length) msg += `\nCaractéristiques : ${specs.join(" · ")}.`;
  msg += `\nPouvez-vous m'envoyer le prix et plus de détails ? Merci.`;
  return msg;
}

/* Message pré-rempli pour la location */
function rentalWaMessage(r) {
  return `Bonjour ${dealership.name},\nJe souhaite réserver le véhicule de location ${r.brand} ${r.model}.\nBoîte : ${r.gearbox} · Tarif : ${r.price.toLocaleString("fr-FR")} DA/jour.\nLivraison aéroport disponible.\nPouvez-vous me confirmer les disponibilités ? Merci.`;
}

function openWaChoiceModal(msg) {
  const modal = $("#vehicleWaModal");
  if (!modal) return;
  $("#vehicleWaNumbers").innerHTML = VEHICLE_WA_NUMBERS.map(n => `
    <a class="wa-panel-link" href="${waLink(msg, n.wa)}" target="_blank" rel="noopener">
      <span class="wa-panel-label">${n.label}</span>
      <span class="wa-panel-num">${n.display}</span>
    </a>
  `).join("");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeWaChoiceModal() {
  const modal = $("#vehicleWaModal");
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}

function initWaChoiceModal() {
  const backdrop = $("#vehicleWaBackdrop");
  const closeBtn = $("#vehicleWaClose");
  if (backdrop) backdrop.addEventListener("click", closeWaChoiceModal);
  if (closeBtn) closeBtn.addEventListener("click", closeWaChoiceModal);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeWaChoiceModal();
  });
}

/* ================= Init ================= */
document.addEventListener("DOMContentLoaded", () => {
  renderRentals();
  renderBrandFilters();
  renderVehicles();
  renderReviews();
  renderContact();
  renderMap();
  renderGlobal();
  initNav();
  initWaLauncher();
  initWaChoiceModal();
  initReveal();
});
