import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

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
