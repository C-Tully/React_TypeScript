import { Router, Request, Response } from "express";

const router = Router();

router.get("/posts", (req: Request, res: Response) => {});
router.get("", (req: Request, res: Response) => {});

router.post("/logout ", (req: Request, res: Response) => {
  console.log("node-api::sessionRoutes::post::");
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  const user = {
    id: "12345",
    privilidge: "ADMIN",
  };

  return res.status(200).json(user);
});

router.post("/edit", (req: Request, res: Response) => {
  const { userId, newData } = req.body;
  res.json({ message: `Editing user ${userId}`, data: newData });
});

router.post("/login", (req: Request, res: Response) => {
  console.log("node-api::sessionRoutes::post::");
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  const user = {
    id: "12345",
    privilidge: "ADMIN",
  };

  return res.status(200).json(user);
});

export default router;
