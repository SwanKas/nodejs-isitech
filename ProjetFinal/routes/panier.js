import express from "express";
import { getProductsCart, deleteProductInCart } from "../controllers/panier_controlleur.js";

const router = express.Router();

router.get("/", getProductsCart); // Route utilisée pour afficher le panier

router.post("/", deleteProductInCart); // Route  utilisée pour supprimer un produit du panier

export default router;
