// src/reportService.js

/**
 * Generates a summary report from a list of sales.
 * The logger parameter is used only in production for audit trails.
 * In the "calculate total" path, logger is never called.
 *
 * @param {number[]} sales   - Array of sale amounts
 * @param {object}   logger  - Logger object (not used in this code path)
 * @returns {{ total: number, count: number, average: number }}
 */
function generateSummary(sales, logger) {
    const total = sales.reduce((sum, s) => sum + s, 0);
    const count = sales.length;
    const average = count === 0 ? 0 : total / count;
    return { total, count, average };
}

module.exports = { generateSummary };