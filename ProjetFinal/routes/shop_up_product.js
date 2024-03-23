import express from "express";
import { getProducts, editProduct } from "../controllers/shop_up_product_controlleur.js";

const router = express.Router();

router.get("/", getProducts); // Route pour afficher la page shop_up_product

router.post("/", editProduct); // Route pour de modifier un produit

export default router;
