// src/notificationSender.js

/**
 * Sends a password-reset email to the user.
 * Calls emailClient.send(to, subject, body) — we want to verify this call.
 *
 * @param {{ send: Function }} emailClient - Email dependency
 * @param {string} userEmail - Recipient email address
 */
function sendPasswordReset(emailClient, userEmail) {
    emailClient.send(
        userEmail,
        'Password Reset',
        `Click here to reset your password.`
    );
}

module.exports = { sendPasswordReset };