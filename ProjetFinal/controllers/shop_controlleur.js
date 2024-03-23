import { Product } from "../models/product_model.js";
export const getProducts = (req, res, next) => {
  Product.getAllProducts()
    .then(([rows, fieldData]) => {
      res.render("shop", {
        pageTitle: "shop",
        path: "/",
        products: rows,
      });
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};
export const getProduct = (req, res, next) => {
  console.log(req.params.id);
  const productId = req.params.id;
  Product.getProductById(productId)
    .then(([rows]) => {
      const product = rows[0];
      res.render("shop_detail", {
        pageTitle: product.name,
        path: "/shop",
        product: product,
      });
    })
    .catch((err) => {
      if (err) console.log("Une erreur est survenue, détail de l'erreur" + err);
    });
};
export const addProduct = (req, res, next) => {
  const product = new Product(req.body.id, req.body.name, req.body.price, req.body.description, req.body.imageUrl);
  product
    .saveProductInCart()
    .then(() => {
      res.redirect("/shop");
    })
    .catch((err) => {
      if (err) console.log("Une erreur est survenue, détail de l'erreur" + err);
    });
};
