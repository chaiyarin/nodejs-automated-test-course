// src/passwordValidator.js

function validatePassword(password) {
    if (!password || password.length < 8) {
        return { valid: false, reason: 'Password must be at least 8 characters' };
    }
    if (!/[A-Z]/.test(password)) {
        return { valid: false, reason: 'Password must contain at least one uppercase letter' };
    }
    if (!/[0-9]/.test(password)) {
        return { valid: false, reason: 'Password must contain at least one number' };
    }
    return { valid: true, reason: null };
}

module.exports = { validatePassword };