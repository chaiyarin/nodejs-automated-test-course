const { sendPasswordReset } = require('../src/notificationSender');

describe('sendPasswordReset', () => {

    describe('when called with a valid email', () => {

        it('should call emailClient.send exactly once', () => {
            // Arrange
            const mockEmailClient = { send: jest.fn() };

            // Act
            sendPasswordReset(mockEmailClient, 'bob@example.com');

            // Assert — verify it was called exactly once
            expect(mockEmailClient.send).toHaveBeenCalledTimes(1);
        });
    });

});