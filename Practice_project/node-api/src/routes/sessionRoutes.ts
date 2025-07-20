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

export default router;
