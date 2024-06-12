import express from "express";
import server from "./server.js";
import mongoose from "mongoose";
import ReviewsDAo from "/dao/reviewsDAO.js";
const app = express();

mongoose
  .connect("mongodb://localhost:27017/ReviewsAPI")
  .then(async (client) => {
    await ReviewsDAo.injectDB(client);
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => console.error("Could not connect to MongoDB:", err));

app.use(express.json());
app.use(server);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
