// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import sessionRoutes from "./routes/sessionRoutes";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json());

// //Setting routes
// // app.use("/api/sessions", sessionRoutes);
// app.use("/api", sessionRoutes);

// app.listen(port, () => {
//   console.log(`HEY LISTEN! API running at https://localhost:${port}`);
// });

import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import sessionRoutes from "./routes/sessionRoutes.js";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 4000; //defaulting to 4000

app.use(cors());
app.use(express.json());

app.use("/api", sessionRoutes);

app.listen(port, () => {
  console.log(`HEY LISTEN! API is running at ::: http://localhost:${port}`);
});
