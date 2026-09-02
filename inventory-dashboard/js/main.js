import { products } from "./products.js";
import {
    searchProducts,
    filterProductsByCategory,
    calculateTotalInventoryValue,
    countLowStockProducts,
    countOutOfStockProducts
} from "./inventoryUtils.js";
import {
    displayProducts,
    displayTotalInventoryValue,
    displayLowStockCount,
    displayOutOfStockCount
} from "./display.js";

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");

function updateSummary() {
    displayTotalInventoryValue(calculateTotalInventoryValue(products));
    displayLowStockCount(countLowStockProducts(products));
    displayOutOfStockCount(countOutOfStockProducts(products));
}

function updateProductDisplay() {
    const searchedProducts = searchProducts(products, searchInput.value);
    const filteredProducts = filterProductsByCategory(
        searchedProducts,
        categoryFilter.value
    );

    displayProducts(filteredProducts);
}

function runSearchAndFilter() {
    updateProductDisplay();
}

searchBtn.addEventListener("click", runSearchAndFilter);

searchInput.addEventListener("input", runSearchAndFilter);
categoryFilter.addEventListener("change", runSearchAndFilter);

resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "All";
    updateProductDisplay();
    updateSummary();
});

updateSummary();
displayProducts(products);
