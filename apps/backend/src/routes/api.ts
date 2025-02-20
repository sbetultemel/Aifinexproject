import { Router, Request, Response } from "express";

const router = Router();

// Ana sayfa testi
router.get("/", (req: Request, res: Response) => {
  res.send("API Çalışıyor!");
});

// Chat endpoint'i
router.post("/chat", (req: Request, res: Response) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: "Girdi eksik!" });
  }

  res.json({ message: `AI'nin yanıtı: ${input}` });
});

export default router;
