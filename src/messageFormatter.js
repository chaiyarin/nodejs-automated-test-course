// src/messageFormatter.js

/**
 * Creates a welcome message for a new user.
 * Format: "Welcome, {name}! Your account has been created."
 *
 * @param {string} name - User's display name
 * @returns {string} welcome message
 * @throws {Error} if name is empty or not a string
 */
function createWelcomeMessage(name) {
    if (!name || typeof name !== 'string' || name.trim() === '') {
        throw new Error('Name is required');
    }
    return `Welcome, ${name.trim()}! Your account has been created.`;
}

/**
 * Formats an order confirmation message.
 * Format: "Order #ORD-{id}: {itemCount} item(s) — Total: {total} THB"
 *
 * @param {string} id        - Order ID (e.g. "10042")
 * @param {number} itemCount - Number of items in the order
 * @param {number} total     - Total price in THB
 * @returns {string} formatted order message
 */
function formatOrderMessage(id, itemCount, total) {
    return `Order #ORD-${id}: ${itemCount} item(s) — Total: ${total} THB`;
}

/**
 * Masks a credit card number — shows only the last 4 digits.
 * Format: "**** **** **** {last4}"
 * Example: "4111111111114242" → "**** **** **** 4242"
 *
 * @param {string} cardNumber - Full 16-digit card number (digits only)
 * @returns {string} masked card number
 * @throws {Error} if card number is not exactly 16 digits
 */
function maskCardNumber(cardNumber) {
    if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
        throw new Error('Card number must be exactly 16 digits');
    }
    const last4 = cardNumber.slice(-4);
    return `**** **** **** ${last4}`;
}

module.exports = { createWelcomeMessage, formatOrderMessage, maskCardNumber };