import express from "express";
import morgan from "morgan";
import productRouter from "./routes/productRoutes.js";
const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/product", productRouter);

export default app;
