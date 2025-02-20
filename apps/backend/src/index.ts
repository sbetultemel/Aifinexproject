import express from "express";
import cors from "cors";
import dotenv from "dotenv"; // .env desteği
import router from "./routes/api"; // Router'ı içe aktar

dotenv.config(); // .env dosyasını yükle

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // CORS middleware ekle
app.use(express.json()); // JSON desteği ekle
app.use("/api", router); // Router'ı "/api" altında bağla

// Varsayılan bir endpoint ekleyelim (Server kontrolü için)
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
