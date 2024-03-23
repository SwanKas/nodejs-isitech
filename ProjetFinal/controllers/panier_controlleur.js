import { Product } from "../models/product_model.js";
export const getProductsCart = (req, res, next) => {
  Product.getAllProductsInCart()
    .then(([rows, fieldData]) => {
      res.render("panier", {
        pageTitle: "panier",
        path: "/",
        products: rows,
      });
    })
    .catch((err) => {
      if (err) console.log("Une erreur est survenue, détail de l'erreur" + err);
    });
};
export const deleteProductInCart = (req, res, next) => {
  Product.deleteProductInCart(req.body.id)
    .then((result) => {
      console.log("deleteProductInCart result:", result);
      res.redirect("/panier");
    })
    .catch((err) => {
      if (err) console.log("Une erreur est survenue, détail de l'erreur" + err);
    });
};
