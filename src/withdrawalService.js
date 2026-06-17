// src/withdrawalService.js

/**
 * Withdraws an amount from a bank account.
 *
 * Rules:
 *   - amount must be > 0          → throw Error('Amount must be greater than zero')
 *   - account.balance >= amount   → deduct and return updated balance
 *   - account.balance < amount    → throw Error('Insufficient funds')
 *
 * @param {{ balance: number }} account
 * @param {number} amount
 * @returns {number} updated balance
 */
function withdraw(account, amount) {
    if (amount <= 0) throw new Error('Amount must be greater than zero');
    if (account.balance < amount) throw new Error('Insufficient funds');
    account.balance -= amount;
    return account.balance;
}

module.exports = { withdraw };