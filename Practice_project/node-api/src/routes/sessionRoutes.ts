// import { Router } from "express";

// const router = Router();

// //Sorted in alphabetical order

// router.post("/login", (req, res) => {
//   console.log("node-api::sessionRoutes::post::");
//   const { username } = req.body;

//   if (!username) {
//     return res.status(400).json({ message: "Username is required" });
//   }

//   const user = {
//     id: "12345",
//     privilidge: "ADMIN",
//   };

//   return res.status(200).json(user);
// });

// router.post("/logout ", (req, res) => {
//   console.log("node-api::sessionRoutes::post::");
//   const { username } = req.body;

//   if (!username) {
//     return res.status(400).json({ message: "Username is required" });
//   }

//   const user = {
//     id: "12345",
//     privilidge: "ADMIN",
//   };

//   return res.status(200).json(user);
// });

// router.get("/random", (req, res) => {
//   //Mock data for now
//   const mockData = Array.from({ length: 5 }, (_, i) => ({
//     id: i + 1,
//     title: `Session ${i + 1}`,
//     content: `Lorem ipsum dollar ${i + 1}`,
//   }));
//   res.json(mockData);
// });

// router.get("/posts", (req, res) => {
//   //Mock data for now
//   const mockData = Array.from({ length: 5 }, (_, i) => ({
//     id: i + 1,
//     title: `Session ${i + 1}`,
//     content: `Lorem ipsum dollar ${i + 1}`,
//   }));
//   res.json(mockData);
// });

// router.get("/users", (req, res) => {
//   //Mock data for now
//   const mockData = Array.from({ length: 5 }, (_, i) => ({
//     id: i + 1,
//     title: `Session ${i + 1}`,
//     content: `Lorem ipsum dollar ${i + 1}`,
//   }));
//   res.json(mockData);
// });

// export default router;

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

export default router;
