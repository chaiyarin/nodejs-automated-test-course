// src/eventLogger.js

/**
 * Logs an event into the events array.
 * Adds { type, message, timestamp } to the array.
 * Returns nothing.
 *
 * @param {Array}  events  - The log array to push into
 * @param {string} type    - Event type e.g. 'INFO', 'ERROR'
 * @param {string} message - Event description
 */
function logEvent(events, type, message) {
    if (!type || !message) throw new Error('type and message are required');
    events.push({ type, message, timestamp: new Date().toISOString() });
}

module.exports = { logEvent };