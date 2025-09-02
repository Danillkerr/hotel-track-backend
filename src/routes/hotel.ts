import { Router } from "express";

const router = Router();

router.get("/bookings", (req, res) => {
  res.status(200).json({ message: "Bookings route" });
});

export default router;
