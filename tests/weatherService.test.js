const { shouldSendRainAlert } = require('../src/weatherService');

describe('shouldSendRainAlert', () => {

    describe('when forecast is rain', () => {
        it('should return true', () => {
            // Arrange
            const stubWeatherApi = {
                getForecast: jest.fn().mockReturnValue({ condition: 'rain' })
            };

            // Act
            const result = shouldSendRainAlert(stubWeatherApi, 'Bangkok');

            // Assert
            expect(result).toBe(true);
        });
    });

    describe('when forecast is sunny', () => {
        it('should return false', () => {
            // Arrange
            const stubWeatherApi = {
                getForecast: jest.fn().mockReturnValue({ condition: 'sunny' })
            };

            // Act
            const result = shouldSendRainAlert(stubWeatherApi, 'Bangkok');

            // Assert
            expect(result).toBe(false);
        });
    });

});