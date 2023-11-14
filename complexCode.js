/**
 * Filename: complexCode.js
 * 
 * Description: This code demonstrates a complex JavaScript implementation with multiple classes and functional components.
 * It simulates a simple e-commerce system with users, products, and shopping carts.
 */

// Class representing a User
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.cart = new ShoppingCart();
  }
  
  addToCart(product, quantity) {
    this.cart.addItem(product, quantity);
  }
  
  checkout() {
    this.cart.checkout();
  }
  
  toString() {
    return `${this.name} <${this.email}>`;
  }
}

// Class representing a Product
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  toString() {
    return `${this.name} - $${this.price.toFixed(2)}`;
  }
}

// Class representing a Shopping Cart
class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }
  
  checkout() {
    let total = 0;
    console.log("Order Summary:");

    for (let item of this.items) {
      const { product, quantity } = item;
      const itemTotal = product.price * quantity;
      total += itemTotal;
      
      console.log(`${product.name} - ${quantity}x - $${itemTotal.toFixed(2)}`);
    }
    
    console.log(`Total: $${total.toFixed(2)}`);
  }
}

// Create some products
const product1 = new Product("Product 1", 19.99);
const product2 = new Product("Product 2", 9.99);
const product3 = new Product("Product 3", 29.99);
const product4 = new Product("Product 4", 49.99);

// Create users and simulate shopping
const user1 = new User("John Doe", "john@example.com");
const user2 = new User("Jane Smith", "jane@example.com");

user1.addToCart(product1, 2);
user1.addToCart(product3, 1);
user1.addToCart(product4, 3);

user2.addToCart(product2, 5);
user2.addToCart(product4, 2);

user1.checkout();
user2.checkout();

// Output:
// Order Summary:
// Product 1 - 2x - $39.98
// Product 3 - 1x - $29.99
// Product 4 - 3x - $149.97
// Total: $219.94
//
// Order Summary:
// Product 2 - 5x - $49.95
// Product 4 - 2x - $99.98
// Total: $149.93