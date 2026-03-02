const products = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

// Use forEach to print each product's name and price
// Format: "Laptop: $999", etc.
// Your code here
products.forEach(product => console.log(`${product.name}: $${product.price}`));