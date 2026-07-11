PAGINA WEB MAGALY'S
===================

Archivos incluidos:
- index.html  -> estructura de la pagina
- style.css   -> diseno, colores y responsividad
- script.js   -> precios, opciones, calculadora, validacion y WhatsApp
- assets/     -> carpeta sugerida para fotos reales

COMO ABRIR LA PAGINA
1. Abre index.html con Google Chrome.
2. Prueba el cotizador de tortas, postres y buffet.
3. Completa nombre y telefono antes de enviar por WhatsApp.

FOTOS REALES
Crea una carpeta llamada assets y coloca estas imagenes:
- assets/hero-torta.jpg
- assets/torta-1.jpg
- assets/postres-1.jpg
- assets/buffet-1.jpg

Si una foto no existe, la pagina muestra un espacio reservado para que puedas reemplazarla despues.

DONDE CAMBIAR PRECIOS
Abre script.js y modifica estas listas:
- cakeThemes: precios extra por tematica
- cakeServings: precio base por cantidad de personas
- cakeFillings: precios extra por relleno
- decorationLevels: precios extra por decoracion
- desserts: precios de postres
- buffetOptions: precio por persona del buffet
- deliveryPrice: precio referencial de delivery

DONDE CAMBIAR EL WHATSAPP
En script.js busca:
const WHATSAPP_NUMBER = "51942666255";

Usa formato Peru:
51 + numero de celular
Ejemplo:
51987654321

PUBLICACION RECOMENDADA
- GitHub: guarda el proyecto y lleva historial de cambios.
- Vercel: publica gratis la web estatica y te da una URL para compartir.
- GitHub Pages: tambien sirve si quieres la opcion mas simple.

GENERAR TORTA CON IA
- Esta opcion esta pensada para funcionar en Vercel.
- En Vercel, entra a Project Settings > Environment Variables.
- Agrega OPENAI_API_KEY con tu clave de OpenAI.
- Opcional: agrega OPENAI_IMAGE_MODEL para cambiar el modelo de imagenes.
- En local, esta funcion no corre con un servidor estatico simple; usala desplegada
  en Vercel o con el comando vercel dev.
- Las fotos de internet no se usan para "entrenar" directamente. Lo recomendable es
  usarlas como referencias permitidas o, mejor aun, usar fotos propias de Dulzuras
  de Magaly como catalogo interno.

IMPORTANTE
Los precios son referenciales. El cliente debe confirmar fecha, diseno, disponibilidad y precio final por WhatsApp.
