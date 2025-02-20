import express from "express";
import cors from "cors";
import router from "./routes/api"; // ✅ Doğru içe aktarma

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", router); // ✅ Router'ı "/api" altında bağladık

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
