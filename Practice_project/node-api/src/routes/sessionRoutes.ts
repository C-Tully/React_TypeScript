import { Router } from "express";

const router = Router();

//Public route: return 5 random sessions for tests take

router.get("/random", (req, res) => {
  //Mock data for now
  const mockData = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Session ${i + 1}`,
    content: `Lorem ipsum dollar ${i + 1}`,
  }));
  res.json(mockData);
});

router.post("/login", (req, res) => {
  console.log("node-api::sessionRoutes::post::");
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  // Mock login logic
  const user = {
    id: "12345",
    privilidge: "ADMIN", // Or "USER", depending on your logic
  };

  console.log("node-api::sending user:", user);
  return res.status(200).json(user);
});

export default router;
