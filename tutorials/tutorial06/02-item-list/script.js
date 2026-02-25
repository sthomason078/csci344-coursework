// 1. Create an array and select the list element
const items = [
    "Allen wrenches",
    "Gerbil feeders",
    "Toilet seats",
    "Electric heaters",
    "Trash compactors",
    "Juice extractors",
    "Shower rods",
    "Water meters"
];

const itemListEl = document.querySelector("#itemList");

// 2. Create a function to display items
function displayItems() {
    itemListEl.innerHMTL = "";
    for (let i = 0; i < items.length; i++) {
        const listItemHTML = `<li>${items[i]}</li>`;
        itemListEl.insertAdjacentHTML("beforeend", listItemHTML);
    }
}

// 3. Call the function
displayItems();