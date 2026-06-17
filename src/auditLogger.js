// src/auditLogger.js

class AuditLogger {
    log(action, userId) {
        // In production this writes to a real audit log file
        console.log(`[AUDIT] ${action} by user ${userId}`);
    }
}

/**
 * Processes a payment and logs the action to the audit trail.
 * We want to verify that log() is called — but the real log() can still run.
 *
 * @param {AuditLogger} auditLogger
 * @param {string}      userId
 * @param {number}      amount
 * @returns {{ success: boolean, amount: number }}
 */
function processPayment(auditLogger, userId, amount) {
    const result = { success: true, amount };
    auditLogger.log('PAYMENT_PROCESSED', userId);
    return result;
}

module.exports = { AuditLogger, processPayment };