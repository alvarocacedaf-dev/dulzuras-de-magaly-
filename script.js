// ===============================
// CONFIGURACION EDITABLE
// Cambia aqui tus precios reales.
// ===============================

const WHATSAPP_NUMBER = "51942666255"; // Formato Peru: 51 + celular. Ejemplo: 51987654321

const cakeThemes = [
  { name: "Infantil / para niños", extra: 10 },
  { name: "Adultos / elegante", extra: 20 },
  { name: "Bodas", extra: 45 },
  { name: "Bautizos", extra: 35 },
  { name: "Cumpleaños", extra: 10 },
  { name: "Baby shower", extra: 35 },
  { name: "Quinceañero", extra: 40 },
  { name: "Aniversario", extra: 30 },
  { name: "Graduación", extra: 30 },
  { name: "Primera comunión", extra: 35 },
  { name: "Corporativo / empresa", extra: 40 },
  { name: "San Valentín", extra: 25 },
  { name: "Navidad", extra: 30 },
  { name: "Halloween", extra: 30 },
  { name: "Personaje o serie", extra: 40 },
  { name: "Minimalista", extra: 0 },
  { name: "Personalizada especial", extra: 60 }
];

const cakeServings = [
  { people: "8 personas", price: 80 },
  { people: "12 personas", price: 110 },
  { people: "15 personas", price: 140 },
  { people: "20 personas", price: 180 },
  { people: "30 personas", price: 230 },
  { people: "40 personas", price: 290 },
  { people: "50 personas", price: 360 },
  { people: "70 personas", price: 500 },
  { people: "100 personas", price: 700 }
];

const cakeFlavors = [
  "Chocolate",
  "Vainilla",
  "Red velvet",
  "Tres leches",
  "Moka",
  "Lúcuma",
  "Fresa",
  "Maracuyá",
  "Oreo",
  "Manjar",
  "Frutos rojos",
  "Marmoleado",
  "Naranja",
  "Zanahoria",
  "Sabor suave a consultar",
  "Otro sabor a consultar"
];

const cakeFillings = [
  { name: "Manjar blanco", extra: 0 },
  { name: "Fudge", extra: 10 },
  { name: "Ganache de chocolate", extra: 18 },
  { name: "Crema chantilly", extra: 8 },
  { name: "Fresa", extra: 15 },
  { name: "Maracuyá", extra: 18 },
  { name: "Oreo", extra: 15 },
  { name: "Frutos rojos", extra: 22 },
  { name: "Moka", extra: 18 },
  { name: "Frutas", extra: 18 },
  { name: "Nutella", extra: 28 },
  { name: "Personalizado", extra: 25 }
];

const decorationLevels = [
  { name: "Solo decorada bonito", extra: 0 },
  { name: "Con nombre", extra: 10 },
  { name: "Con topper", extra: 18 },
  { name: "Con foto comestible", extra: 30 },
  { name: "Con flores", extra: 35 },
  { name: "Con drip", extra: 30 },
  { name: "Con luces", extra: 35 },
  { name: "Con detalles dorados", extra: 40 },
  { name: "Con figura", extra: 50 },
  { name: "Temática personalizada", extra: 60 },
  { name: "Decoración 3D / especial", extra: 100 }
];

const cakeShapes = [
  { name: "Redonda clásica", extra: 0 },
  { name: "Rectangular", extra: 10 },
  { name: "Alta", extra: 25 },
  { name: "Dos pisos", extra: 100 },
  { name: "Tipo vintage", extra: 45 },
  { name: "Otro:", extra: 0, custom: true }
];

