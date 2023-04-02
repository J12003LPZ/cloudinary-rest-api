import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  res.send("Cloudinary API is running!");
});

export default router;
