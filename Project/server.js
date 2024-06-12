import express from "express";
import cors from "cors";
import reviewsRouter from "./api/reviews.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/reviews", reviewsRouter);

app.use("*", (req, res) =>
  res.status(404).json({ error: "Endpoint not found" })
);

export default app;