const desserts = [
  { name: "Cupcake decorado", price: 8 },
  { name: "6 cupcakes con diseño", price: 50 },
  { name: "Docena de cupcakes personalizados", price: 85 },
  { name: "Brownie", price: 5 },
  { name: "Alfajor", price: 4 },
  { name: "Mini cheesecake", price: 7 },
  { name: "Cake pop", price: 6 },
  { name: "Galleta personalizada", price: 6 },
  { name: "Docena de galletas personalizadas", price: 70 },
  { name: "Vaso tres leches", price: 7 },
  { name: "Suspiro a la limeña", price: 8 },
  { name: "Pionono por tajada", price: 5 },
  { name: "Mini pie de limón", price: 7 },
  { name: "Pie de limón entero", price: 80 },
  { name: "Pie de manzana casero", price: 60 },
  { name: "Crema volteada", price: 70 },
  { name: "Tartaleta de fresa", price: 80 },
  { name: "Tortas en cajita x 100", price: 260 }
];

const buffetOptions = [
  { name: "Solo bocaditos dulces", pricePerPerson: 12 },
  { name: "Solo bocaditos salados", pricePerPerson: 14 },
  { name: "Dulce + salado básico", pricePerPerson: 22 },
  { name: "Buffet completo", pricePerPerson: 35 },
  { name: "Mesa dulce temática", pricePerPerson: 28 },
  { name: "Buffet infantil", pricePerPerson: 25 },
  { name: "Buffet para boda / evento formal", pricePerPerson: 45 }
];
const deliveryPrice = 15;

// ===============================
// LOGICA DE LA PAGINA
// ===============================

