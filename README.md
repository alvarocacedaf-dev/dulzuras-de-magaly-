PAGINA WEB MAGALY'S
===================

Archivos incluidos:
- index.html  -> estructura de la pagina
- css/style.css   -> diseno, colores y responsividad
- js/script.js   -> precios, opciones, calculadora, validacion y WhatsApp
- assets/     -> carpeta sugerida para fotos reales

COMO ABRIR LA PAGINA
1. Abre index.html con Google Chrome.
2. Prueba el cotizador de tortas, postres y buffet.
3. Completa nombre y telefono antes de enviar por WhatsApp.

FOTOS REALES
Crea una carpeta llamada assets y coloca estas imagenes:
- assets/inicio/hero-torta.jpg
- assets/inicio/torta-1.jpg
- assets/inicio/postres-1.jpg
- assets/inicio/buffet-1.jpg

Si una foto no existe, la pagina muestra un espacio reservado para que puedas reemplazarla despues.

DONDE CAMBIAR PRECIOS
Abre js/script.js y modifica estas listas:
- cakeThemes: precios extra por tematica
- cakeServings: precio base por cantidad de personas
- cakeFillings: precios extra por relleno
- decorationLevels: precios extra por decoracion
- desserts: precios de postres
- buffetOptions: precio por persona del buffet
- deliveryPrice: precio referencial de delivery

DONDE CAMBIAR EL WHATSAPP
En js/script.js busca:
const WHATSAPP_NUMBER = "51942666255";

Usa formato Peru:
51 + numero de celular
Ejemplo:
51987654321

PUBLICACION RECOMENDADA
- GitHub: guarda el proyecto y lleva historial de cambios.
- Vercel: publica gratis la web estatica y te da una URL para compartir.
- GitHub Pages: tambien sirve si quieres la opcion mas simple.

PREPARAR DISEÑO CON IA
- Esta opcion no genera imagenes nuevas ni consume saldo de OpenAI.
- Busca hasta 2 referencias internas que coincidan en 80% o mas con las
  caracteristicas que el cliente marco en el formulario.
- Las referencias viven en js/inspiration.js y apuntan a fotos guardadas en assets.
- Para agregar nuevas fotos de internet o referencias, colocalas en:
  assets/inspiracion/
- Luego abre js/inspiration.js y agrega una entrada con titulo, ruta de imagen y
  etiquetas. Mientras mejores sean las etiquetas, mejor sera la busqueda.
- Si no hay coincidencias suficientes, la pagina muestra:
  "No se encontro una referencia con esas caracteristicas aun."

CARPETA DE INSPIRACION
Existe una guia en:
docs/guia-de-inspiracion.txt

IMPORTANTE
Los precios son referenciales. El cliente debe confirmar fecha, diseno, disponibilidad y precio final por WhatsApp.
