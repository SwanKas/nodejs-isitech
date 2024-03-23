import database from "../util/database.js";

export class Product {
  constructor(id, name, price, description, imageUrl) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  static getAllProducts() {
    return database.query("SELECT * FROM Products"); // Réccupérations de tous les produits
  }
  static getProductById(id) {
    return database.query("SELECT * FROM Products WHERE Products.id = ?", [id]); // recherche produit par id
  }
  static getAllProductsInCart() {
    return database.query("SELECT * FROM Panier"); // Réccupérations des produits du panier
  }
  saveProductInCart() {
    return database.execute("INSERT INTO Panier (id, name, price, description, image) VALUES (?, ?, ?, ?, ?)", [null, this.name, this.price, this.description, this.imageUrl]); // Insertion d'un produit dans le panier
  }
  static deleteProductInCart(productId) {
    return database.execute("deleteProductInCart FROM Panier WHERE id = ?", [productId]); // Suppressions d'un produit dans le panier
  }
  updateProductInCart() {
    return database.execute("updateProductInCart Products SET name = ?, price = ?, description = ? WHERE id = ?", [this.name, this.price, this.description, this.id]); // Mis a jour des infos d'uin produit
  }
}
