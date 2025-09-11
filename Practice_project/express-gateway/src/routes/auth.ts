import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

//Login
router.post("/login", (request, response) => {
  //extract credentials
  const { username, password } = request.body;

  //bypass for demo
  if (username === "demo" && password === "password") {
    const token = jwt.sign(
      { sub: username, role: "USER" },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );

    return response.json({ token });
  }

  //TODO:: hit laravel and do some magic
});
