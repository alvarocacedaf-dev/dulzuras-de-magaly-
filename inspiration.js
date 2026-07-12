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
    "inspiracion-drip-chocolate-01",
    "Torta drip de chocolate con dulces",
    "21426056-cake-6329183.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con drip", "Con topper", "Decoracion cargada"],
    ["chocolate", "marron", "dorado"],
    ["chocolate", "drip", "dulces", "oreo", "trufas", "cumpleanos", "elegante"]
  ),
  inspirationItem(
    "inspiracion-elegante-azul-dorado-01",
    "Torta elegante azul con detalles dorados",
    "5791863de3db00bb54873e4a3a66dc3b.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con topper", "Detalles dorados", "Decoracion alta"],
    ["azul", "dorado", "negro"],
    ["elegante", "masculina", "adulto", "topper", "dorado", "azul"]
  ),
  inspirationItem(
    "inspiracion-cumpleanos-ninos-colorida-01",
    "Torta colorida de cumpleanos infantil",
    "aiky82-happy-birthday-4904779.jpg",
    "Infantil / para ninos",
    "Redonda clasica",
    ["Con topper", "Tematica personalizada", "Con nombre o frase"],
    ["rosado", "amarillo", "celeste", "multicolor"],
    ["infantil", "cumpleanos", "velas", "confeti", "colorida", "ninos"]
  ),
  inspirationItem(
    "inspiracion-corazon-rosado-01",
    "Torta corazon rosada con crema",
    "albertoadan-cake-6313465.jpg",
    "Boda / aniversario",
    "Forma especial a consultar",
    ["Con flores", "Con nombre o frase", "Decoracion simple"],
    ["rosado", "blanco"],
    ["corazon", "romantica", "aniversario", "boda", "rosado", "crema"]
  ),
  inspirationItem(
    "inspiracion-floral-blanca-rustica-01",
    "Torta floral blanca rustica",
    "blandinejoannic-cake-5809638.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con flores", "Solo decorada bonito"],
    ["blanco", "crema", "verde"],
    ["floral", "flores", "rustica", "elegante", "minimalista", "natural"]
  ),
  inspirationItem(
    "inspiracion-boda-mesa-dulce-01",
    "Torta de boda con mesa dulce",
    "blossomadventuresla-wedding-4712408.jpg",
    "Boda / aniversario",
    "Dos pisos",
    ["Con flores", "Con topper", "Detalles dorados"],
    ["blanco", "dorado", "morado"],
    ["boda", "matrimonio", "dos pisos", "mesa dulce", "elegante", "flores"]
  ),
  inspirationItem(
    "inspiracion-naked-chocolate-01",
    "Torta naked de chocolate",
    "christian-agbede-BZZ3trQdaDE-unsplash.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Decoracion simple", "Con topper"],
    ["chocolate", "marron", "dorado"],
    ["naked cake", "chocolate", "simple", "adulto", "dorado", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-pastel-rosado-alto-01",
    "Torta rosada alta con velas",
    "deva-williamson-ntfGWVbBiO0-unsplash.jpg",
    "Cumpleanos",
    "Alta",
    ["Con topper", "Con flores", "Con nombre o frase"],
    ["rosado", "blanco"],
    ["cumpleanos", "alta", "velas", "rosado", "floral", "femenina"]
  ),
  inspirationItem(
    "inspiracion-dos-pisos-marino-01",
    "Torta de dos pisos estilo marino",
    "deva-williamson-ygTzbTHgDnY-unsplash.jpg",
    "Infantil / para ninos",
    "Dos pisos",
    ["Con topper", "Tematica personalizada", "Con figura"],
    ["celeste", "rosado", "azul"],
    ["infantil", "dos pisos", "sirena", "mar", "cola de sirena", "topper"]
  ),
  inspirationItem(
    "inspiracion-floral-celeste-01",
    "Torta celeste con flores pequenas",
    "deva-williamson-ZdQbKYHGn4c-unsplash.jpg",
    "Cumpleanos",
    "Alta",
    ["Con flores", "Solo decorada bonito"],
    ["celeste", "blanco", "rosado"],
    ["flores", "celeste", "alta", "delicada", "cumpleanos", "femenina"]
  ),
  inspirationItem(
    "inspiracion-infantil-mesa-01",
    "Mesa infantil con torta colorida",
    "edvinas-ivanovas-mQ6q-1XAj6A-unsplash.jpg",
    "Infantil / para ninos",
    "Redonda clasica",
    ["Tematica personalizada", "Con topper", "Decoracion cargada"],
    ["celeste", "rosado", "multicolor"],
    ["infantil", "mesa dulce", "cumpleanos", "fiesta", "colorida", "ninos"]
  ),
  inspirationItem(
    "inspiracion-boda-cuadrada-01",
    "Torta cuadrada elegante para boda",
    "emmanuel-yeboah-okine-AkhjZogNJ94-unsplash.jpg",
    "Boda / aniversario",
    "Rectangular",
    ["Con flores", "Detalles dorados", "Con topper"],
    ["blanco", "dorado", "rosado"],
    ["boda", "cuadrada", "rectangular", "flores", "elegante", "matrimonio"]
  ),
  inspirationItem(
    "inspiracion-boda-blanca-01",
    "Torta blanca de boda con flores",
    "garynunnphoto-wedding-5953087.jpg",
    "Boda / aniversario",
    "Redonda clasica",
    ["Con flores", "Con topper", "Detalles dorados"],
    ["blanco", "dorado", "verde"],
    ["boda", "matrimonio", "flores", "elegante", "romantica", "blanca"]
  ),
  inspirationItem(
    "inspiracion-baby-shower-osito-01",
    "Torta baby shower con osito",
    "gruescu-ovidiu-UiJtiiAmJec-unsplash.jpg",
    "Baby shower",
    "Redonda clasica",
    ["Con figura", "Con topper", "Tematica personalizada"],
    ["beige", "crema", "dorado"],
    ["baby shower", "osito", "bebe", "infantil", "figura", "topper"]
  ),
  inspirationItem(
    "inspiracion-futbol-verde-01",
    "Torta de futbol verde",
    "images (1).jpeg",
    "Futbol / deportes",
    "Redonda clasica",
    ["Con topper", "Tematica personalizada", "Con nombre o frase"],
    ["verde", "blanco", "negro"],
    ["futbol", "cancha", "pelota", "deportes", "cumpleanos", "infantil"]
  ),
  inspirationItem(
    "inspiracion-azul-globos-01",
    "Torta azul con globos",
    "images (10).jpeg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con topper", "Detalles dorados", "Decoracion simple"],
    ["azul", "negro", "dorado", "blanco"],
    ["azul", "globos", "dorado", "adulto", "masculina", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-juan-cumpleanos-01",
    "Torta azul para Juan",
    "images (2).jpeg",
    "Cumpleanos",
    "Redonda clasica",
    ["Con topper", "Con nombre o frase"],
    ["blanco", "azul", "dorado"],
    ["cumpleanos", "nombre", "topper", "azul", "adulto", "elegante"]
  ),
  inspirationItem(
    "inspiracion-azul-dorado-alta-01",
    "Torta azul alta con dorado",
    "images (3).jpeg",
    "Adultos / elegante",
    "Alta",
    ["Con topper", "Detalles dorados", "Decoracion cargada"],
    ["azul", "dorado", "negro"],
    ["alta", "elegante", "azul", "dorado", "adulto", "topper"]
  ),
  inspirationItem(
    "inspiracion-tres-pisos-azul-dorado-01",
    "Torta de tres pisos azul y dorada",
    "images (4).jpeg",
    "Adultos / elegante",
    "Forma especial a consultar",
    ["Con topper", "Detalles dorados", "Decoracion cargada"],
    ["azul", "dorado", "blanco"],
    ["tres pisos", "alta", "azul", "dorado", "elegante", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-spiderman-01",
    "Torta tematica de Spiderman",
    "images (5).jpeg",
    "Infantil / para ninos",
    "Dos pisos",
    ["Con topper", "Tematica personalizada", "Con figura"],
    ["rojo", "azul", "negro"],
    ["infantil", "spiderman", "superheroe", "dos pisos", "personaje", "ninos"]
  ),
  inspirationItem(
    "inspiracion-alianza-lima-01",
    "Torta de Alianza Lima",
    "images (6).jpeg",
    "Futbol / deportes",
    "Dos pisos",
    ["Con topper", "Tematica personalizada", "Con nombre o frase"],
    ["azul", "blanco"],
    ["futbol", "alianza lima", "deportes", "dos pisos", "hincha", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-futbol-verde-dos-pisos-01",
    "Torta de futbol con pelota",
    "images (7).jpeg",
    "Futbol / deportes",
    "Dos pisos",
    ["Con topper", "Tematica personalizada", "Con figura"],
    ["verde", "blanco", "dorado"],
    ["futbol", "pelota", "cancha", "dos pisos", "deportes", "ninos"]
  ),
  inspirationItem(
    "inspiracion-futbol-ramon-01",
    "Torta de futbol para Ramon",
    "images (8).jpeg",
    "Futbol / deportes",
    "Dos pisos",
    ["Con topper", "Tematica personalizada", "Con nombre o frase"],
    ["verde", "blanco", "dorado"],
    ["futbol", "pelota", "cancha", "dos pisos", "nombre", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-elegante-azul-negro-01",
    "Torta elegante azul y negra",
    "images (9).jpeg",
    "Adultos / elegante",
    "Dos pisos",
    ["Con topper", "Detalles dorados", "Decoracion cargada"],
    ["azul", "negro", "dorado", "blanco"],
    ["elegante", "masculina", "adulto", "dos pisos", "dorado", "azul"]
  ),
  inspirationItem(
    "inspiracion-50-dorado-01",
    "Torta de 50 anos dorada",
    "images.jpeg",
    "Adultos / elegante",
    "Dos pisos",
    ["Con topper", "Detalles dorados", "Decoracion cargada"],
    ["blanco", "dorado", "negro"],
    ["50 anos", "adulto", "dorado", "elegante", "dos pisos", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-drip-chocolate-fiestera-01",
    "Torta drip de chocolate con velas",
    "intelligentvisualdesing-ai-generated-7958627.png",
    "Cumpleanos",
    "Redonda clasica",
    ["Con drip", "Con topper", "Decoracion cargada"],
    ["chocolate", "marron", "rosado", "multicolor"],
    ["chocolate", "drip", "velas", "confeti", "cumpleanos", "cargada"]
  ),
  inspirationItem(
    "inspiracion-naked-15-01",
    "Torta naked de 15 anos",
    "irina_kukuts-cake-7520086.jpg",
    "Quinceanos",
    "Alta",
    ["Con topper", "Decoracion simple"],
    ["crema", "marron", "dorado"],
    ["15 anos", "quinceanos", "naked cake", "alta", "cumpleanos", "dorado"]
  ),
  inspirationItem(
    "inspiracion-boda-minimalista-01",
    "Torta de boda minimalista",
    "jonathan-borba-cg8DMQbNjhw-unsplash.jpg",
    "Boda / aniversario",
    "Redonda clasica",
    ["Con flores", "Solo decorada bonito"],
    ["blanco", "verde", "crema"],
    ["boda", "minimalista", "flores", "elegante", "romantica", "blanco"]
  ),
  inspirationItem(
    "inspiracion-bautizo-floral-01",
    "Torta delicada para bautizo",
    "jonathan-borba-wR1U0TmO4ao-unsplash.jpg",
    "Bautizo / primera comunion",
    "Alta",
    ["Con flores", "Solo decorada bonito"],
    ["blanco", "rosado", "verde"],
    ["bautizo", "flores", "delicada", "alta", "blanca", "infantil"]
  ),
  inspirationItem(
    "inspiracion-blanca-perlas-01",
    "Torta blanca con perlas",
    "julie-sd-XIwGEuoIn2I-unsplash.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Detalles dorados", "Solo decorada bonito"],
    ["blanco", "dorado"],
    ["elegante", "perlas", "blanco", "dorado", "adulto", "minimalista"]
  ),
  inspirationItem(
    "inspiracion-chocolate-frutas-01",
    "Torta de chocolate con frutas",
    "karina-kungla-yu9JZAW_TgE-unsplash.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con drip", "Decoracion cargada"],
    ["chocolate", "marron", "dorado"],
    ["chocolate", "frutas", "drip", "elegante", "cumpleanos", "adulto"]
  ),
  inspirationItem(
    "inspiracion-drip-frutas-01",
    "Torta drip con frutas y chocolate",
    "kumarsu6745-birthday-cake-10107405.jpg",
    "Cumpleanos",
    "Redonda clasica",
    ["Con drip", "Con topper", "Decoracion cargada"],
    ["blanco", "chocolate", "amarillo"],
    ["drip", "frutas", "chocolate", "cumpleanos", "cargada", "topper"]
  ),
  inspirationItem(
    "inspiracion-boda-tres-pisos-flores-01",
    "Torta de boda de tres pisos con flores",
    "mads-eneqvist-Xb5c2x6wJPc-unsplash.jpg",
    "Boda / aniversario",
    "Forma especial a consultar",
    ["Con flores", "Con topper", "Decoracion cargada"],
    ["blanco", "rosado", "verde"],
    ["boda", "tres pisos", "flores", "romantica", "matrimonio", "alta"]
  ),
  inspirationItem(
    "inspiracion-80-chocolate-01",
    "Torta de 80 anos en chocolate",
    "mishelved-happy-birthday-3756379.jpg",
    "Adultos / elegante",
    "Alta",
    ["Con topper", "Con drip", "Decoracion cargada"],
    ["chocolate", "marron", "dorado"],
    ["80 anos", "adulto mayor", "chocolate", "drip", "alta", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-drip-morado-01",
    "Torta drip morada elegante",
    "nastia-petruk-jzKvNRV9gPU-unsplash.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con drip", "Con topper", "Decoracion simple"],
    ["morado", "rosado", "chocolate"],
    ["drip", "morado", "elegante", "adulto", "cumpleanos", "vino"]
  ),
  inspirationItem(
    "inspiracion-chocolate-morado-01",
    "Torta morada con chocolate",
    "nusrat-kaniz-fahima-cake-8988890.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con drip", "Solo decorada bonito"],
    ["morado", "chocolate", "negro"],
    ["morado", "drip", "chocolate", "elegante", "adulto", "oscura"]
  ),
  inspirationItem(
    "inspiracion-drip-chocolate-vintage-01",
    "Torta drip de chocolate con frutas",
    "parej-richard--OStt1jqtP8-unsplash (1).jpg",
    "Cumpleanos",
    "Redonda clasica",
    ["Con drip", "Decoracion cargada"],
    ["chocolate", "blanco", "rosado"],
    ["drip", "chocolate", "frutas", "cumpleanos", "cargada", "crema"]
  ),
  inspirationItem(
    "inspiracion-drip-chocolate-vintage-02",
    "Torta drip de chocolate con velas",
    "parej-richard--OStt1jqtP8-unsplash.jpg",
    "Cumpleanos",
    "Redonda clasica",
    ["Con drip", "Con topper", "Decoracion cargada"],
    ["chocolate", "blanco", "rosado"],
    ["drip", "chocolate", "velas", "cumpleanos", "cargada", "crema"]
  ),
  inspirationItem(
    "inspiracion-negra-corona-01",
    "Torta negra elegante con corona",
    "pexels-ab-pixels-ng-33802568.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con topper", "Detalles dorados", "Decoracion cargada"],
    ["negro", "dorado"],
    ["negra", "corona", "elegante", "adulto", "dorado", "lujo"]
  ),
  inspirationItem(
    "inspiracion-boda-romantica-01",
    "Torta romantica para boda",
    "pexels-aitizaz-naqvi-3660550-5487950.jpg",
    "Boda / aniversario",
    "Redonda clasica",
    ["Con flores", "Con topper", "Detalles dorados"],
    ["blanco", "rosado", "dorado"],
    ["boda", "flores", "romantica", "matrimonio", "elegante", "perlas"]
  ),
  inspirationItem(
    "inspiracion-boda-rosada-dos-pisos-01",
    "Torta rosada de boda",
    "pexels-aryapandusedjati-2486819-34833097.jpg",
    "Boda / aniversario",
    "Dos pisos",
    ["Con flores", "Detalles dorados", "Decoracion cargada"],
    ["rosado", "blanco", "dorado"],
    ["boda", "dos pisos", "flores", "romantica", "rosado", "elegante"]
  ),
  inspirationItem(
    "inspiracion-celeste-delicada-01",
    "Torta celeste delicada",
    "pexels-beyza-555707524-22483794.jpg",
    "Cumpleanos",
    "Redonda clasica",
    ["Solo decorada bonito", "Con topper"],
    ["celeste", "blanco", "dorado"],
    ["celeste", "delicada", "cumpleanos", "minimalista", "adulto", "perlas"]
  ),
  inspirationItem(
    "inspiracion-infantil-primer-ano-01",
    "Torta infantil de primer ano",
    "pexels-brendo-boyose-862335849-29249488.jpg",
    "Infantil / para ninos",
    "Dos pisos",
    ["Con topper", "Con figura", "Tematica personalizada"],
    ["celeste", "amarillo", "naranja"],
    ["infantil", "primer ano", "bebe", "personaje", "dos pisos", "colorida"]
  ),
  inspirationItem(
    "inspiracion-bautizo-celeste-01",
    "Torta celeste de bautizo",
    "pexels-brunogobofoto-5365898.jpg",
    "Bautizo / primera comunion",
    "Redonda clasica",
    ["Con topper", "Solo decorada bonito"],
    ["celeste", "blanco", "dorado"],
    ["bautizo", "primer ano", "celeste", "delicada", "topper", "ninos"]
  ),
  inspirationItem(
    "inspiracion-chocolate-floral-01",
    "Torta de chocolate con flores",
    "pexels-chente8888-17029579.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con flores", "Con drip", "Decoracion simple"],
    ["chocolate", "marron", "blanco"],
    ["chocolate", "flores", "drip", "elegante", "adulto", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-amarilla-dorada-01",
    "Torta amarilla con esferas doradas",
    "pexels-itay-weissman-3616837-5691261.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con topper", "Detalles dorados", "Decoracion cargada"],
    ["amarillo", "dorado", "blanco"],
    ["dorado", "esferas", "adulto", "cumpleanos", "elegante", "amarillo"]
  ),
  inspirationItem(
    "inspiracion-boda-blanca-roja-01",
    "Torta blanca de boda con detalle rojo",
    "pexels-jorgegonzalez-34682464.jpg",
    "Boda / aniversario",
    "Dos pisos",
    ["Con flores", "Detalles dorados", "Decoracion simple"],
    ["blanco", "rojo", "dorado"],
    ["boda", "dos pisos", "flores", "elegante", "matrimonio", "rojo"]
  ),
  inspirationItem(
    "inspiracion-primer-ano-dorado-01",
    "Torta de primer ano con dorado",
    "pexels-julianemonarifotografia-30873493.jpg",
    "Infantil / para ninos",
    "Redonda clasica",
    ["Con topper", "Detalles dorados", "Solo decorada bonito"],
    ["blanco", "dorado", "beige"],
    ["primer ano", "infantil", "dorado", "topper", "bebe", "elegante"]
  ),
  inspirationItem(
    "inspiracion-hombre-chocolate-01",
    "Torta negra para hombre",
    "pexels-kenzero14-30921386.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con topper", "Con nombre o frase", "Decoracion cargada"],
    ["negro", "blanco", "chocolate"],
    ["masculina", "hombre", "chocolate", "adulto", "cumpleanos", "negra"]
  ),
  inspirationItem(
    "inspiracion-boda-blanca-dos-pisos-01",
    "Torta blanca de boda de dos pisos",
    "pexels-leticiacurveloph-28954461.jpg",
    "Boda / aniversario",
    "Dos pisos",
    ["Con flores", "Solo decorada bonito"],
    ["blanco", "verde", "crema"],
    ["boda", "dos pisos", "flores", "minimalista", "elegante", "matrimonio"]
  ),
  inspirationItem(
    "inspiracion-blanca-negra-corazones-01",
    "Torta blanca con corazones negros",
    "pexels-marcelochagas-35130066.jpg",
    "Boda / aniversario",
    "Redonda clasica",
    ["Con topper", "Con nombre o frase", "Decoracion simple"],
    ["blanco", "negro", "rojo"],
    ["corazones", "romantica", "aniversario", "cumpleanos", "blanco", "negro"]
  ),
  inspirationItem(
    "inspiracion-floral-mini-01",
    "Torta floral pequena",
    "pexels-moonlightshotz-10819692.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con flores", "Solo decorada bonito"],
    ["blanco", "rosado", "verde"],
    ["flores", "minimalista", "pequena", "elegante", "adulto", "pastel"]
  ),
  inspirationItem(
    "inspiracion-floral-colores-01",
    "Torta floral con colores calidos",
    "pexels-rachel-claire-5531630.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con flores", "Solo decorada bonito"],
    ["blanco", "rojo", "amarillo", "verde"],
    ["floral", "flores", "natural", "adulto", "elegante", "rustica"]
  ),
  inspirationItem(
    "inspiracion-boda-minimalista-alta-01",
    "Torta de boda minimalista alta",
    "pexels-rebornfilmes-31280443.jpg",
    "Boda / aniversario",
    "Alta",
    ["Con flores", "Solo decorada bonito"],
    ["blanco", "verde"],
    ["boda", "alta", "minimalista", "flores", "elegante", "matrimonio"]
  ),
  inspirationItem(
    "inspiracion-drip-negra-01",
    "Torta drip negra elegante",
    "pexels-romario-d-silva-2705561-5644341.jpg",
    "Adultos / elegante",
    "Alta",
    ["Con drip", "Con topper", "Decoracion cargada"],
    ["negro", "blanco", "chocolate"],
    ["drip", "negra", "elegante", "alta", "adulto", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-drip-amarillo-01",
    "Torta drip amarilla moderna",
    "pexels-rulynurulihsan-30664029.jpg",
    "Cumpleanos",
    "Alta",
    ["Con drip", "Con topper", "Decoracion simple"],
    ["amarillo", "negro", "blanco"],
    ["drip", "amarillo", "moderna", "alta", "cumpleanos", "adulto"]
  ),
  inspirationItem(
    "inspiracion-18-drip-negro-01",
    "Torta de 18 anos con drip",
    "pexels-shreesha-bhat-66739625-8777520.jpg",
    "Cumpleanos",
    "Redonda clasica",
    ["Con drip", "Con topper", "Decoracion cargada"],
    ["negro", "dorado", "blanco"],
    ["18 anos", "drip", "dorado", "cumpleanos", "adulto", "elegante"]
  ),
  inspirationItem(
    "inspiracion-25-lila-01",
    "Torta lila de 25 anos",
    "pexels-srijit-mudi-31301853-31793674.jpg",
    "Cumpleanos",
    "Dos pisos",
    ["Con topper", "Con flores", "Detalles dorados"],
    ["lila", "morado", "dorado", "blanco"],
    ["25 anos", "lila", "flores", "dos pisos", "cumpleanos", "femenina"]
  ),
  inspirationItem(
    "inspiracion-azul-estrellas-01",
    "Torta azul con estrellas",
    "pexels-sumcig-36828149.jpg",
    "Cumpleanos",
    "Redonda clasica",
    ["Con topper", "Detalles dorados", "Solo decorada bonito"],
    ["azul", "dorado", "negro"],
    ["azul", "estrellas", "dorado", "cumpleanos", "elegante", "adulto"]
  ),
  inspirationItem(
    "inspiracion-frutas-fresa-01",
    "Torta con fresas y crema",
    "pexels-tran-duy-anh-550498125-34702112.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con frutas", "Decoracion simple"],
    ["blanco", "rojo", "crema"],
    ["fresa", "frutas", "crema", "simple", "adulto", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-boda-topper-01",
    "Torta de boda con topper",
    "pexels-vidalbalielojrfotografia-14515159.jpg",
    "Boda / aniversario",
    "Dos pisos",
    ["Con topper", "Con flores", "Decoracion simple"],
    ["blanco", "dorado"],
    ["boda", "topper", "dos pisos", "matrimonio", "elegante", "blanca"]
  ),
  inspirationItem(
    "inspiracion-boda-flores-rosadas-01",
    "Torta de boda con flores rosadas",
    "pexels-westernsydneyweddings-10442381.jpg",
    "Boda / aniversario",
    "Dos pisos",
    ["Con flores", "Detalles dorados", "Decoracion cargada"],
    ["blanco", "rosado", "dorado"],
    ["boda", "dos pisos", "flores", "rosado", "romantica", "matrimonio"]
  ),
  inspirationItem(
    "inspiracion-chocolate-alta-01",
    "Torta alta de chocolate",
    "pexels-zeynep-ongel-567494358-17118264.jpg",
    "Adultos / elegante",
    "Alta",
    ["Con drip", "Decoracion simple"],
    ["chocolate", "marron", "negro"],
    ["chocolate", "alta", "drip", "simple", "adulto", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-azul-elegante-01",
    "Torta azul elegante con flores",
    "pexels-zeynep-ongel-567494358-33010504.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con flores", "Con topper", "Solo decorada bonito"],
    ["azul", "blanco", "dorado"],
    ["azul", "flores", "elegante", "adulto", "cumpleanos", "topper"]
  ),
  inspirationItem(
    "inspiracion-boda-blanca-flores-02",
    "Torta blanca con flores para boda",
    "picfoods-cake-3864141.jpg",
    "Boda / aniversario",
    "Dos pisos",
    ["Con flores", "Solo decorada bonito"],
    ["blanco", "verde"],
    ["boda", "dos pisos", "flores", "blanca", "elegante", "matrimonio"]
  ),
  inspirationItem(
    "inspiracion-chocolate-cerezas-01",
    "Torta de chocolate con cerezas",
    "thanhcktctv-cake-5344574.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con drip", "Con frutas", "Decoracion simple"],
    ["chocolate", "marron", "rojo"],
    ["chocolate", "cerezas", "frutas", "drip", "adulto", "cumpleanos"]
  ),
  inspirationItem(
    "inspiracion-blanca-simple-01",
    "Torta blanca simple",
    "tommao-wang-R4vBFsQ7Of0-unsplash.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Decoracion simple", "Solo decorada bonito"],
    ["blanco", "crema"],
    ["simple", "minimalista", "blanca", "adulto", "cumpleanos", "elegante"]
  ),
  inspirationItem(
    "inspiracion-hombre-azul-dorado-01",
    "Torta masculina azul y dorada",
    "torta-crema-buttercream-hombre-1-441x441.png",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con topper", "Detalles dorados", "Decoracion cargada"],
    ["azul", "dorado", "blanco"],
    ["masculina", "hombre", "azul", "dorado", "cumpleanos", "adulto"]
  ),
  inspirationItem(
    "inspiracion-hombre-drip-01",
    "Torta masculina con drip",
    "torta-hombre.jpg",
    "Adultos / elegante",
    "Redonda clasica",
    ["Con drip", "Con topper", "Detalles dorados"],
    ["chocolate", "dorado", "blanco"],
    ["masculina", "hombre", "drip", "dorado", "cumpleanos", "adulto"]
  ),
  inspirationItem(
    "inspiracion-boda-mesa-postres-01",
    "Mesa de boda con torta y postres",
    "vaclavzavada-wedding-5110339.jpg",
    "Boda / aniversario",
    "Redonda clasica",
    ["Con flores", "Mesa dulce", "Decoracion cargada"],
    ["blanco", "rojo", "verde"],
    ["boda", "mesa dulce", "postres", "flores", "matrimonio", "evento"]
  )
];
