/**
 * Calculates the ticket price for a cinema based on customer age.
 *
 * Pricing rules:
 *   - Age 0–2   : FREE  (returns 0)
 *   - Age 3–12  : Child ticket — 100 THB
 *   - Age 13–59 : Adult ticket — 200 THB
 *   - Age 60+   : Senior ticket — 80 THB
 *   - Age < 0   : throw Error('Age cannot be negative')
 *
 * @param {number} age - Customer age in years (must be a non-negative integer)
 * @returns {number} ticket price in THB
 */
function getTicketPrice(age) {
    if (age < 0) throw new Error('Age cannot be negative');
    if (age <= 2) return 0;
    if (age <= 12) return 100;
    if (age <= 59) return 200;
    return 80;
}