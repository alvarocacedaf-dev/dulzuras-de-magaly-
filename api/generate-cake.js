const IMAGE_MODEL = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1";
const MAX_TEXT_LENGTH = 1200;

function cleanText(value) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_TEXT_LENGTH);
}

function buildPrompt(cake = {}, clientPrompt = "") {
  const details = [
    `Temática: ${cleanText(cake.theme) || "no indicada"}`,
    `Tamaño: ${cleanText(cake.serving) || "no indicado"}`,
    `Sabor: ${cleanText(cake.flavor) || "no indicado"}`,
    `Relleno: ${cleanText(cake.filling) || "no indicado"}`,
    `Decoración: ${cleanText(cake.decoration) || "no indicada"}`,
    `Forma y estilo: ${cleanText(cake.shapeName) || "no indicado"}`,
    cleanText(cake.cakeMessage) ? `Texto solicitado: ${cleanText(cake.cakeMessage)}` : "",
    cleanText(cake.notes) ? `Detalles adicionales: ${cleanText(cake.notes)}` : ""
  ].filter(Boolean);

  const basePrompt = [
    "Fotografía realista de una torta personalizada hecha por una pastelería artesanal peruana.",
    "La torta debe verse real, comestible y posible de preparar en una pastelería pequeña.",
    "Usa una presentación limpia en mesa clara o caja de repostería, con luz natural suave.",
    "Evita objetos imposibles, exceso de decoración, manos deformes, texto ilegible y elementos fuera de escala.",
    "No agregues marcas comerciales si el cliente no las pidió explícitamente.",
    "Características del pedido:",
    details.join("\n")
  ].join("\n");

  const extraPrompt = cleanText(clientPrompt);
  return extraPrompt ? `${basePrompt}\n\nResumen del formulario:\n${extraPrompt}` : basePrompt;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Usa POST para generar la imagen." });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: "Falta configurar OPENAI_API_KEY en Vercel para activar la generación con IA."
    });
  }

  const { cake = {}, prompt = "" } = req.body || {};
  const safePrompt = buildPrompt(cake, prompt);

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: IMAGE_MODEL,
        prompt: safePrompt,
        size: "1024x1024",
        n: 1
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "No se pudo generar la imagen."
      });
    }

    const image = data.data?.[0]?.b64_json;

    if (!image) {
      return res.status(502).json({
        error: "La IA no devolvió una imagen válida."
      });
    }

    return res.status(200).json({ image, mimeType: "image/png" });
  } catch (error) {
    return res.status(500).json({
      error: "No se pudo conectar con el servicio de IA. Intenta nuevamente."
    });
  }
};
