// src/shoppingCart.js

/**
 * Calculates the total price of all items in a cart.
 * @param {Array} items - Array of { name, price, quantity }
 * @returns {number} total price
 */
function calculateTotal(items) {
    if (!items || items.length === 0) return 0;
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

/**
 * Applies a discount code to a total price.
 * @param {number} total - Original total
 * @param {string} code  - Discount code
 * @returns {number} discounted total
 */
function applyDiscount(total, code) {
    if (total < 0) throw new Error('Total cannot be negative');

    const discounts = {
        'SAVE10': 0.10,   // 10% off
        'SAVE20': 0.20,   // 20% off
        'HALF': 0.50,   // 50% off
    };

    if (!discounts[code]) throw new Error(`Invalid discount code: ${code}`);

    return total * (1 - discounts[code]);
}

/**
 * Checks if an item is eligible for free shipping.
 * Rules:
 *   - total >= 500 → free shipping
 *   - total < 500  → not free
 *   - total < 0    → throw Error
 * @param {number} total
 * @returns {boolean}
 */
function isFreeShipping(total) {
    if (total < 0) throw new Error('Total cannot be negative');
    return total >= 500;
}

module.exports = { calculateTotal, applyDiscount, isFreeShipping };
