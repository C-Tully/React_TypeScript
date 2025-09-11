import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
const portNum = process.env.PORT || 4000;
const CORS_ORIGIN = "http://localhost:5173"; //This may need adjusting for dev server.

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

//Routes
app.use("/auth", authRoutes);

app.get("/heart-beat", (__req, res) => {
  res.json({
    status: "ok",
    service: "express-gateway",
  });
});

app.listen(portNum, () => {
  console.log(`express-gateway running at :: ${portNum}`);
});