const state = {
  dessertsCart: []
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const formatMoney = (amount) => `S/ ${Number(amount).toFixed(2)}`;

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fillSelect(select, options, labelKey, priceKey) {
  select.innerHTML = options
    .map((item, index) => {
      const label = typeof item === "string" ? item : item[labelKey];
      const price = priceKey && item[priceKey] ? ` (+${formatMoney(item[priceKey])})` : "";
      return `<option value="${index}">${escapeHTML(label + price)}</option>`;
    })
    .join("");
}

function initSelects() {
  fillSelect($("#themeSelect"), cakeThemes, "name", "extra");
  fillSelect($("#servingsSelect"), cakeServings, "people", "price");
  fillSelect($("#flavorSelect"), cakeFlavors);
  fillSelect($("#fillingSelect"), cakeFillings, "name", "extra");
  fillSelect($("#decorationSelect"), decorationLevels, "name", "extra");
  fillSelect($("#shapeSelect"), cakeShapes, "name", "extra");
  fillSelect($("#dessertSelect"), desserts, "name", "price");
  fillSelect($("#buffetSelect"), buffetOptions, "name", "pricePerPerson");
}

function getCakeData() {
  const includeCake = $("#includeCakeCheck").checked;
  const theme = cakeThemes[$("#themeSelect").value];
  const serving = cakeServings[$("#servingsSelect").value];
  const flavor = cakeFlavors[$("#flavorSelect").value];
  const filling = cakeFillings[$("#fillingSelect").value];
  const decoration = decorationLevels[$("#decorationSelect").value];
  const shape = cakeShapes[$("#shapeSelect").value];
  const customShape = shape.custom ? $("#customShapeInput").value.trim() : "";
  const shapeName = customShape ? `Otro: ${customShape}` : shape.name;
  const delivery = includeCake && $("#deliveryCheck").checked ? deliveryPrice : 0;
  const subtotal = serving.price + theme.extra + filling.extra + decoration.extra + shape.extra + delivery;

  return {
    includeCake,
    clientName: $("#clientName").value.trim(),
    clientPhone: $("#clientPhone").value.trim(),
    eventDate: $("#eventDate").value,
    theme,
    serving,
    flavor,
    filling,
    decoration,
    shape,
    shapeName,
    customShape,
    cakeMessage: $("#cakeMessage").value.trim(),
    delivery,
    notes: $("#cakeNotes").value.trim(),
    total: includeCake ? subtotal : 0
  };
}

function renderBreakdown(target, rows) {
  target.innerHTML = rows
    .map((row) => `<div><span>${escapeHTML(row.label)}</span><strong>${escapeHTML(row.value)}</strong></div>`)
    .join("");
}

function renderCakeQuote() {
  const data = getCakeData();
  $("#cakeTotal").textContent = formatMoney(data.total);

  if (!data.includeCake) {
    renderBreakdown($("#cakeBreakdown"), [
      { label: "Torta personalizada", value: "No incluida" }
    ]);
    renderOrderSummary();
    return;
  }

  renderBreakdown($("#cakeBreakdown"), [
    { label: `Tamano: ${data.serving.people}`, value: formatMoney(data.serving.price) },
    { label: `Temática: ${data.theme.name}`, value: formatMoney(data.theme.extra) },
    { label: `Relleno: ${data.filling.name}`, value: formatMoney(data.filling.extra) },
    { label: data.decoration.name, value: formatMoney(data.decoration.extra) },
    { label: `Forma: ${data.shapeName}`, value: formatMoney(data.shape.extra) },
    { label: "Delivery", value: formatMoney(data.delivery) }
  ]);
  renderOrderSummary();
}

function addDessert() {
  const selected = desserts[$("#dessertSelect").value];
  const qty = Math.max(1, Number($("#dessertQty").value || 1));
  state.dessertsCart.push({ ...selected, qty });
  $("#dessertQty").value = 1;
  renderDesserts();
}

function removeDessert(index) {
  state.dessertsCart.splice(index, 1);
  renderDesserts();
}

function getDessertTotal() {
  return state.dessertsCart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderDesserts() {
  const list = $("#dessertList");

  if (state.dessertsCart.length === 0) {
    list.className = "item-list empty";
    list.textContent = "Aun no agregaste postres.";
  } else {
    list.className = "item-list";
    list.innerHTML = state.dessertsCart
      .map((item, index) => `
        <div class="item-row">
          <span>${escapeHTML(`${item.qty} x ${item.name}`)}</span>
          <strong>${escapeHTML(formatMoney(item.price * item.qty))}</strong>
          <button type="button" data-remove-dessert="${index}">Quitar</button>
        </div>
      `)
      .join("");
  }

  $("#dessertTotal").textContent = formatMoney(getDessertTotal());
  renderOrderSummary();
}

function getBuffetData() {
  const buffet = buffetOptions[$("#buffetSelect").value];
  const people = Math.max(0, Number($("#buffetPeople").value || 0));
  const total = buffet.pricePerPerson * people;

  return {
    buffet,
    people,
    notes: $("#buffetNotes").value.trim(),
    total
  };
}

function renderBuffetQuote() {
  const data = getBuffetData();
  $("#buffetTotal").textContent = formatMoney(data.total);
  renderBreakdown($("#buffetBreakdown"), [
    { label: data.buffet.name, value: `${formatMoney(data.buffet.pricePerPerson)} por persona` },
    { label: "Personas", value: String(data.people) }
  ]);
  renderOrderSummary();
}

function getFinalTotal() {
  return getCakeData().total + getDessertTotal() + getBuffetData().total;
}

function renderOrderSummary() {
  const cake = getCakeData();
  const buffet = getBuffetData();
  const dessertsTotal = getDessertTotal();
  const sections = [];

  sections.push(`
    <section>
      <h4>Datos del cliente</h4>
      <div>Nombre: ${escapeHTML(cake.clientName || "No indicado")}</div>
      <div>Telefono: ${escapeHTML(cake.clientPhone || "No indicado")}</div>
      <div>Fecha tentativa: ${escapeHTML(cake.eventDate || "No indicada")}</div>
    </section>
  `);

  if (cake.includeCake) {
    sections.push(`
      <section>
        <h4>Torta personalizada</h4>
        <div>Temática: ${escapeHTML(cake.theme.name)}</div>
        <div>Tamano: ${escapeHTML(cake.serving.people)}</div>
        <div>Sabor: ${escapeHTML(cake.flavor)}</div>
        <div>Relleno: ${escapeHTML(cake.filling.name)}</div>
        <div>Decoración: ${escapeHTML(cake.decoration.name)}</div>
        <div>Forma/estilo: ${escapeHTML(cake.shapeName)}</div>
        <div>Texto en la torta: ${escapeHTML(cake.cakeMessage || "Sin texto indicado")}</div>
        <div>Delivery: ${cake.delivery > 0 ? "Sí" : "No"}</div>
        <div>Detalles: ${escapeHTML(cake.notes || "Sin detalles adicionales")}</div>
        <strong>Subtotal torta: ${escapeHTML(formatMoney(cake.total))}</strong>
      </section>
    `);
  }

  if (state.dessertsCart.length) {
    const dessertText = state.dessertsCart
      .map((item) => `${escapeHTML(`${item.qty} x ${item.name}`)} = ${escapeHTML(formatMoney(item.price * item.qty))}`)
      .join("<br>");

    sections.push(`
      <section>
        <h4>Postres</h4>
        <div>${dessertText}</div>
        <strong>Subtotal postres: ${escapeHTML(formatMoney(dessertsTotal))}</strong>
      </section>
    `);
  }

  if (buffet.people > 0) {
    sections.push(`
      <section>
        <h4>Buffet</h4>
        <div>Tipo: ${escapeHTML(buffet.buffet.name)}</div>
        <div>Personas: ${escapeHTML(buffet.people)}</div>
        <div>Comentarios: ${escapeHTML(buffet.notes || "Sin comentarios")}</div>
        <strong>Subtotal buffet: ${escapeHTML(formatMoney(buffet.total))}</strong>
      </section>
    `);
  }

  if (!cake.includeCake && !state.dessertsCart.length && buffet.people === 0) {
    sections.push(`
      <section>
        <h4>Pedido vacio</h4>
        <div>Incluye una torta, agrega postres o indica personas para buffet.</div>
      </section>
    `);
  }

  $("#orderSummary").innerHTML = sections.join("");
  $("#finalTotal").textContent = formatMoney(getFinalTotal());
  updateWhatsappLink(cake, buffet, dessertsTotal, getFinalTotal());
}

function buildWhatsappMessage(cake, buffet, dessertsTotal, finalTotal) {
  const blocks = [
    "Hola Dulzuras de Magaly, quiero cotizar este pedido:",
    "",
    "DATOS DEL CLIENTE",
    `Nombre: ${cake.clientName || "No indicado"}`,
    `Telefono: ${cake.clientPhone || "No indicado"}`,
    `Fecha tentativa: ${cake.eventDate || "No indicada"}`
  ];

  if (cake.includeCake) {
    blocks.push(
      "",
      "TORTA",
      `Temática: ${cake.theme.name}`,
      `Tamano: ${cake.serving.people}`,
      `Sabor: ${cake.flavor}`,
      `Relleno: ${cake.filling.name}`,
      `Decoración: ${cake.decoration.name}`,
      `Forma/estilo: ${cake.shapeName}`,
      `Texto en la torta: ${cake.cakeMessage || "Sin texto indicado"}`,
      `Delivery: ${cake.delivery > 0 ? "Sí" : "No"}`,
      `Detalles: ${cake.notes || "Sin detalles"}`,
      `Subtotal torta: ${formatMoney(cake.total)}`
    );
  }

  if (state.dessertsCart.length) {
    blocks.push(
      "",
      "POSTRES",
      ...state.dessertsCart.map((item) => `- ${item.qty} x ${item.name}: ${formatMoney(item.price * item.qty)}`),
      `Subtotal postres: ${formatMoney(dessertsTotal)}`
    );
  }

  if (buffet.people > 0) {
    blocks.push(
      "",
      "BUFFET",
      `Tipo: ${buffet.buffet.name}`,
      `Personas: ${buffet.people}`,
      `Comentarios: ${buffet.notes || "Sin comentarios"}`,
      `Subtotal buffet: ${formatMoney(buffet.total)}`
    );
  }

  blocks.push("", `TOTAL REFERENCIAL: ${formatMoney(finalTotal)}`);
  return blocks.join("\n");
}

function updateWhatsappLink(cake, buffet, dessertsTotal, finalTotal) {
  const message = buildWhatsappMessage(cake, buffet, dessertsTotal, finalTotal);
  $("#whatsappBtn").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function validateOrder() {
  const cake = getCakeData();
  const buffet = getBuffetData();
  const phoneDigits = cake.clientPhone.replace(/\D/g, "");
  const errors = [];
  const hasProduct = cake.includeCake || state.dessertsCart.length > 0 || buffet.people > 0;

  $("#nameError").textContent = "";
  $("#phoneError").textContent = "";
  $("#clientName").removeAttribute("aria-invalid");
  $("#clientPhone").removeAttribute("aria-invalid");

  if (!cake.clientName) {
    errors.push("Ingresa el nombre del cliente.");
    $("#nameError").textContent = "Nombre obligatorio.";
    $("#clientName").setAttribute("aria-invalid", "true");
  }

  if (phoneDigits.length < 9) {
    errors.push("Ingresa un telefono valido.");
    $("#phoneError").textContent = "Telefono obligatorio.";
    $("#clientPhone").setAttribute("aria-invalid", "true");
  }

  if (!hasProduct) {
    errors.push("Agrega al menos una torta, postre o buffet.");
  }

  return errors;
}

function showNotice(messages) {
  const notice = $("#formNotice");
  notice.hidden = messages.length === 0;
  notice.innerHTML = messages.map((message) => `<div>${escapeHTML(message)}</div>`).join("");
}

function handleWhatsappClick(event) {
  const errors = validateOrder();
  showNotice(errors);

  if (errors.length) {
    event.preventDefault();
    $("#pedido").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function clearOrder() {
  $("#clientName").value = "";
  $("#clientPhone").value = "";
  $("#cakeMessage").value = "";
  $("#customShapeInput").value = "";
  $("#cakeNotes").value = "";
  $("#buffetNotes").value = "";
  $("#buffetPeople").value = 0;
  $("#eventDate").value = "";
  $("#deliveryCheck").checked = false;
  $("#includeCakeCheck").checked = true;
  $("#themeSelect").selectedIndex = 0;
  $("#servingsSelect").selectedIndex = 0;
  $("#flavorSelect").selectedIndex = 0;
  $("#fillingSelect").selectedIndex = 0;
  $("#decorationSelect").selectedIndex = 0;
  $("#shapeSelect").selectedIndex = 0;
  toggleCustomShape();
  $("#buffetSelect").selectedIndex = 0;
  state.dessertsCart = [];
  showNotice([]);
  clearReferenceResults();
  clearAiCakeResult();
  renderCakeQuote();
  renderBuffetQuote();
  renderDesserts();
}

function initPhotoFallbacks() {
  $$("[data-photo]").forEach((image) => {
    const markLoaded = () => image.closest(".photo-frame").classList.add("has-photo");
    const markMissing = () => {
      image.classList.add("is-missing");
      image.closest(".photo-frame").classList.remove("has-photo");
    };

    image.addEventListener("load", markLoaded);
    image.addEventListener("error", markMissing);

    if (image.complete && image.naturalWidth > 0) {
      markLoaded();
    } else if (image.complete && image.naturalWidth === 0) {
      markMissing();
    }
  });
}

function renderPortfolio(filter = "todos") {
  const grid = $("#portfolioGrid");
  const portfolioItems = typeof cakePortfolio === "undefined" ? [] : cakePortfolio;
  if (!grid || !Array.isArray(portfolioItems)) return;

  const items = portfolioItems.filter((item) => filter === "todos" || item.category === filter);
  grid.innerHTML = items.map((item) => {
    const tags = (item.tags || []).slice(0, 3).map((tag) => `<span>${tag}</span>`).join("");

    return `
      <article class="portfolio-card">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="portfolio-card-body">
          <p>${item.category}</p>
          <h3>${item.title}</h3>
          <div class="portfolio-tags">${tags}</div>
        </div>
      </article>
    `;
  }).join("");
}

function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function makeSearchText(item) {
  return normalizeText([
    item.title,
    item.category,
    item.theme,
    item.shape,
    Array.isArray(item.decoration) ? item.decoration.join(" ") : item.decoration,
    Array.isArray(item.colors) ? item.colors.join(" ") : item.colors,
    Array.isArray(item.tags) ? item.tags.join(" ") : item.tags
  ].join(" "));
}

function addCriteriaGroup(groups, label, values) {
  const terms = Array.from(new Set(values.map(normalizeText).filter(Boolean)));
  if (terms.length) groups.push({ label, terms });
}

function getReferenceCriteria(cake) {
  const groups = [];
  const themeName = cake.theme?.name || "";
  const shapeName = cake.shapeName || "";
  const decorationName = cake.decoration?.name || "";
  const notes = normalizeText(`${cake.notes} ${cake.cakeMessage}`);

  addCriteriaGroup(groups, "Temática", [themeName, ...getThemeSynonyms(themeName)]);
  addCriteriaGroup(groups, "Forma", [shapeName]);

  if (!normalizeText(decorationName).includes("solo decorada")) {
    addCriteriaGroup(groups, "Decoración", [decorationName, ...getDecorationSynonyms(decorationName)]);
  }

  const importantWords = notes
    .split(" ")
    .filter((word) => word.length >= 4 && !["para", "torta", "color", "estilo", "feliz", "cumpleanos"].includes(word));

  importantWords.forEach((word) => {
    addCriteriaGroup(groups, `Detalle: ${word}`, [word]);
  });

  return groups;
}

function getThemeSynonyms(themeName) {
  const theme = normalizeText(themeName);
  if (theme.includes("infantil")) return ["infantil", "niños", "cumpleaños", "personajes"];
  if (theme.includes("adultos")) return ["adulto", "elegante"];
  if (theme.includes("boda")) return ["boda", "novios", "elegante"];
  if (theme.includes("bautizo")) return ["bautizo", "baby shower", "bebé"];
  if (theme.includes("cumple")) return ["cumpleaños", "happy birthday"];
  if (theme.includes("graduacion")) return ["graduación", "birrete", "diploma"];
  if (theme.includes("primera comunion")) return ["primera comunión", "cruz", "religioso"];
  if (theme.includes("personaje")) return ["personaje", "serie", "topper", "infantil"];
  if (theme.includes("corporativo")) return ["empresa", "corporativo", "logo"];
  return [];
}

function getDecorationSynonyms(decorationName) {
  const decoration = normalizeText(decorationName);
  const synonyms = [];
  if (decoration.includes("nombre")) synonyms.push("nombre");
  if (decoration.includes("topper")) synonyms.push("topper");
  if (decoration.includes("foto")) synonyms.push("foto comestible", "fototorta");
  if (decoration.includes("flores")) synonyms.push("flores", "floral", "rosas");
  if (decoration.includes("drip")) synonyms.push("drip");
  if (decoration.includes("luces")) synonyms.push("luces");
  if (decoration.includes("dorado")) synonyms.push("dorado", "detalles dorados");
  if (decoration.includes("figura")) synonyms.push("figura", "3d");
  if (decoration.includes("tematica")) synonyms.push("temática personalizada", "personaje");
  if (decoration.includes("3d") || decoration.includes("especial")) synonyms.push("3d", "figura", "especial");
  return synonyms;
}

function findReferenceMatches() {
  const cake = getCakeData();
  const portfolioItems = typeof cakePortfolio === "undefined" ? [] : cakePortfolio;
  const cakes = portfolioItems.filter((item) => item.category === "tortas");
  const criteria = getReferenceCriteria(cake);

  return cakes
    .map((item) => {
      const searchText = makeSearchText(item);
      const matched = criteria.filter((group) => group.terms.some((term) => searchText.includes(term)));
      const score = criteria.length ? matched.length / criteria.length : 0;
      return { item, score, matched };
    })
    .filter((match) => match.score >= 0.8)
    .sort((a, b) => b.score - a.score || b.matched.length - a.matched.length);
}

function renderReferenceSearch() {
  const resultBox = $("#referenceResults");
  const matches = findReferenceMatches();

  if (!matches.length) {
    resultBox.innerHTML = `
      <div class="reference-message">
        No se encontró una torta hecha con esas características aún.
      </div>
    `;
    return;
  }

  resultBox.innerHTML = `
    <div class="reference-message">
      Encontramos ${matches.length} referencia${matches.length === 1 ? "" : "s"} parecida${matches.length === 1 ? "" : "s"} a lo que buscas.
    </div>
    <div class="reference-grid">
      ${matches.map(({ item, score, matched }) => `
        <article class="reference-card">
          <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy">
          <div>
            <p>${Math.round(score * 100)}% similar</p>
            <h4>${escapeHTML(item.title)}</h4>
            <span>${escapeHTML(matched.map((group) => group.label).join(" · "))}</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function clearReferenceResults() {
  const resultBox = $("#referenceResults");
  if (resultBox) resultBox.innerHTML = "";
}

function buildCakeAiPrompt(cake) {
  const details = [
    `Temática: ${cake.theme.name}`,
    `Tamaño: ${cake.serving.people}`,
    `Sabor: ${cake.flavor}`,
    `Relleno: ${cake.filling.name}`,
    `Decoración: ${cake.decoration.name}`,
    `Forma y estilo: ${cake.shapeName}`,
    cake.cakeMessage ? `Texto solicitado: ${cake.cakeMessage}` : "",
    cake.notes ? `Detalles adicionales: ${cake.notes}` : ""
  ].filter(Boolean);

  return [
    "Fotografía realista de una torta personalizada hecha por una pastelería artesanal peruana.",
    "Debe verse como una torta real, comestible y posible de preparar, no como una ilustración exagerada.",
    "Usa una mesa o caja de repostería sencilla, luz natural suave y presentación limpia.",
    "Evita elementos imposibles, exceso de objetos, texto ilegible y decoraciones fuera de escala.",
    "Características del pedido:",
    details.join("\n")
  ].join("\n");
}

function setAiCakeResult(html, className = "") {
  const resultBox = $("#aiCakeResult");
  if (!resultBox) return;
  resultBox.className = `ai-cake-result ${className}`.trim();
  resultBox.innerHTML = html;
}

function clearAiCakeResult() {
  const resultBox = $("#aiCakeResult");
  if (!resultBox) return;
  resultBox.className = "ai-cake-result";
  resultBox.innerHTML = "";
}

async function generateCakeWithAi() {
  const button = $("#generateCakeAiBtn");
  const cake = getCakeData();

  if (!cake.includeCake) {
    setAiCakeResult(`
      <div class="ai-cake-message">
        Activa "Incluir torta personalizada en el pedido" para generar una referencia.
      </div>
    `);
    return;
  }

  const prompt = buildCakeAiPrompt(cake);
  button.disabled = true;
  setAiCakeResult(`
    <div class="ai-cake-message">
      Generando una referencia visual de tu torta...
    </div>
  `, "is-loading");

  try {
    const response = await fetch("/api/generate-cake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        cake: {
          theme: cake.theme.name,
          serving: cake.serving.people,
          flavor: cake.flavor,
          filling: cake.filling.name,
          decoration: cake.decoration.name,
          shapeName: cake.shapeName,
          cakeMessage: cake.cakeMessage,
          notes: cake.notes
        }
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.error) {
      throw new Error(data.error || "No se pudo generar la imagen en este momento.");
    }

    if (!data.image) {
      throw new Error("La IA no devolvió una imagen. Intenta otra vez.");
    }

    const imageSrc = data.image.startsWith("data:")
      ? data.image
      : `data:${data.mimeType || "image/png"};base64,${data.image}`;

    setAiCakeResult(`
      <article class="ai-generated-card">
        <img src="${imageSrc}" alt="Referencia generada por IA para la torta personalizada">
        <div>
          <h4>Referencia generada por IA</h4>
          <p>Esta imagen es solo una idea visual. El diseño, colores, precio y detalles finales se confirman por WhatsApp.</p>
        </div>
      </article>
    `);
  } catch (error) {
    setAiCakeResult(`
      <div class="ai-cake-message ai-error">
        ${escapeHTML(error.message)}
      </div>
    `);
  } finally {
    button.disabled = false;
  }
}

function toggleCustomShape(shouldFocus = false) {
  const selectedShape = cakeShapes[$("#shapeSelect").value];
  const shouldShow = Boolean(selectedShape?.custom);
  $("#customShapeLabel").hidden = !shouldShow;

  if (!shouldShow) {
    $("#customShapeInput").value = "";
  } else if (shouldFocus) {
    $("#customShapeInput").focus();
  }
}

function addEvents() {
  const watchedInputs = [
    "#includeCakeCheck",
    "#clientName",
    "#clientPhone",
    "#eventDate",
    "#themeSelect",
    "#servingsSelect",
    "#flavorSelect",
    "#fillingSelect",
    "#decorationSelect",
    "#shapeSelect",
    "#customShapeInput",
    "#cakeMessage",
    "#cakeNotes",
    "#deliveryCheck"
  ];

  watchedInputs.forEach((selector) => {
    const element = $(selector);
    element.addEventListener("input", renderCakeQuote);
    element.addEventListener("change", renderCakeQuote);
  });

  $("#shapeSelect").addEventListener("change", () => {
    toggleCustomShape(true);
  });

  $("#buffetSelect").addEventListener("change", renderBuffetQuote);
  $("#buffetPeople").addEventListener("input", renderBuffetQuote);
  $("#buffetNotes").addEventListener("input", renderBuffetQuote);
  $("#addDessertBtn").addEventListener("click", addDessert);
  $("#findReferenceBtn").addEventListener("click", renderReferenceSearch);
  $("#generateCakeAiBtn").addEventListener("click", generateCakeWithAi);
  $("#clearBtn").addEventListener("click", clearOrder);
  $("#whatsappBtn").addEventListener("click", handleWhatsappClick);
  $("#floatingWhatsapp").addEventListener("click", (event) => {
    event.preventDefault();
    $("#pedido").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("#dessertList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-dessert]");
    if (!button) return;
    removeDessert(Number(button.dataset.removeDessert));
  });

  $("#menuBtn").addEventListener("click", () => {
    const isOpen = $("#nav").classList.toggle("open");
    $("#menuBtn").setAttribute("aria-expanded", String(isOpen));
  });

  $$(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      $("#nav").classList.remove("open");
      $("#menuBtn").setAttribute("aria-expanded", "false");
    });
  });

  $$("[data-portfolio-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      $$("[data-portfolio-filter]").forEach((filterButton) => filterButton.classList.remove("active"));
      button.classList.add("active");
      renderPortfolio(button.dataset.portfolioFilter);
    });
  });
}

function init() {
  $("#year").textContent = new Date().getFullYear();
  initPhotoFallbacks();
  initSelects();
  addEvents();
  renderCakeQuote();
  renderBuffetQuote();
  renderDesserts();
  renderPortfolio();
}

init();

