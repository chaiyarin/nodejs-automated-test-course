// src/userCollection.js

/**
 * Filters users whose age is greater than or equal to the given minimum.
 *
 * @param {Array<{name: string, age: number}>} users
 * @param {number} minAge
 * @returns {Array<{name: string, age: number}>} filtered users
 */
function filterByAge(users, minAge) {
    if (!users || users.length === 0) return [];
    return users.filter(u => u.age >= minAge);
}

module.exports = { filterByAge };