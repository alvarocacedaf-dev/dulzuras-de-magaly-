function inspirationItem(id, title, image, theme, shape, decoration, colors, tags) {
  return {
    id,
    title,
    image: `assets/inspiracion/${image}`,
    category: "tortas",
    theme,
    shape,
    decoration,
    colors,
    tags
  };
}

const cakeInspiration = [
  inspirationItem(
    "inspiracion-001",
    "Torta 50 años blanca negra y dorada",
    "torta-50-anos-blanca-negra-y-dorada.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con detalles dorados"],
    ["blanco", "negro", "dorado"],
    ["50", "años", "blanca", "negra", "y", "dorada", "adulto", "elegante", "cumpleaños", "redonda clásica", "dorado", "detalles dorados", "blanco", "negro"]
  ),
  inspirationItem(
    "inspiracion-002",
    "Torta Alianza Lima con cerveza vertida",
    "torta-alianza-lima-con-cerveza-vertida.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["azul", "blanco"],
    ["alianza", "lima", "cerveza", "vertida", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-003",
    "Torta Alianza Lima con jarra de cerveza",
    "torta-alianza-lima-con-jarra-de-cerveza.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["azul", "blanco"],
    ["alianza", "lima", "jarra", "cerveza", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-004",
    "Torta alta azul dorada con corona variante 1",
    "torta-alta-azul-dorada-con-corona-variante-1.jpg",
    "Adultos / elegante",
    "Alta",
    ["Con detalles dorados", "Con topper"],
    ["azul", "dorado"],
    ["alta", "azul", "dorada", "corona", "1", "adulto", "elegante", "cumpleaños", "dorado", "detalles dorados", "topper"]
  ),
  inspirationItem(
    "inspiracion-005",
    "Torta alta azul dorada con corona variante 2",
    "torta-alta-azul-dorada-con-corona-variante-2.jpg",
    "Adultos / elegante",
    "Alta",
    ["Con detalles dorados", "Con topper"],
    ["azul", "dorado"],
    ["alta", "azul", "dorada", "corona", "2", "adulto", "elegante", "cumpleaños", "dorado", "detalles dorados", "topper"]
  ),
  inspirationItem(
    "inspiracion-006",
    "Torta alta azul dorada con corona",
    "torta-alta-azul-dorada-con-corona.jpeg",
    "Adultos / elegante",
    "Alta",
    ["Con detalles dorados", "Con topper"],
    ["azul", "dorado"],
    ["alta", "azul", "dorada", "corona", "adulto", "elegante", "cumpleaños", "dorado", "detalles dorados", "topper"]
  ),
  inspirationItem(
    "inspiracion-007",
    "Torta alta azul dorada para 40 años variante",
    "torta-alta-azul-dorada-para-40-anos-variante.jpg",
    "Adultos / elegante",
    "Alta",
    ["Con detalles dorados"],
    ["azul", "dorado"],
    ["alta", "azul", "dorada", "40", "años", "adulto", "elegante", "cumpleaños", "dorado", "detalles dorados"]
  ),
  inspirationItem(
    "inspiracion-008",
    "Torta alta azul dorada para 40 años",
    "torta-alta-azul-dorada-para-40-anos.jpg",
    "Adultos / elegante",
    "Alta",
    ["Con detalles dorados"],
    ["azul", "dorado"],
    ["alta", "azul", "dorada", "40", "años", "adulto", "elegante", "cumpleaños", "dorado", "detalles dorados"]
  ),
  inspirationItem(
    "inspiracion-009",
    "Torta alta azul negra y dorada",
    "torta-alta-azul-negra-y-dorada.jpeg",
    "Adultos / elegante",
    "Alta",
    ["Con detalles dorados"],
    ["negro", "azul", "dorado"],
    ["alta", "azul", "negra", "y", "dorada", "adulto", "elegante", "cumpleaños", "dorado", "detalles dorados", "negro"]
  ),
  inspirationItem(
    "inspiracion-010",
    "Torta amarilla con macarons y chocolates",
    "torta-amarilla-con-macarons-y-chocolates.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["amarillo", "chocolate", "marrón"],
    ["amarilla", "macarons", "y", "chocolates", "adulto", "elegante", "cumpleaños", "redonda clásica", "amarillo", "chocolate", "marrón"]
  ),
  inspirationItem(
    "inspiracion-011",
    "Torta aniversario 25 lila con rosas",
    "torta-aniversario-25-lila-con-rosas.jpg",
    "Aniversario",
    "Redonda clásica",
    ["Con flores"],
    ["lila"],
    ["aniversario", "25", "lila", "rosas", "romántica", "celebración", "redonda clásica", "flores", "floral"]
  ),
  inspirationItem(
    "inspiracion-012",
    "Torta azul minimalista de cumpleaños",
    "torta-azul-minimalista-de-cumpleanos.jpg",
    "Minimalista",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["azul"],
    ["azul", "minimalista", "cumpleaños", "elegante", "simple", "redonda clásica"]
  ),
  inspirationItem(
    "inspiracion-013",
    "Torta azul noche con estrellas",
    "torta-azul-noche-con-estrellas.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con topper"],
    ["azul"],
    ["azul", "noche", "estrellas", "adulto", "elegante", "cumpleaños", "redonda clásica", "topper"]
  ),
  inspirationItem(
    "inspiracion-014",
    "Torta bautizo con osito y globos",
    "torta-bautizo-con-osito-y-globos.jpg",
    "Bautizos",
    "Redonda clásica",
    ["Con figura"],
    ["multicolor"],
    ["bautizo", "osito", "y", "globos", "bebé", "religioso", "redonda clásica", "figura", "3d", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-015",
    "Torta blanca con espiral y confites",
    "torta-blanca-con-espiral-y-confites.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco"],
    ["blanca", "espiral", "y", "confites", "adulto", "elegante", "cumpleaños", "redonda clásica", "blanco"]
  ),
  inspirationItem(
    "inspiracion-016",
    "Torta blanca con flores coloridas",
    "torta-blanca-con-flores-coloridas.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores"],
    ["blanco"],
    ["blanca", "flores", "coloridas", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "blanco"]
  ),
  inspirationItem(
    "inspiracion-017",
    "Torta blanca con frutos rojos y borde rosado",
    "torta-blanca-con-frutos-rojos-y-borde-rosado.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco", "rosado", "rojo"],
    ["blanca", "frutos", "rojos", "y", "borde", "rosado", "adulto", "elegante", "cumpleaños", "redonda clásica", "blanco", "rojo"]
  ),
  inspirationItem(
    "inspiracion-018",
    "Torta blanca con goteo negro y chocolates",
    "torta-blanca-con-goteo-negro-y-chocolates.webp",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con drip"],
    ["blanco", "negro", "chocolate", "marrón"],
    ["blanca", "goteo", "negro", "y", "chocolates", "adulto", "elegante", "cumpleaños", "redonda clásica", "drip", "blanco", "chocolate", "marrón"]
  ),
  inspirationItem(
    "inspiracion-019",
    "Torta blanca con goteo y rosas lilas",
    "torta-blanca-con-goteo-y-rosas-lilas.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con drip"],
    ["blanco", "lila"],
    ["blanca", "goteo", "y", "rosas", "lilas", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "floral", "drip", "blanco", "lila"]
  ),
  inspirationItem(
    "inspiracion-020",
    "Torta blanca con pinceladas azules variante",
    "torta-blanca-con-pinceladas-azules-variante.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco", "azul"],
    ["blanca", "pinceladas", "azules", "adulto", "elegante", "cumpleaños", "redonda clásica", "blanco", "azul"]
  ),
  inspirationItem(
    "inspiracion-021",
    "Torta blanca con pinceladas azules",
    "torta-blanca-con-pinceladas-azules.png",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco", "azul"],
    ["blanca", "pinceladas", "azules", "adulto", "elegante", "cumpleaños", "redonda clásica", "blanco", "azul"]
  ),
  inspirationItem(
    "inspiracion-022",
    "Torta blanca con pinceladas rosadas e iniciales",
    "torta-blanca-con-pinceladas-rosadas-e-iniciales.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con nombre"],
    ["blanco", "rosado"],
    ["blanca", "pinceladas", "rosadas", "e", "iniciales", "adulto", "elegante", "cumpleaños", "redonda clásica", "nombre", "frase", "blanco", "rosado"]
  ),
  inspirationItem(
    "inspiracion-023",
    "Torta blanca con rosas celestes y mensaje",
    "torta-blanca-con-rosas-celestes-y-mensaje.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con nombre"],
    ["blanco", "celeste"],
    ["blanca", "rosas", "celestes", "y", "mensaje", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "floral", "nombre", "frase", "blanco", "celeste"]
  ),
  inspirationItem(
    "inspiracion-024",
    "Torta blanca con rosas coral para 61 años",
    "torta-blanca-con-rosas-coral-para-61-anos.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores"],
    ["blanco"],
    ["blanca", "rosas", "coral", "61", "años", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "floral", "blanco"]
  ),
  inspirationItem(
    "inspiracion-025",
    "Torta blanca minimalista con margaritas",
    "torta-blanca-minimalista-con-margaritas.jpg",
    "Minimalista",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco"],
    ["blanca", "minimalista", "margaritas", "elegante", "simple", "redonda clásica", "blanco"]
  ),
  inspirationItem(
    "inspiracion-026",
    "Torta blanca pequeña con dibujo",
    "torta-blanca-pequena-con-dibujo.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco"],
    ["blanca", "pequeña", "dibujo", "adulto", "elegante", "cumpleaños", "redonda clásica", "blanco"]
  ),
  inspirationItem(
    "inspiracion-027",
    "Torta blanca y dorada con flores para 50 años",
    "torta-blanca-y-dorada-con-flores-para-50-anos.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con detalles dorados"],
    ["blanco", "dorado"],
    ["blanca", "y", "dorada", "flores", "50", "años", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "dorado", "detalles dorados", "blanco"]
  ),
  inspirationItem(
    "inspiracion-028",
    "Torta blanca y plateada para 18 años",
    "torta-blanca-y-plateada-para-18-anos.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco"],
    ["blanca", "y", "plateada", "18", "años", "adulto", "elegante", "cumpleaños", "redonda clásica", "blanco"]
  ),
  inspirationItem(
    "inspiracion-029",
    "Torta boda alta con flores y luces",
    "torta-boda-alta-con-flores-y-luces.jpg",
    "Bodas",
    "Alta",
    ["Con flores"],
    ["blanco", "crema"],
    ["boda", "alta", "flores", "y", "luces", "novios", "matrimonio", "elegante", "floral", "rosas", "blanco", "crema"]
  ),
  inspirationItem(
    "inspiracion-030",
    "Torta boda blanca con arreglo floral",
    "torta-boda-blanca-con-arreglo-floral.jpg",
    "Bodas",
    "Redonda clásica",
    ["Con flores"],
    ["blanco"],
    ["boda", "blanca", "arreglo", "floral", "novios", "matrimonio", "elegante", "redonda clásica", "flores", "rosas", "blanco"]
  ),
  inspirationItem(
    "inspiracion-031",
    "Torta boda blanca con flores en jardín",
    "torta-boda-blanca-con-flores-en-jardin.jpg",
    "Bodas",
    "Redonda clásica",
    ["Con flores"],
    ["blanco"],
    ["boda", "blanca", "flores", "en", "jardín", "novios", "matrimonio", "elegante", "redonda clásica", "floral", "rosas", "blanco"]
  ),
  inspirationItem(
    "inspiracion-032",
    "Torta boda blanca con flores y follaje",
    "torta-boda-blanca-con-flores-y-follaje.jpg",
    "Bodas",
    "Redonda clásica",
    ["Con flores"],
    ["blanco"],
    ["boda", "blanca", "flores", "y", "follaje", "novios", "matrimonio", "elegante", "redonda clásica", "floral", "rosas", "blanco"]
  ),
  inspirationItem(
    "inspiracion-033",
    "Torta boda blanca de dos pisos minimalista",
    "torta-boda-blanca-de-dos-pisos-minimalista.jpg",
    "Bodas",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["blanco"],
    ["boda", "blanca", "pisos", "minimalista", "novios", "matrimonio", "elegante", "dos pisos", "blanco"]
  ),
  inspirationItem(
    "inspiracion-034",
    "Torta boda blanca de dos pisos",
    "torta-boda-blanca-de-dos-pisos.jpg",
    "Bodas",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["blanco"],
    ["boda", "blanca", "pisos", "novios", "matrimonio", "elegante", "dos pisos", "blanco"]
  ),
  inspirationItem(
    "inspiracion-035",
    "Torta boda desnuda con frutos rojos",
    "torta-boda-desnuda-con-frutos-rojos.jpg",
    "Bodas",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["rojo"],
    ["boda", "desnuda", "frutos", "rojos", "novios", "matrimonio", "elegante", "redonda clásica", "rojo"]
  ),
  inspirationItem(
    "inspiracion-036",
    "Torta boda dos pisos con iniciales",
    "torta-boda-dos-pisos-con-iniciales.jpg",
    "Bodas",
    "Dos pisos",
    ["Con nombre"],
    ["blanco", "crema"],
    ["boda", "pisos", "iniciales", "novios", "matrimonio", "elegante", "dos pisos", "nombre", "frase", "blanco", "crema"]
  ),
  inspirationItem(
    "inspiracion-037",
    "Torta boda minimalista con flores blancas",
    "torta-boda-minimalista-con-flores-blancas.jpg",
    "Bodas",
    "Redonda clásica",
    ["Con flores"],
    ["blanco"],
    ["boda", "minimalista", "flores", "blancas", "novios", "matrimonio", "elegante", "redonda clásica", "floral", "rosas", "blanco"]
  ),
  inspirationItem(
    "inspiracion-038",
    "Torta boda negra y blanca de dos pisos",
    "torta-boda-negra-y-blanca-de-dos-pisos.jpg",
    "Bodas",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["blanco", "negro"],
    ["boda", "negra", "y", "blanca", "pisos", "novios", "matrimonio", "elegante", "dos pisos", "blanco", "negro"]
  ),
  inspirationItem(
    "inspiracion-039",
    "Torta boda rústica con flores blancas",
    "torta-boda-rustica-con-flores-blancas.jpg",
    "Bodas",
    "Redonda clásica",
    ["Con flores"],
    ["blanco"],
    ["boda", "rústica", "flores", "blancas", "novios", "matrimonio", "elegante", "redonda clásica", "floral", "rosas", "blanco"]
  ),
  inspirationItem(
    "inspiracion-040",
    "Torta boda rústica de dos pisos",
    "torta-boda-rustica-de-dos-pisos.jpg",
    "Bodas",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["blanco", "crema"],
    ["boda", "rústica", "pisos", "novios", "matrimonio", "elegante", "dos pisos", "blanco", "crema"]
  ),
  inspirationItem(
    "inspiracion-041",
    "Torta boda tres pisos con cintas moradas",
    "torta-boda-tres-pisos-con-cintas-moradas.jpg",
    "Bodas",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["morado"],
    ["boda", "pisos", "cintas", "moradas", "novios", "matrimonio", "elegante", "dos pisos", "morado"]
  ),
  inspirationItem(
    "inspiracion-042",
    "Torta boda tres pisos con flores azules",
    "torta-boda-tres-pisos-con-flores-azules.avif",
    "Bodas",
    "Dos pisos",
    ["Con flores"],
    ["azul"],
    ["boda", "pisos", "flores", "azules", "novios", "matrimonio", "elegante", "dos pisos", "floral", "rosas", "azul"]
  ),
  inspirationItem(
    "inspiracion-043",
    "Torta boda tres pisos con frutos rojos",
    "torta-boda-tres-pisos-con-frutos-rojos.jpg",
    "Bodas",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["rojo"],
    ["boda", "pisos", "frutos", "rojos", "novios", "matrimonio", "elegante", "dos pisos", "rojo"]
  ),
  inspirationItem(
    "inspiracion-044",
    "Torta boda tres pisos con rosas",
    "torta-boda-tres-pisos-con-rosas.jpg",
    "Bodas",
    "Dos pisos",
    ["Con flores"],
    ["blanco", "crema"],
    ["boda", "pisos", "rosas", "novios", "matrimonio", "elegante", "dos pisos", "flores", "floral", "blanco", "crema"]
  ),
  inspirationItem(
    "inspiracion-045",
    "Torta caballero con bigote y corbatin",
    "torta-caballero-con-bigote-y-corbatin.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con figura"],
    ["multicolor"],
    ["caballero", "bigote", "y", "corbatin", "adulto", "elegante", "cumpleaños", "redonda clásica", "figura", "3d", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-046",
    "Torta camiseta River Plate",
    "torta-camiseta-river-plate.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada"],
    ["rojo", "blanco"],
    ["camiseta", "river", "plate", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "rojo", "blanco"]
  ),
  inspirationItem(
    "inspiracion-047",
    "Torta camiseta sport boys para luciano",
    "torta-camiseta-sport-boys-para-luciano.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada"],
    ["rosado", "negro"],
    ["camiseta", "sport", "boys", "luciano", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "rosado", "negro"]
  ),
  inspirationItem(
    "inspiracion-048",
    "Torta camiseta universitario para francisco",
    "torta-camiseta-universitario-para-francisco.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada"],
    ["azul", "blanco"],
    ["camiseta", "universitario", "francisco", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-049",
    "Torta camiseta universitario para jorge",
    "torta-camiseta-universitario-para-jorge.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada"],
    ["azul", "blanco"],
    ["camiseta", "universitario", "jorge", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-050",
    "Torta capitán america dos pisos para mathias",
    "torta-capitan-america-dos-pisos-para-mathias.jpg",
    "Personaje o serie",
    "Dos pisos",
    ["Temática personalizada"],
    ["rojo", "azul", "blanco"],
    ["capitán", "america", "pisos", "mathias", "personaje", "serie", "infantil", "cumpleaños", "dos pisos", "temática personalizada", "rojo", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-051",
    "Torta capitán america para anton",
    "torta-capitan-america-para-anton.jpg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["rojo", "azul", "blanco"],
    ["capitán", "america", "anton", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "rojo", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-052",
    "Torta casera blanca con confites",
    "torta-casera-blanca-con-confites.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco"],
    ["casera", "blanca", "confites", "adulto", "elegante", "cumpleaños", "redonda clásica", "blanco"]
  ),
  inspirationItem(
    "inspiracion-053",
    "Torta celeste con conejitos",
    "torta-celeste-con-conejitos.jpg",
    "Infantil / para niños",
    "Redonda clásica",
    ["Con figura"],
    ["celeste"],
    ["celeste", "conejitos", "infantil", "niños", "personaje", "cumpleaños", "redonda clásica", "figura", "3d"]
  ),
  inspirationItem(
    "inspiracion-054",
    "Torta celeste con topper para 2 años",
    "torta-celeste-con-topper-para-2-anos.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con topper"],
    ["celeste"],
    ["celeste", "topper", "2", "años", "adulto", "elegante", "cumpleaños", "redonda clásica"]
  ),
  inspirationItem(
    "inspiracion-055",
    "Torta celeste infantil con oso",
    "torta-celeste-infantil-con-oso.jpg",
    "Infantil / para niños",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["celeste"],
    ["celeste", "infantil", "oso", "niños", "personaje", "cumpleaños", "redonda clásica"]
  ),
  inspirationItem(
    "inspiracion-056",
    "Torta cerveza corona con jarra",
    "torta-cerveza-corona-con-jarra.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con detalles dorados", "Con topper"],
    ["multicolor"],
    ["cerveza", "corona", "jarra", "adulto", "elegante", "cumpleaños", "redonda clásica", "dorado", "detalles dorados", "topper", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-057",
    "Torta chanel blanca y dorada con rosas rojas",
    "torta-chanel-blanca-y-dorada-con-rosas-rojas.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con detalles dorados"],
    ["blanco", "rojo", "dorado"],
    ["chanel", "blanca", "y", "dorada", "rosas", "rojas", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "floral", "dorado", "detalles dorados", "blanco", "rojo"]
  ),
  inspirationItem(
    "inspiracion-058",
    "Torta chocolate alta para 80 años",
    "torta-chocolate-alta-para-80-anos.jpg",
    "Adultos / elegante",
    "Alta",
    ["Solo decorada bonito"],
    ["chocolate", "marrón"],
    ["chocolate", "alta", "80", "años", "adulto", "elegante", "cumpleaños", "marrón"]
  ),
  inspirationItem(
    "inspiracion-059",
    "Torta chocolate alta para amante del whisky",
    "torta-chocolate-alta-para-amante-del-whisky.jpeg",
    "Adultos / elegante",
    "Alta",
    ["Con topper"],
    ["chocolate", "marrón"],
    ["chocolate", "alta", "amante", "whisky", "adulto", "elegante", "cumpleaños", "topper", "marrón"]
  ),
  inspirationItem(
    "inspiracion-060",
    "Torta chocolate con almendras y barquillos",
    "torta-chocolate-con-almendras-y-barquillos.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["chocolate", "marrón"],
    ["chocolate", "almendras", "y", "barquillos", "adulto", "elegante", "cumpleaños", "redonda clásica", "marrón"]
  ),
  inspirationItem(
    "inspiracion-061",
    "Torta chocolate con cerezas",
    "torta-chocolate-con-cerezas.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["chocolate", "marrón"],
    ["chocolate", "cerezas", "adulto", "elegante", "cumpleaños", "redonda clásica", "marrón"]
  ),
  inspirationItem(
    "inspiracion-062",
    "Torta chocolate con estrellas para luis",
    "torta-chocolate-con-estrellas-para-luis.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con topper"],
    ["chocolate", "marrón"],
    ["chocolate", "estrellas", "luis", "adulto", "elegante", "cumpleaños", "redonda clásica", "topper", "marrón"]
  ),
  inspirationItem(
    "inspiracion-063",
    "Torta chocolate con flores cumpleañero",
    "torta-chocolate-con-flores-cumpleanero.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores"],
    ["chocolate", "marrón"],
    ["chocolate", "flores", "cumpleañero", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "marrón"]
  ),
  inspirationItem(
    "inspiracion-064",
    "Torta chocolate con flores y vela variante 1",
    "torta-chocolate-con-flores-y-vela-variante-1.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con topper"],
    ["chocolate", "marrón"],
    ["chocolate", "flores", "y", "vela", "1", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "topper", "marrón"]
  ),
  inspirationItem(
    "inspiracion-065",
    "Torta chocolate con flores y vela variante 2",
    "torta-chocolate-con-flores-y-vela-variante-2.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con topper"],
    ["chocolate", "marrón"],
    ["chocolate", "flores", "y", "vela", "2", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "topper", "marrón"]
  ),
  inspirationItem(
    "inspiracion-066",
    "Torta chocolate con foto y mensaje de cumpleaños",
    "torta-chocolate-con-foto-y-mensaje-de-cumpleanos.png",
    "Cumpleaños",
    "Redonda clásica",
    ["Con nombre"],
    ["chocolate", "marrón"],
    ["chocolate", "foto", "y", "mensaje", "cumpleaños", "cumpleaños", "happy birthday", "redonda clásica", "nombre", "frase", "marrón"]
  ),
  inspirationItem(
    "inspiracion-067",
    "Torta chocolate con goteo y macarons",
    "torta-chocolate-con-goteo-y-macarons.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con drip"],
    ["chocolate", "marrón"],
    ["chocolate", "goteo", "y", "macarons", "adulto", "elegante", "cumpleaños", "redonda clásica", "drip", "marrón"]
  ),
  inspirationItem(
    "inspiracion-068",
    "Torta chocolate con velas y copas",
    "torta-chocolate-con-velas-y-copas.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con topper"],
    ["chocolate", "marrón"],
    ["chocolate", "velas", "y", "copas", "adulto", "elegante", "cumpleaños", "redonda clásica", "topper", "marrón"]
  ),
  inspirationItem(
    "inspiracion-069",
    "Torta chocolate cumpleaños con velas",
    "torta-chocolate-cumpleanos-con-velas.png",
    "Cumpleaños",
    "Redonda clásica",
    ["Con topper"],
    ["chocolate", "marrón"],
    ["chocolate", "cumpleaños", "velas", "cumpleaños", "happy birthday", "redonda clásica", "topper", "marrón"]
  ),
  inspirationItem(
    "inspiracion-070",
    "Torta chocolate fresas y trufas",
    "torta-chocolate-fresas-y-trufas.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["chocolate", "marrón"],
    ["chocolate", "fresas", "y", "trufas", "adulto", "elegante", "cumpleaños", "redonda clásica", "marrón"]
  ),
  inspirationItem(
    "inspiracion-071",
    "Torta chocolate morada con goteo",
    "torta-chocolate-morada-con-goteo.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con drip"],
    ["morado", "chocolate", "marrón"],
    ["chocolate", "morada", "goteo", "adulto", "elegante", "cumpleaños", "redonda clásica", "drip", "morado", "marrón"]
  ),
  inspirationItem(
    "inspiracion-072",
    "Torta chocolate para 18 años",
    "torta-chocolate-para-18-anos.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["chocolate", "marrón"],
    ["chocolate", "18", "años", "adulto", "elegante", "cumpleaños", "redonda clásica", "marrón"]
  ),
  inspirationItem(
    "inspiracion-073",
    "Torta chocolate pequeña en jardín",
    "torta-chocolate-pequena-en-jardin.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["chocolate", "marrón"],
    ["chocolate", "pequeña", "en", "jardín", "adulto", "elegante", "cumpleaños", "redonda clásica", "marrón"]
  ),
  inspirationItem(
    "inspiracion-074",
    "Torta chocolate pequeña sostenida",
    "torta-chocolate-pequena-sostenida.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["chocolate", "marrón"],
    ["chocolate", "pequeña", "sostenida", "adulto", "elegante", "cumpleaños", "redonda clásica", "marrón"]
  ),
  inspirationItem(
    "inspiracion-075",
    "Torta chocolate rayada con rosas rosadas",
    "torta-chocolate-rayada-con-rosas-rosadas.webp",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores"],
    ["rosado", "chocolate", "marrón"],
    ["chocolate", "rayada", "rosas", "rosadas", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "floral", "rosado", "marrón"]
  ),
  inspirationItem(
    "inspiracion-076",
    "Torta chocolate rústica para 60 años",
    "torta-chocolate-rustica-para-60-anos.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["chocolate", "marrón"],
    ["chocolate", "rústica", "60", "años", "adulto", "elegante", "cumpleaños", "redonda clásica", "marrón"]
  ),
  inspirationItem(
    "inspiracion-077",
    "Torta con foto comestible y borde dorado",
    "torta-con-foto-comestible-y-borde-dorado.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con detalles dorados", "Con foto comestible"],
    ["dorado"],
    ["foto", "comestible", "y", "borde", "dorado", "adulto", "elegante", "cumpleaños", "redonda clásica", "detalles dorados", "foto comestible", "fototorta"]
  ),
  inspirationItem(
    "inspiracion-078",
    "Torta cuadrada amarilla con limones",
    "torta-cuadrada-amarilla-con-limones.jpeg",
    "Adultos / elegante",
    "Rectangular",
    ["Solo decorada bonito"],
    ["amarillo"],
    ["cuadrada", "amarilla", "limones", "adulto", "elegante", "cumpleaños", "rectangular", "amarillo"]
  ),
  inspirationItem(
    "inspiracion-079",
    "Torta cuadrada azul con chocolates",
    "torta-cuadrada-azul-con-chocolates.jpeg",
    "Adultos / elegante",
    "Rectangular",
    ["Solo decorada bonito"],
    ["azul", "chocolate", "marrón"],
    ["cuadrada", "azul", "chocolates", "adulto", "elegante", "cumpleaños", "rectangular", "chocolate", "marrón"]
  ),
  inspirationItem(
    "inspiracion-080",
    "Torta cuadrada blanca con borde rosado",
    "torta-cuadrada-blanca-con-borde-rosado.jpg",
    "Adultos / elegante",
    "Rectangular",
    ["Solo decorada bonito"],
    ["blanco", "rosado"],
    ["cuadrada", "blanca", "borde", "rosado", "adulto", "elegante", "cumpleaños", "rectangular", "blanco"]
  ),
  inspirationItem(
    "inspiracion-081",
    "Torta cuadrada blanca con cerezas",
    "torta-cuadrada-blanca-con-cerezas.png",
    "Adultos / elegante",
    "Rectangular",
    ["Solo decorada bonito"],
    ["blanco"],
    ["cuadrada", "blanca", "cerezas", "adulto", "elegante", "cumpleaños", "rectangular", "blanco"]
  ),
  inspirationItem(
    "inspiracion-082",
    "Torta cuadrada blanca con flores coloridas",
    "torta-cuadrada-blanca-con-flores-coloridas.jpeg",
    "Adultos / elegante",
    "Rectangular",
    ["Con flores"],
    ["blanco"],
    ["cuadrada", "blanca", "flores", "coloridas", "adulto", "elegante", "cumpleaños", "rectangular", "floral", "rosas", "blanco"]
  ),
  inspirationItem(
    "inspiracion-083",
    "Torta cuadrada blanca con flores naturales",
    "torta-cuadrada-blanca-con-flores-naturales.jpeg",
    "Adultos / elegante",
    "Rectangular",
    ["Con flores"],
    ["blanco"],
    ["cuadrada", "blanca", "flores", "naturales", "adulto", "elegante", "cumpleaños", "rectangular", "floral", "rosas", "blanco"]
  ),
  inspirationItem(
    "inspiracion-084",
    "Torta cuadrada blanca con fresas",
    "torta-cuadrada-blanca-con-fresas.webp",
    "Adultos / elegante",
    "Rectangular",
    ["Solo decorada bonito"],
    ["blanco"],
    ["cuadrada", "blanca", "fresas", "adulto", "elegante", "cumpleaños", "rectangular", "blanco"]
  ),
  inspirationItem(
    "inspiracion-085",
    "Torta cuadrada blanca con rosas rosadas",
    "torta-cuadrada-blanca-con-rosas-rosadas.jpg",
    "Adultos / elegante",
    "Rectangular",
    ["Con flores"],
    ["blanco", "rosado"],
    ["cuadrada", "blanca", "rosas", "rosadas", "adulto", "elegante", "cumpleaños", "rectangular", "flores", "floral", "blanco", "rosado"]
  ),
  inspirationItem(
    "inspiracion-086",
    "Torta cuadrada chocolate con galletas",
    "torta-cuadrada-chocolate-con-galletas.jpeg",
    "Adultos / elegante",
    "Rectangular",
    ["Solo decorada bonito"],
    ["chocolate", "marrón"],
    ["cuadrada", "chocolate", "galletas", "adulto", "elegante", "cumpleaños", "rectangular", "marrón"]
  ),
  inspirationItem(
    "inspiracion-087",
    "Torta cuadrada con flores rosadas y lilas",
    "torta-cuadrada-con-flores-rosadas-y-lilas.jpg",
    "Adultos / elegante",
    "Rectangular",
    ["Con flores"],
    ["rosado", "lila"],
    ["cuadrada", "flores", "rosadas", "y", "lilas", "adulto", "elegante", "cumpleaños", "rectangular", "floral", "rosas", "rosado", "lila"]
  ),
  inspirationItem(
    "inspiracion-088",
    "Torta cuadrada PJ Masks",
    "torta-cuadrada-pj-masks.jpg",
    "Personaje o serie",
    "Rectangular",
    ["Temática personalizada"],
    ["azul", "rojo", "verde"],
    ["cuadrada", "pj", "masks", "personaje", "serie", "infantil", "cumpleaños", "rectangular", "temática personalizada", "azul", "rojo", "verde"]
  ),
  inspirationItem(
    "inspiracion-089",
    "Torta cuadrada rosada con chocolates blancos",
    "torta-cuadrada-rosada-con-chocolates-blancos.jpeg",
    "Adultos / elegante",
    "Rectangular",
    ["Solo decorada bonito"],
    ["blanco", "rosado", "chocolate", "marrón"],
    ["cuadrada", "rosada", "chocolates", "blancos", "adulto", "elegante", "cumpleaños", "rectangular", "blanco", "rosado", "chocolate", "marrón"]
  ),
  inspirationItem(
    "inspiracion-090",
    "Torta cuadrada rosada con flores pequenas",
    "torta-cuadrada-rosada-con-flores-pequenas.png",
    "Adultos / elegante",
    "Rectangular",
    ["Con flores"],
    ["rosado"],
    ["cuadrada", "rosada", "flores", "pequenas", "adulto", "elegante", "cumpleaños", "rectangular", "floral", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-091",
    "Torta cuadrada vintage aniversario",
    "torta-cuadrada-vintage-aniversario.jpg",
    "Aniversario",
    "Tipo vintage",
    ["Solo decorada bonito"],
    ["multicolor"],
    ["cuadrada", "vintage", "aniversario", "romántica", "celebración", "tipo vintage", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-092",
    "Torta cuadrada vintage con cerezas",
    "torta-cuadrada-vintage-con-cerezas.jpeg",
    "Adultos / elegante",
    "Tipo vintage",
    ["Solo decorada bonito"],
    ["multicolor"],
    ["cuadrada", "vintage", "cerezas", "adulto", "elegante", "cumpleaños", "tipo vintage", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-093",
    "Torta cumpleaños arcoiris con velas",
    "torta-cumpleanos-arcoiris-con-velas.jpg",
    "Cumpleaños",
    "Redonda clásica",
    ["Con topper"],
    ["multicolor"],
    ["cumpleaños", "arcoiris", "velas", "cumpleaños", "happy birthday", "redonda clásica", "topper", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-094",
    "Torta cumpleaños azul negra para 30 años",
    "torta-cumpleanos-azul-negra-para-30-anos.jpeg",
    "Cumpleaños",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["negro", "azul"],
    ["cumpleaños", "azul", "negra", "30", "años", "cumpleaños", "happy birthday", "redonda clásica", "negro"]
  ),
  inspirationItem(
    "inspiracion-095",
    "Torta de lucuma minimalista con borde dorado",
    "torta-de-lucuma-minimalista-con-borde-dorado.webp",
    "Minimalista",
    "Redonda clásica",
    ["Con detalles dorados"],
    ["dorado"],
    ["lucuma", "minimalista", "borde", "dorado", "elegante", "simple", "redonda clásica", "detalles dorados"]
  ),
  inspirationItem(
    "inspiracion-096",
    "Torta despedida de viaje con avion",
    "torta-despedida-de-viaje-con-avion.png",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["multicolor"],
    ["despedida", "viaje", "avion", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-097",
    "Torta dos pisos azul blanca y dorada",
    "torta-dos-pisos-azul-blanca-y-dorada.jpeg",
    "Adultos / elegante",
    "Dos pisos",
    ["Con detalles dorados"],
    ["blanco", "azul", "dorado"],
    ["pisos", "azul", "blanca", "y", "dorada", "adulto", "elegante", "cumpleaños", "dos pisos", "dorado", "detalles dorados", "blanco"]
  ),
  inspirationItem(
    "inspiracion-098",
    "Torta dos pisos azul con flores rosadas",
    "torta-dos-pisos-azul-con-flores-rosadas.jpg",
    "Adultos / elegante",
    "Dos pisos",
    ["Con flores"],
    ["azul", "rosado"],
    ["pisos", "azul", "flores", "rosadas", "adulto", "elegante", "cumpleaños", "dos pisos", "floral", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-099",
    "Torta dos pisos azul negra con macarons",
    "torta-dos-pisos-azul-negra-con-macarons.jpeg",
    "Adultos / elegante",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["negro", "azul"],
    ["pisos", "azul", "negra", "macarons", "adulto", "elegante", "cumpleaños", "dos pisos", "negro"]
  ),
  inspirationItem(
    "inspiracion-100",
    "Torta dos pisos azul plata para 18 años",
    "torta-dos-pisos-azul-plata-para-18-anos.jpeg",
    "Adultos / elegante",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["azul"],
    ["pisos", "azul", "plata", "18", "años", "adulto", "elegante", "cumpleaños", "dos pisos"]
  ),
  inspirationItem(
    "inspiracion-101",
    "Torta dos pisos con circulos verdes",
    "torta-dos-pisos-con-circulos-verdes.jpg",
    "Adultos / elegante",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["verde"],
    ["pisos", "circulos", "verdes", "adulto", "elegante", "cumpleaños", "dos pisos", "verde"]
  ),
  inspirationItem(
    "inspiracion-102",
    "Torta dos pisos rosada con mariposas para mamá",
    "torta-dos-pisos-rosada-con-mariposas-para-mama.jpg",
    "Adultos / elegante",
    "Dos pisos",
    ["Con flores"],
    ["rosado"],
    ["pisos", "rosada", "mariposas", "mamá", "adulto", "elegante", "cumpleaños", "dos pisos", "flores", "floral", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-103",
    "Torta dos pisos rosada con mariposas y flores",
    "torta-dos-pisos-rosada-con-mariposas-y-flores.jpeg",
    "Adultos / elegante",
    "Dos pisos",
    ["Con flores"],
    ["rosado"],
    ["pisos", "rosada", "mariposas", "y", "flores", "adulto", "elegante", "cumpleaños", "dos pisos", "floral", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-104",
    "Torta elegante azul blanca para 90 años",
    "torta-elegante-azul-blanca-para-90-anos.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco", "azul"],
    ["elegante", "azul", "blanca", "90", "años", "adulto", "cumpleaños", "redonda clásica", "blanco"]
  ),
  inspirationItem(
    "inspiracion-105",
    "Torta elegante blanca y dorada para 36 años",
    "torta-elegante-blanca-y-dorada-para-36-anos.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con detalles dorados"],
    ["blanco", "dorado"],
    ["elegante", "blanca", "y", "dorada", "36", "años", "adulto", "cumpleaños", "redonda clásica", "dorado", "detalles dorados", "blanco"]
  ),
  inspirationItem(
    "inspiracion-106",
    "Torta elegante lila con balanza de justicia",
    "torta-elegante-lila-con-balanza-de-justicia.jpeg",
    "Personalizada especial",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["lila"],
    ["elegante", "lila", "balanza", "justicia", "personalizada", "especial", "cumpleaños", "redonda clásica"]
  ),
  inspirationItem(
    "inspiracion-107",
    "Torta elegante negra con esmoquin",
    "torta-elegante-negra-con-esmoquin.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con figura"],
    ["negro"],
    ["elegante", "negra", "esmoquin", "adulto", "cumpleaños", "redonda clásica", "figura", "3d", "negro"]
  ),
  inspirationItem(
    "inspiracion-108",
    "Torta esmoquin blanca y negra para 15 años",
    "torta-esmoquin-blanca-y-negra-para-15-anos.jpeg",
    "Quinceañero",
    "Redonda clásica",
    ["Con figura"],
    ["blanco", "negro"],
    ["esmoquin", "blanca", "y", "negra", "15", "años", "quinceañero", "15 años", "cumpleaños", "redonda clásica", "figura", "3d", "blanco", "negro"]
  ),
  inspirationItem(
    "inspiracion-109",
    "Torta floral roja y blanca para gloria 72",
    "torta-floral-roja-y-blanca-para-gloria-72.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores"],
    ["blanco", "rojo"],
    ["floral", "roja", "y", "blanca", "gloria", "72", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "rosas", "blanco", "rojo"]
  ),
  inspirationItem(
    "inspiracion-110",
    "Torta floral rosada y lila para reyna",
    "torta-floral-rosada-y-lila-para-reyna.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores"],
    ["rosado", "lila"],
    ["floral", "rosada", "y", "lila", "reyna", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-111",
    "Torta fresas con mensaje en coreano",
    "torta-fresas-con-mensaje-en-coreano.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con nombre"],
    ["multicolor"],
    ["fresas", "mensaje", "en", "coreano", "adulto", "elegante", "cumpleaños", "redonda clásica", "nombre", "frase", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-112",
    "Torta fútbol verde con jugadores",
    "torta-futbol-verde-con-jugadores.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con figura"],
    ["verde"],
    ["fútbol", "verde", "jugadores", "adulto", "elegante", "cumpleaños", "redonda clásica", "figura", "3d"]
  ),
  inspirationItem(
    "inspiracion-113",
    "Torta fútbol verde para ramon",
    "torta-futbol-verde-para-ramon.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["verde"],
    ["fútbol", "verde", "ramon", "adulto", "elegante", "cumpleaños", "redonda clásica"]
  ),
  inspirationItem(
    "inspiracion-114",
    "Torta gimnasio para mujer con topper",
    "torta-gimnasio-para-mujer-con-topper.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con topper"],
    ["multicolor"],
    ["gimnasio", "mujer", "topper", "adulto", "elegante", "cumpleaños", "redonda clásica", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-115",
    "Torta harry potter rosada para 8 años",
    "torta-harry-potter-rosada-para-8-anos.jpg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["rosado", "dorado"],
    ["harry", "potter", "rosada", "8", "años", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "rosado", "dorado"]
  ),
  inspirationItem(
    "inspiracion-116",
    "Torta hombre con auto y chocolates",
    "torta-hombre-con-auto-y-chocolates.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con figura"],
    ["chocolate", "marrón"],
    ["hombre", "auto", "y", "chocolates", "adulto", "elegante", "cumpleaños", "redonda clásica", "figura", "3d", "chocolate", "marrón"]
  ),
  inspirationItem(
    "inspiracion-117",
    "Torta infantil decorada en reunion",
    "torta-infantil-decorada-en-reunion.jpg",
    "Infantil / para niños",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["multicolor"],
    ["infantil", "decorada", "en", "reunion", "niños", "personaje", "cumpleaños", "redonda clásica", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-118",
    "Torta infantil tiburon tralalero",
    "torta-infantil-tiburon-tralalero.webp",
    "Infantil / para niños",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["multicolor"],
    ["infantil", "tiburon", "tralalero", "niños", "personaje", "cumpleaños", "redonda clásica", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-119",
    "Torta iron man blanca y roja para 8 años",
    "torta-iron-man-blanca-y-roja-para-8-anos.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["blanco", "rojo", "dorado"],
    ["iron", "man", "blanca", "y", "roja", "8", "años", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "blanco", "rojo", "dorado"]
  ),
  inspirationItem(
    "inspiracion-120",
    "Torta iron man con foto comestible para manuel",
    "torta-iron-man-con-foto-comestible-para-manuel.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada", "Con foto comestible"],
    ["rojo", "dorado"],
    ["iron", "man", "foto", "comestible", "manuel", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "foto comestible", "fototorta", "rojo", "dorado"]
  ),
  inspirationItem(
    "inspiracion-121",
    "Torta iron man dos pisos para 4 años",
    "torta-iron-man-dos-pisos-para-4-anos.jpg",
    "Personaje o serie",
    "Dos pisos",
    ["Temática personalizada"],
    ["rojo", "dorado"],
    ["iron", "man", "pisos", "4", "años", "personaje", "serie", "infantil", "cumpleaños", "dos pisos", "temática personalizada", "rojo", "dorado"]
  ),
  inspirationItem(
    "inspiracion-122",
    "Torta iron man roja con ciudad y nombre emilio",
    "torta-iron-man-roja-con-ciudad-y-nombre-emilio.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada", "Con nombre"],
    ["rojo", "dorado"],
    ["iron", "man", "roja", "ciudad", "y", "nombre", "emilio", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "frase", "rojo", "dorado"]
  ),
  inspirationItem(
    "inspiracion-123",
    "Torta juan dos pisos azul y blanca",
    "torta-juan-dos-pisos-azul-y-blanca.jpeg",
    "Adultos / elegante",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["blanco", "azul"],
    ["juan", "pisos", "azul", "y", "blanca", "adulto", "elegante", "cumpleaños", "dos pisos", "blanco"]
  ),
  inspirationItem(
    "inspiracion-124",
    "Torta kuromi dos pisos rosada para 10 años",
    "torta-kuromi-dos-pisos-rosada-para-10-anos.jpg",
    "Personaje o serie",
    "Dos pisos",
    ["Temática personalizada"],
    ["rosado", "negro"],
    ["kuromi", "pisos", "rosada", "10", "años", "personaje", "serie", "infantil", "cumpleaños", "dos pisos", "temática personalizada", "rosado", "negro"]
  ),
  inspirationItem(
    "inspiracion-125",
    "Torta lila con mariposas y nombre gloria",
    "torta-lila-con-mariposas-y-nombre-gloria.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con nombre"],
    ["lila"],
    ["lila", "mariposas", "y", "nombre", "gloria", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "floral", "rosas", "frase"]
  ),
  inspirationItem(
    "inspiracion-126",
    "Torta maquillaje rosada con cosmeticos",
    "torta-maquillaje-rosada-con-cosmeticos.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con figura"],
    ["rosado"],
    ["maquillaje", "rosada", "cosmeticos", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "figura", "3d", "rosado"]
  ),
  inspirationItem(
    "inspiracion-127",
    "Torta meme bueno y mis regalos",
    "torta-meme-bueno-y-mis-regalos.png",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con nombre"],
    ["multicolor"],
    ["meme", "bueno", "y", "mis", "regalos", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "nombre", "frase", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-128",
    "Torta meme cumpleaños felices 22",
    "torta-meme-cumpleanos-felices-22.jpg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con nombre"],
    ["multicolor"],
    ["meme", "cumpleaños", "felices", "22", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "nombre", "frase", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-129",
    "Torta meme exito en tus nuevos comienzos",
    "torta-meme-exito-en-tus-nuevos-comienzos.jpeg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con nombre"],
    ["multicolor"],
    ["meme", "exito", "en", "tus", "nuevos", "comienzos", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "nombre", "frase", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-130",
    "Torta meme feliz cumpleaños",
    "torta-meme-feliz-cumpleanos.jpeg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con nombre"],
    ["multicolor"],
    ["meme", "feliz", "cumpleaños", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "nombre", "frase", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-131",
    "Torta meme mejor carde que perdone",
    "torta-meme-mejor-carde-que-perdone.jpg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con nombre"],
    ["multicolor"],
    ["meme", "mejor", "carde", "que", "perdone", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "nombre", "frase", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-132",
    "Torta meme no hay mal que dure",
    "torta-meme-no-hay-mal-que-dure.jpeg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con nombre"],
    ["multicolor"],
    ["meme", "no", "hay", "mal", "que", "dure", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "nombre", "frase", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-133",
    "Torta meme no me estresen",
    "torta-meme-no-me-estresen.jpeg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con nombre"],
    ["multicolor"],
    ["meme", "no", "me", "estresen", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "nombre", "frase", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-134",
    "Torta meme pero a que costo",
    "torta-meme-pero-a-que-costo.jpg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con nombre"],
    ["multicolor"],
    ["meme", "pero", "a", "que", "costo", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "nombre", "frase", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-135",
    "Torta meme todavia en la flor",
    "torta-meme-todavia-en-la-flor.jpeg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con nombre"],
    ["multicolor"],
    ["meme", "todavia", "en", "la", "flor", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "nombre", "frase", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-136",
    "Torta militar con tanque para jorge",
    "torta-militar-con-tanque-para-jorge.jpeg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con figura"],
    ["multicolor"],
    ["militar", "tanque", "jorge", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "figura", "3d", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-137",
    "Torta minimalista con flores rosadas",
    "torta-minimalista-con-flores-rosadas.jpg",
    "Minimalista",
    "Redonda clásica",
    ["Con flores"],
    ["rosado"],
    ["minimalista", "flores", "rosadas", "elegante", "simple", "redonda clásica", "floral", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-138",
    "Torta moda blanca con tacon y rosas rojas",
    "torta-moda-blanca-con-tacon-y-rosas-rojas.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con figura", "Con flores"],
    ["blanco", "rojo"],
    ["moda", "blanca", "tacon", "y", "rosas", "rojas", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "figura", "3d", "flores", "floral", "blanco", "rojo"]
  ),
  inspirationItem(
    "inspiracion-139",
    "Torta moda cebra con tacon y flores",
    "torta-moda-cebra-con-tacon-y-flores.webp",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con figura", "Con flores"],
    ["multicolor"],
    ["moda", "cebra", "tacon", "y", "flores", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "figura", "3d", "floral", "rosas", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-140",
    "Torta moda con zapato y lazos",
    "torta-moda-con-zapato-y-lazos.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con figura"],
    ["multicolor"],
    ["moda", "zapato", "y", "lazos", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "figura", "3d", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-141",
    "Torta morada con frutos del bosque",
    "torta-morada-con-frutos-del-bosque.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["morado"],
    ["morada", "frutos", "bosque", "adulto", "elegante", "cumpleaños", "redonda clásica", "morado"]
  ),
  inspirationItem(
    "inspiracion-142",
    "Torta navidad blanca con pinos",
    "torta-navidad-blanca-con-pinos.jpg",
    "Navidad",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco"],
    ["navidad", "blanca", "pinos", "festiva", "redonda clásica", "blanco"]
  ),
  inspirationItem(
    "inspiracion-143",
    "Torta negra con macarons y burbujas",
    "torta-negra-con-macarons-y-burbujas.webp",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con detalles dorados"],
    ["negro"],
    ["negra", "macarons", "y", "burbujas", "adulto", "elegante", "cumpleaños", "redonda clásica", "dorado", "detalles dorados", "negro"]
  ),
  inspirationItem(
    "inspiracion-144",
    "Torta negra minimalista con vela",
    "torta-negra-minimalista-con-vela.jpg",
    "Minimalista",
    "Redonda clásica",
    ["Con topper"],
    ["negro"],
    ["negra", "minimalista", "vela", "elegante", "simple", "redonda clásica", "topper", "negro"]
  ),
  inspirationItem(
    "inspiracion-145",
    "Torta pequeña con mariposas en mesa",
    "torta-pequena-con-mariposas-en-mesa.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores"],
    ["multicolor"],
    ["pequeña", "mariposas", "en", "mesa", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "floral", "rosas", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-146",
    "Torta pequeña rosada con flores de felicitacion",
    "torta-pequena-rosada-con-flores-de-felicitacion.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores"],
    ["rosado"],
    ["pequeña", "rosada", "flores", "felicitacion", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-147",
    "Torta PJ Masks para ander",
    "torta-pj-masks-para-ander.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["azul", "rojo", "verde"],
    ["pj", "masks", "ander", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "azul", "rojo", "verde"]
  ),
  inspirationItem(
    "inspiracion-148",
    "Torta primer cumpleaños blanca y dorada",
    "torta-primer-cumpleanos-blanca-y-dorada.jpg",
    "Infantil / para niños",
    "Redonda clásica",
    ["Con detalles dorados"],
    ["blanco", "dorado"],
    ["primer", "cumpleaños", "blanca", "y", "dorada", "infantil", "niños", "personaje", "cumpleaños", "redonda clásica", "dorado", "detalles dorados", "blanco"]
  ),
  inspirationItem(
    "inspiracion-149",
    "Torta primera comunion con cruz y mariposas",
    "torta-primera-comunion-con-cruz-y-mariposas.jpg",
    "Primera comunión",
    "Redonda clásica",
    ["Con flores"],
    ["multicolor"],
    ["primera", "comunion", "cruz", "y", "mariposas", "primera comunion", "religioso", "redonda clásica", "flores", "floral", "rosas", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-150",
    "Torta quinceañera rosada con flores",
    "torta-quinceanera-rosada-con-flores.jpg",
    "Quinceañero",
    "Redonda clásica",
    ["Con flores"],
    ["rosado"],
    ["quinceañera", "rosada", "flores", "quinceañero", "15 años", "cumpleaños", "redonda clásica", "floral", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-151",
    "Torta quinceañera rosada de tres pisos",
    "torta-quinceanera-rosada-de-tres-pisos.jpeg",
    "Quinceañero",
    "Dos pisos",
    ["Solo decorada bonito"],
    ["rosado"],
    ["quinceañera", "rosada", "pisos", "quinceañero", "15 años", "cumpleaños", "dos pisos", "rosado"]
  ),
  inspirationItem(
    "inspiracion-152",
    "Torta Real Madrid con balon",
    "torta-real-madrid-con-balon.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["azul", "blanco"],
    ["real", "madrid", "balon", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-153",
    "Torta rectangular mapa del peru aniversario",
    "torta-rectangular-mapa-del-peru-aniversario.jpg",
    "Aniversario",
    "Rectangular",
    ["Solo decorada bonito"],
    ["multicolor"],
    ["rectangular", "mapa", "peru", "aniversario", "romántica", "celebración", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-154",
    "Torta rectangular rosada con flores pequenas",
    "torta-rectangular-rosada-con-flores-pequenas.png",
    "Adultos / elegante",
    "Rectangular",
    ["Con flores"],
    ["rosado"],
    ["rectangular", "rosada", "flores", "pequenas", "adulto", "elegante", "cumpleaños", "floral", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-155",
    "Torta rectangular Spider-Man con foto comestible",
    "torta-rectangular-spiderman-con-foto-comestible.jpg",
    "Personaje o serie",
    "Rectangular",
    ["Temática personalizada", "Con foto comestible"],
    ["rojo", "azul", "negro"],
    ["rectangular", "spiderman", "foto", "comestible", "personaje", "serie", "infantil", "cumpleaños", "temática personalizada", "foto comestible", "fototorta", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-156",
    "Torta River Plate con balon",
    "torta-river-plate-con-balon.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["rojo", "blanco"],
    ["river", "plate", "balon", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "rojo", "blanco"]
  ),
  inspirationItem(
    "inspiracion-157",
    "Torta River Plate con chocolates",
    "torta-river-plate-con-chocolates.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada"],
    ["chocolate", "rojo", "blanco", "marrón"],
    ["river", "plate", "chocolates", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "chocolate", "rojo", "blanco", "marrón"]
  ),
  inspirationItem(
    "inspiracion-158",
    "Torta rock AC/DC roja y negra",
    "torta-rock-acdc-roja-y-negra.jpeg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada"],
    ["negro", "rojo"],
    ["rock", "acdc", "roja", "y", "negra", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "negro", "rojo"]
  ),
  inspirationItem(
    "inspiracion-159",
    "Torta rosada con flores macarons y nombre aron",
    "torta-rosada-con-flores-macarons-y-nombre-aron.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con nombre"],
    ["rosado"],
    ["rosada", "flores", "macarons", "y", "nombre", "aron", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "frase", "rosado"]
  ),
  inspirationItem(
    "inspiracion-160",
    "Torta rosada con flores y macarons para marta",
    "torta-rosada-con-flores-y-macarons-para-marta.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores"],
    ["rosado"],
    ["rosada", "flores", "y", "macarons", "marta", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-161",
    "Torta rosada con flores y nombre maria",
    "torta-rosada-con-flores-y-nombre-maria.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con nombre"],
    ["rosado"],
    ["rosada", "flores", "y", "nombre", "maria", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "frase", "rosado"]
  ),
  inspirationItem(
    "inspiracion-162",
    "Torta rosada con goteo y flores para 58 años",
    "torta-rosada-con-goteo-y-flores-para-58-anos.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con drip"],
    ["rosado"],
    ["rosada", "goteo", "y", "flores", "58", "años", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "drip", "rosado"]
  ),
  inspirationItem(
    "inspiracion-163",
    "Torta rosada con goteo y globo transparente",
    "torta-rosada-con-goteo-y-globo-transparente.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con drip"],
    ["rosado"],
    ["rosada", "goteo", "y", "globo", "transparente", "adulto", "elegante", "cumpleaños", "redonda clásica", "drip", "rosado"]
  ),
  inspirationItem(
    "inspiracion-164",
    "Torta rosada con mariposas para pilar",
    "torta-rosada-con-mariposas-para-pilar.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores"],
    ["rosado"],
    ["rosada", "mariposas", "pilar", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "floral", "rosas", "rosado"]
  ),
  inspirationItem(
    "inspiracion-165",
    "Torta rosada con mariposas y goteo negro",
    "torta-rosada-con-mariposas-y-goteo-negro.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con drip"],
    ["negro", "rosado"],
    ["rosada", "mariposas", "y", "goteo", "negro", "adulto", "elegante", "cumpleaños", "redonda clásica", "flores", "floral", "rosas", "drip", "rosado"]
  ),
  inspirationItem(
    "inspiracion-166",
    "Torta rosada con rosas y mensaje feliz cumpleaños variante",
    "torta-rosada-con-rosas-y-mensaje-feliz-cumpleanos-variante.jpeg",
    "Cumpleaños",
    "Redonda clásica",
    ["Con flores", "Con nombre"],
    ["rosado"],
    ["rosada", "rosas", "y", "mensaje", "feliz", "cumpleaños", "cumpleaños", "happy birthday", "redonda clásica", "flores", "floral", "nombre", "frase", "rosado"]
  ),
  inspirationItem(
    "inspiracion-167",
    "Torta rosada con rosas y mensaje feliz cumpleaños",
    "torta-rosada-con-rosas-y-mensaje-feliz-cumpleanos.jpeg",
    "Cumpleaños",
    "Redonda clásica",
    ["Con flores", "Con nombre"],
    ["rosado"],
    ["rosada", "rosas", "y", "mensaje", "feliz", "cumpleaños", "cumpleaños", "happy birthday", "redonda clásica", "flores", "floral", "nombre", "frase", "rosado"]
  ),
  inspirationItem(
    "inspiracion-168",
    "Torta rosada con velas minimalista",
    "torta-rosada-con-velas-minimalista.jpg",
    "Minimalista",
    "Redonda clásica",
    ["Con topper"],
    ["rosado"],
    ["rosada", "velas", "minimalista", "elegante", "simple", "redonda clásica", "topper", "rosado"]
  ),
  inspirationItem(
    "inspiracion-169",
    "Torta rosada y dorada con flores y topper",
    "torta-rosada-y-dorada-con-flores-y-topper.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Con flores", "Con detalles dorados", "Con topper"],
    ["rosado", "dorado"],
    ["rosada", "y", "dorada", "flores", "topper", "adulto", "elegante", "cumpleaños", "redonda clásica", "floral", "rosas", "dorado", "detalles dorados", "rosado"]
  ),
  inspirationItem(
    "inspiracion-170",
    "Torta rústica de 15 años con arandanos",
    "torta-rustica-de-15-anos-con-arandanos.jpg",
    "Quinceañero",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["multicolor"],
    ["rústica", "15", "años", "arandanos", "quinceañero", "15 años", "cumpleaños", "redonda clásica", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-171",
    "Torta Spider-Man azul con ciudad y personajes",
    "torta-spiderman-azul-con-ciudad-y-personajes.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["azul", "rojo", "negro"],
    ["spiderman", "azul", "ciudad", "y", "personajes", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "rojo", "negro"]
  ),
  inspirationItem(
    "inspiracion-172",
    "Torta Spider-Man azul con confites para vicente 3",
    "torta-spiderman-azul-con-confites-para-vicente-3.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["azul", "rojo", "negro"],
    ["spiderman", "azul", "confites", "vicente", "3", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "rojo", "negro"]
  ),
  inspirationItem(
    "inspiracion-173",
    "Torta Spider-Man azul y roja para 3 años",
    "torta-spiderman-azul-y-roja-para-3-anos.jpg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["azul", "rojo", "negro"],
    ["spiderman", "azul", "y", "roja", "3", "años", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "rojo", "negro"]
  ),
  inspirationItem(
    "inspiracion-174",
    "Torta Spider-Man blanca con telaranas para sebastian",
    "torta-spiderman-blanca-con-telaranas-para-sebastian.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["blanco", "rojo", "azul", "negro"],
    ["spiderman", "blanca", "telaranas", "sebastian", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "blanco", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-175",
    "Torta Spider-Man blanca con telaranas",
    "torta-spiderman-blanca-con-telaranas.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["blanco", "rojo", "azul", "negro"],
    ["spiderman", "blanca", "telaranas", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "blanco", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-176",
    "Torta Spider-Man dos pisos bebé 2 meses",
    "torta-spiderman-dos-pisos-bebe-2-meses.jpeg",
    "Personaje o serie",
    "Dos pisos",
    ["Temática personalizada"],
    ["rojo", "azul", "negro"],
    ["spiderman", "pisos", "bebé", "2", "meses", "personaje", "serie", "infantil", "cumpleaños", "dos pisos", "temática personalizada", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-177",
    "Torta Spider-Man dos pisos con ciudad para 2 años",
    "torta-spiderman-dos-pisos-con-ciudad-para-2-anos.jpg",
    "Personaje o serie",
    "Dos pisos",
    ["Temática personalizada"],
    ["rojo", "azul", "negro"],
    ["spiderman", "pisos", "ciudad", "2", "años", "personaje", "serie", "infantil", "cumpleaños", "dos pisos", "temática personalizada", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-178",
    "Torta Spider-Man dos pisos para 3 años",
    "torta-spiderman-dos-pisos-para-3-anos.jpeg",
    "Personaje o serie",
    "Dos pisos",
    ["Temática personalizada"],
    ["rojo", "azul", "negro"],
    ["spiderman", "pisos", "3", "años", "personaje", "serie", "infantil", "cumpleaños", "dos pisos", "temática personalizada", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-179",
    "Torta Spider-Man dos pisos para 5 años",
    "torta-spiderman-dos-pisos-para-5-anos.jpg",
    "Personaje o serie",
    "Dos pisos",
    ["Temática personalizada"],
    ["rojo", "azul", "negro"],
    ["spiderman", "pisos", "5", "años", "personaje", "serie", "infantil", "cumpleaños", "dos pisos", "temática personalizada", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-180",
    "Torta Spider-Man dos pisos para matias",
    "torta-spiderman-dos-pisos-para-matias.jpeg",
    "Personaje o serie",
    "Dos pisos",
    ["Temática personalizada"],
    ["rojo", "azul", "negro"],
    ["spiderman", "pisos", "matias", "personaje", "serie", "infantil", "cumpleaños", "dos pisos", "temática personalizada", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-181",
    "Torta Spider-Man roja con borde negro",
    "torta-spiderman-roja-con-borde-negro.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["negro", "rojo", "azul"],
    ["spiderman", "roja", "borde", "negro", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "rojo", "azul"]
  ),
  inspirationItem(
    "inspiracion-182",
    "Torta Spider-Man roja con rostro y telaranas",
    "torta-spiderman-roja-con-rostro-y-telaranas.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["rojo", "azul", "negro"],
    ["spiderman", "roja", "rostro", "y", "telaranas", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-183",
    "Torta Spider-Man roja para 3 años",
    "torta-spiderman-roja-para-3-anos.jpg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["rojo", "azul", "negro"],
    ["spiderman", "roja", "3", "años", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-184",
    "Torta Spider-Man roja y azul para 5 años",
    "torta-spiderman-roja-y-azul-para-5-anos.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["azul", "rojo", "negro"],
    ["spiderman", "roja", "y", "azul", "5", "años", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "rojo", "negro"]
  ),
  inspirationItem(
    "inspiracion-185",
    "Torta Spider-Man roja y negra con ciudad",
    "torta-spiderman-roja-y-negra-con-ciudad.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["negro", "rojo", "azul"],
    ["spiderman", "roja", "y", "negra", "ciudad", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "negro", "rojo", "azul"]
  ),
  inspirationItem(
    "inspiracion-186",
    "Torta Spider-Man roja y negra con topper",
    "torta-spiderman-roja-y-negra-con-topper.jpg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["negro", "rojo", "azul"],
    ["spiderman", "roja", "y", "negra", "topper", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "negro", "rojo", "azul"]
  ),
  inspirationItem(
    "inspiracion-187",
    "Torta Spider-Man tres pisos para alessandro",
    "torta-spiderman-tres-pisos-para-alessandro.jpg",
    "Personaje o serie",
    "Dos pisos",
    ["Temática personalizada"],
    ["rojo", "azul", "negro"],
    ["spiderman", "pisos", "alessandro", "personaje", "serie", "infantil", "cumpleaños", "dos pisos", "temática personalizada", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-188",
    "Torta spiderverse con tres personajes para rafaella",
    "torta-spiderverse-con-tres-personajes-para-rafaella.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["rojo", "azul", "negro"],
    ["spiderverse", "personajes", "rafaella", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "rojo", "azul", "negro"]
  ),
  inspirationItem(
    "inspiracion-189",
    "Torta sport boys redonda rosada con escudo",
    "torta-sport-boys-redonda-rosada-con-escudo.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada"],
    ["rosado", "negro"],
    ["sport", "boys", "redonda", "rosada", "escudo", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "rosado", "negro"]
  ),
  inspirationItem(
    "inspiracion-190",
    "Torta sport boys rosada con balones para anton",
    "torta-sport-boys-rosada-con-balones-para-anton.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["rosado", "negro"],
    ["sport", "boys", "rosada", "balones", "anton", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "rosado", "negro"]
  ),
  inspirationItem(
    "inspiracion-191",
    "Torta sport boys rosada con topper para fabio",
    "torta-sport-boys-rosada-con-topper-para-fabio.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["rosado", "negro"],
    ["sport", "boys", "rosada", "topper", "fabio", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "rosado", "negro"]
  ),
  inspirationItem(
    "inspiracion-192",
    "Torta Stitch celeste",
    "torta-stitch-celeste.jpeg",
    "Personaje o serie",
    "Redonda clásica",
    ["Temática personalizada"],
    ["celeste", "azul"],
    ["stitch", "celeste", "personaje", "serie", "infantil", "cumpleaños", "redonda clásica", "temática personalizada", "azul"]
  ),
  inspirationItem(
    "inspiracion-193",
    "Torta submarino infantil",
    "torta-submarino-infantil.jpg",
    "Infantil / para niños",
    "Redonda clásica",
    ["Temática personalizada"],
    ["multicolor"],
    ["submarino", "infantil", "niños", "personaje", "cumpleaños", "redonda clásica", "temática personalizada", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-194",
    "Torta tres pisos azul con estrellas para 70 años",
    "torta-tres-pisos-azul-con-estrellas-para-70-anos.jpeg",
    "Adultos / elegante",
    "Dos pisos",
    ["Con topper"],
    ["azul"],
    ["pisos", "azul", "estrellas", "70", "años", "adulto", "elegante", "cumpleaños", "dos pisos", "topper"]
  ),
  inspirationItem(
    "inspiracion-195",
    "Torta tres pisos azul dorada variante",
    "torta-tres-pisos-azul-dorada-variante.jpg",
    "Adultos / elegante",
    "Dos pisos",
    ["Con detalles dorados"],
    ["azul", "dorado"],
    ["pisos", "azul", "dorada", "adulto", "elegante", "cumpleaños", "dos pisos", "dorado", "detalles dorados"]
  ),
  inspirationItem(
    "inspiracion-196",
    "Torta tres pisos azul dorada",
    "torta-tres-pisos-azul-dorada.jpeg",
    "Adultos / elegante",
    "Dos pisos",
    ["Con detalles dorados"],
    ["azul", "dorado"],
    ["pisos", "azul", "dorada", "adulto", "elegante", "cumpleaños", "dos pisos", "dorado", "detalles dorados"]
  ),
  inspirationItem(
    "inspiracion-197",
    "Torta universitario blanca y rosada con macarons",
    "torta-universitario-blanca-y-rosada-con-macarons.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada"],
    ["blanco", "rosado", "azul"],
    ["universitario", "blanca", "y", "rosada", "macarons", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "blanco", "rosado", "azul"]
  ),
  inspirationItem(
    "inspiracion-198",
    "Torta universitario con balon para miguel",
    "torta-universitario-con-balon-para-miguel.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["azul", "blanco"],
    ["universitario", "balon", "miguel", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-199",
    "Torta universitario con balon y topper dorado",
    "torta-universitario-con-balon-y-topper-dorado.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con detalles dorados", "Con topper"],
    ["dorado", "azul", "blanco"],
    ["universitario", "balon", "y", "topper", "dorado", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "detalles dorados", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-200",
    "Torta universitario con balones para diego",
    "torta-universitario-con-balones-para-diego.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["azul", "blanco"],
    ["universitario", "balones", "diego", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-201",
    "Torta universitario con banderines y fecha",
    "torta-universitario-con-banderines-y-fecha.webp",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada"],
    ["azul", "blanco"],
    ["universitario", "banderines", "y", "fecha", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-202",
    "Torta universitario con caricatura para josimar",
    "torta-universitario-con-caricatura-para-josimar.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada"],
    ["azul", "blanco"],
    ["universitario", "caricatura", "josimar", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-203",
    "Torta universitario dos pisos roja y blanca",
    "torta-universitario-dos-pisos-roja-y-blanca.jpeg",
    "Adultos / elegante",
    "Dos pisos",
    ["Temática personalizada"],
    ["blanco", "rojo", "azul"],
    ["universitario", "pisos", "roja", "y", "blanca", "adulto", "elegante", "cumpleaños", "dos pisos", "temática personalizada", "personaje", "blanco", "rojo", "azul"]
  ),
  inspirationItem(
    "inspiracion-204",
    "Torta universitario minimalista para jimmy",
    "torta-universitario-minimalista-para-jimmy.jpeg",
    "Minimalista",
    "Redonda clásica",
    ["Temática personalizada"],
    ["azul", "blanco"],
    ["universitario", "minimalista", "jimmy", "elegante", "simple", "redonda clásica", "temática personalizada", "personaje", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-205",
    "Torta universitario negra y dorada para german",
    "torta-universitario-negra-y-dorada-para-german.jpeg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con detalles dorados"],
    ["negro", "dorado", "azul", "blanco"],
    ["universitario", "negra", "y", "dorada", "german", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "dorado", "detalles dorados", "negro", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-206",
    "Torta universitario rosada con balon para 18 años",
    "torta-universitario-rosada-con-balon-para-18-anos.jpg",
    "Adultos / elegante",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["rosado", "azul", "blanco"],
    ["universitario", "rosada", "balon", "18", "años", "adulto", "elegante", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "rosado", "azul", "blanco"]
  ),
  inspirationItem(
    "inspiracion-207",
    "Torta vaquera negra y blanca para 30 años",
    "torta-vaquera-negra-y-blanca-para-30-anos.avif",
    "Adultos / elegante",
    "Redonda clásica",
    ["Solo decorada bonito"],
    ["blanco", "negro"],
    ["vaquera", "negra", "y", "blanca", "30", "años", "adulto", "elegante", "cumpleaños", "redonda clásica", "blanco", "negro"]
  ),
  inspirationItem(
    "inspiracion-208",
    "Torta viajero con avion y mapa",
    "torta-viajero-con-avion-y-mapa.jpg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["multicolor"],
    ["viajero", "avion", "y", "mapa", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-209",
    "Torta viajero con maleta y destinos",
    "torta-viajero-con-maleta-y-destinos.jpg",
    "Personalizada especial",
    "Redonda clásica",
    ["Temática personalizada", "Con topper"],
    ["multicolor"],
    ["viajero", "maleta", "y", "destinos", "personalizada", "especial", "cumpleaños", "redonda clásica", "temática personalizada", "personaje", "topper", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-210",
    "Torta viajero dos pisos con maletas",
    "torta-viajero-dos-pisos-con-maletas.jpeg",
    "Personalizada especial",
    "Dos pisos",
    ["Temática personalizada", "Con topper"],
    ["multicolor"],
    ["viajero", "pisos", "maletas", "personalizada", "especial", "cumpleaños", "dos pisos", "temática personalizada", "personaje", "topper", "multicolor"]
  ),
  inspirationItem(
    "inspiracion-211",
    "Torta vintage blanca con lazos",
    "torta-vintage-blanca-con-lazos.jpg",
    "Adultos / elegante",
    "Tipo vintage",
    ["Solo decorada bonito"],
    ["blanco"],
    ["vintage", "blanca", "lazos", "adulto", "elegante", "cumpleaños", "tipo vintage", "blanco"]
  ),
  inspirationItem(
    "inspiracion-212",
    "Torta vintage blanca y azul con limones",
    "torta-vintage-blanca-y-azul-con-limones.jpg",
    "Adultos / elegante",
    "Tipo vintage",
    ["Solo decorada bonito"],
    ["blanco", "azul"],
    ["vintage", "blanca", "y", "azul", "limones", "adulto", "elegante", "cumpleaños", "tipo vintage", "blanco"]
  ),
  inspirationItem(
    "inspiracion-213",
    "Torta vintage rosada para 30 años",
    "torta-vintage-rosada-para-30-anos.jpg",
    "Adultos / elegante",
    "Tipo vintage",
    ["Solo decorada bonito"],
    ["rosado"],
    ["vintage", "rosada", "30", "años", "adulto", "elegante", "cumpleaños", "tipo vintage", "rosado"]
  )
];
