// src/weatherService.js

/**
 * Decides whether to send a rain alert to a user.
 * Calls weatherApi.getForecast(city) to get current weather.
 * Returns true if rain is forecast, false otherwise.
 *
 * @param {{ getForecast: Function }} weatherApi - External API dependency
 * @param {string} city
 * @returns {boolean}
 */
function shouldSendRainAlert(weatherApi, city) {
    const forecast = weatherApi.getForecast(city);
    return forecast.condition === 'rain';
}

module.exports = { shouldSendRainAlert };