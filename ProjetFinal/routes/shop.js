import express from "express";
import { getProducts, getProduct, addProduct } from "../controllers/shop_controlleur.js";

const router = express.Router();

router.get("/", getProducts); // Route pour afficher les produits

router.get("/:id", getProduct); // Route pour afficher un produit

router.post("/", addProduct); // Route pour ajouter un produit au panier

export default router;
