import express from "express";
import type { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";

import hotelRouter from "./routes/hotel.js";
import authRouter from "./routes/auth.js";

dotenv.config();

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8080;
const mongodb: string = process.env.DB_URL || "";
const corsOrigin: string = process.env.CORS_ORIGIN || "";

const app = express();

app.use(express.json());
app.use(cors({ origin: corsOrigin }));

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server is running!" });
});

app.use("/api/hotel", hotelRouter);
app.use("/api/auth", authRouter);

mongoose
  .connect(mongodb)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });
