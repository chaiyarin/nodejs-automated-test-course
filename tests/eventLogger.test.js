// tests/eventLogger.test.js
const { logEvent } = require('../src/eventLogger');

describe('logEvent', () => {
    describe('when type and message are valid', () => {
        it('should add one event to the array', () => {
            // Arrange
            const events = [];
            const type = 'INFO';
            const message = 'Application started';

            // Act
            logEvent(events, type, message);

            // Assert
            expect(events).toHaveLength(1);
        });

        it('should store the correct type and message', () => {
            // Arrange
            const events = [];
            const type = 'ERROR';
            const message = 'Something went wrong';

            // Act
            logEvent(events, type, message);

            // Assert
            expect(events[0].type).toBe('ERROR');
            expect(events[0].message).toBe('Something went wrong');
        });
    });

    describe('when type or message is missing', () => {
        it('should throw an error', () => {
            // Arrange
            const events = [];

            // Act
            const actMissingType = () => logEvent(events, '', 'has message');
            const actMissingMessage = () => logEvent(events, 'INFO', '');

            // Assert
            expect(actMissingType).toThrow('type and message are required');
            expect(actMissingMessage).toThrow('type and message are required');
        });
    });
});
