// DISPLAYING PRODUCTS
// 1. Create an array of product objects and select elements
const products = [
    {
        "name": "Water Bottle",
        "price": 24.99,
        "description": "24oz leak-proof bottle for all of your hydration needs!",
        "category": "Sporting Goods",
        "inStock": true,
    },
    {
        "name": "Mechanical Keyboard",
        "price": 74.99,
        "description": "Perfect for writing angry emails to your coworkers!",
        "category": "Electronics",
        "inStock": false,
    },
    {
        "name": "Wireless Mouse",
        "price": 39.99,
        "description": "Unlike other kinds of mice, this product does not have a tail.",
        "category": "Electronics",
        "inStock": true,
    },
    {
        "name": "Office Chair",
        "price": 119.99,
        "description": "Ergonomic chair with arm rests and a swivel.",
        "category": "Home & Office",
        "inStock": true,
    },
];

// 2. Create a function to format price
const formatPrice = (price) => `$${price.toFixed(2)}`;

// 3. Create a function to create product HTML
function createProductCard(product) {
    const productName = `<h2>${product.name}</h2>`;
    const productPrice = `<div class="price">${formatPrice(product.price)}</div>`;
    const productDescription = `<p class="description">${product.description}</p>`;
    const productCategory = `<span class="category">${product.category}</span>`;
    const productStockStatus = `<span class="stock-status ${product.inStock ? "in-stock" : "out-of-stock"}">${product.inStock ? "In Stock" : "Out of Stock"}</span>`;
    return "<div class=\"product-card\">" + productName + productPrice + productDescription + productCategory + productStockStatus + "</div>";
}

// 4. Create a function to render products
const productGridEl = document.querySelector("#productGrid");

function renderProducts() {
    productGridEl.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        const productCardHTML = createProductCard(products[i]);
        productGridEl.insertAdjacentHTML("beforeend", productCardHTML);
    }
}



// ADDING PRODUCTS VIA FORM
// 1. Handle form submission
const productForm = document.querySelector("#productForm");

function addItemToList(event) {
    // Prevent the default form submission behavior (which would reload the page)
    event.preventDefault();
    // TODO: Add your code here
    
}

productForm.addEventListener('submit', addItemToList);

// 2. Initialize the display