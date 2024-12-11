import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

app.use(express.json());

app.use("/", (req, res) => {
  res.send("hello world");
});

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

const PORT = 5000; // Define the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
