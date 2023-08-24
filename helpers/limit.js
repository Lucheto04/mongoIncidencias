import { rateLimit } from "express-rate-limit";

const limitSize = (req, res, next) => {
  const payloadSizeLimit = 200;
  const contentLength = req.headers["content-length"];
  if (contentLength > payloadSizeLimit) {
    return res.status(413).json({
      message: "El objeto que esta mandando supera el limite de tamaño, cambielo",
    });
  }
  next();
};

const limitPets = rateLimit({
  windowMs: 30 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: true,
  message: {
    message: "Pailas menor, no puede solicitar tanto >:C",
  },
});
export { limitSize, limitPets };