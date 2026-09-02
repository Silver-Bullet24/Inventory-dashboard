export function searchProducts(products, query) {
    const searchTerm = query.trim().toLowerCase();

    if (searchTerm === "") {
        return products;
    }

    return products.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm)
    );
}

export function filterProductsByCategory(products, category) {
    if (category === "All" || !category) {
        return products;
    }

    return products.filter(({ category: productCategory }) =>
        productCategory === category
    );
}

export function getStockStatus(stock) {
    if (stock === 0) {
        return "Out of Stock";
    }

    if (stock >= 1 && stock <= 5) {
        return "Low Stock";
    }

    return "In Stock";
}

export function calculateTotalInventoryValue(products) {
    return products.reduce(
        (total, { price, stock }) => total + price * stock,
        0
    );
}

export function countLowStockProducts(products) {
    return products.filter(({ stock }) => stock >= 1 && stock <= 5).length;
}

export function countOutOfStockProducts(products) {
    return products.filter(({ stock }) => stock === 0).length;
}
