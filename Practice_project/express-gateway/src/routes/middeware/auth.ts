import { type Request, type Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authenticateJWT(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Missing or invalid token",
    });
  }

  const token = authHeader.split(" ")[1] || " ";

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);

    (req as any).user = payload; //attaching user info
    next();
  } catch (error) {
    return res.status(403).json({
      error: "Invalid token",
    });
  }
}
