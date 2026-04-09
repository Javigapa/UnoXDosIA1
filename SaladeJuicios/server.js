/**
 * PROXY BACKEND — Sala de Juicios
 * Usa la API de Groq (GRATUITA) como juez.
 *
 * Instalación:
 *   npm install express cors dotenv
 *
 * Uso local:
 *   1. Copia .env.example como .env y pon tu GROQ_API_KEY
 *   2. node server.js
 *
 * Uso en producción (Render / Railway / VPS):
 *   - Sube esta carpeta
 *   - Añade la variable de entorno GROQ_API_KEY
 *   - El start command es: node server.js
 *
 * API key gratuita en: https://console.groq.com (sin tarjeta de crédito)
 */

require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Configuración ────────────────────────────────────────────
const GROQ_API_KEY   = process.env.GROQ_API_KEY;
const GROQ_MODEL     = 'llama-3.3-70b-versatile'; // Modelo gratuito más capaz de Groq
const GROQ_ENDPOINT  = 'https://api.groq.com/openai/v1/chat/completions';
const DAILY_LIMIT    = 20;   // Llamadas por IP por día. 0 = sin límite.
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';
// ─────────────────────────────────────────────────────────────

if (!GROQ_API_KEY) {
  console.error('❌  Falta GROQ_API_KEY en las variables de entorno.');
  console.error('   Consíguela gratis en https://console.groq.com');
  process.exit(1);
}

// ── Rate limiting en memoria ─────────────────────────────────
const ipCounters = new Map();

function checkRateLimit(ip) {
  if (DAILY_LIMIT === 0) return true;
  const now   = Date.now();
  const entry = ipCounters.get(ip);
  if (!entry || now > entry.resetAt) {
    ipCounters.set(ip, { count: 1, resetAt: now + 24 * 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= DAILY_LIMIT) return false;
  entry.count++;
  return true;
}

// Limpiar entradas expiradas cada hora
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of ipCounters)
    if (now > entry.resetAt) ipCounters.delete(ip);
}, 60 * 60 * 1000);

// ── Middleware ───────────────────────────────────────────────
app.use(cors({ origin: ALLOWED_ORIGIN, methods: ['POST'] }));
app.use(express.json({ limit: '50kb' }));

// ── Ruta del proxy ───────────────────────────────────────────
app.post('/api/judge', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.ip;

  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      error: 'Has alcanzado el límite de partidas por hoy. Vuelve mañana.',
    });
  }

  const { system, messages, max_tokens } = req.body;

  if (!messages || !Array.isArray(messages) || !messages.length) {
    return res.status(400).json({ error: 'Petición inválida.' });
  }

  // Groq usa el formato OpenAI: el system prompt va como primer mensaje con role "system"
  const groqMessages = [
    { role: 'system', content: system || '' },
    ...messages,
  ];

  try {
    const response = await fetch(GROQ_ENDPOINT, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model:      GROQ_MODEL,
        max_tokens: max_tokens || 1000,
        messages:   groqMessages,
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Groq API error:', data);
      return res.status(response.status).json({
        error: data.error?.message || 'Error de la API de Groq.',
      });
    }

    // Devolvemos la respuesta en el mismo formato que espera el juego
    const text = data.choices?.[0]?.message?.content || 'El magistrado guarda silencio.';
    res.json({ content: [{ type: 'text', text }] });

  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

// Health check
app.get('/health', (_req, res) => res.json({ status: 'ok', model: GROQ_MODEL }));

app.listen(PORT, () => {
  console.log(`✅  Proxy Groq escuchando en http://localhost:${PORT}`);
  console.log(`   Modelo: ${GROQ_MODEL}`);
  console.log(`   Rate limit: ${DAILY_LIMIT === 0 ? 'desactivado' : `${DAILY_LIMIT} llamadas/IP/día`}`);
  console.log(`   Origin: ${ALLOWED_ORIGIN}`);
});
