import express from "express";
import * as productController from "../controllers/productController.js";
const router = express.Router();

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.postProducts);

export default router;
