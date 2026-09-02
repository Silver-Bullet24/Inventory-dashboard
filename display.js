import { getStockStatus } from "./inventoryUtils.js";

function formatCurrency(value) {
    return `₱${value.toLocaleString("en-PH")}`;
}

export function displayProducts(products) {
    const productList = document.getElementById("productList");
    const noResultsMessage = document.getElementById("noResultsMessage");

    productList.innerHTML = "";

    if (products.length === 0) {
        noResultsMessage.style.display = "block";
        return;
    }

    noResultsMessage.style.display = "none";

    products.forEach(({ id, name, category, price, stock }) => {
        const status = getStockStatus(stock);

        const card = document.createElement("article");
        card.className = "product-card";
        card.dataset.id = id;

        card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Category:</strong> ${category}</p>
            <p class="price">${formatCurrency(price)}</p>
            <p><strong>Stock:</strong> ${stock}</p>
            <span class="status">${status}</span>
        `;

        productList.appendChild(card);
    });
}

export function displayTotalInventoryValue(value) {
    document.getElementById("totalInventoryValue").textContent =
        formatCurrency(value);
}

export function displayLowStockCount(count) {
    document.getElementById("lowStockCount").textContent = count;
}

export function displayOutOfStockCount(count) {
    document.getElementById("outOfStockCount").textContent = count;
}

export function displaySummary(products, calculateTotalInventoryValue, countLowStockProducts, countOutOfStockProducts) {
    displayTotalInventoryValue(calculateTotalInventoryValue(products));
    displayLowStockCount(countLowStockProducts(products));
    displayOutOfStockCount(countOutOfStockProducts(products));
}
