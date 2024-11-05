import express from "express";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Configuración del limitador de solicitudes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100,
  message:
    "Demasiadas solicitudes desde esta IP, por favor intenta de nuevo después de un tiempo.",
});

// Aplicar el limitador a todas las rutas
app.use(limiter);

const apiKey = process.env.VITE_FIREBASE_API_KEY;

// Definir una ruta de ejemplo
app.get("/", (req, res) => {
  res.send(`¡Bienvenido a la API! API Key: ${apiKey}`);
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
