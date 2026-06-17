const { AuditLogger, processPayment } = require('../src/auditLogger');

describe('processPayment', () => {

    describe('when payment is processed', () => {
        it('should call auditLogger.log with the correct action', () => {
            // Arrange
            const auditLogger = new AuditLogger();
            const spy = jest.spyOn(auditLogger, 'log') // spy on 'log'

            // Act
            processPayment(auditLogger, 'user-42', 500);

            // Assert — verify the spy was called with correct args
            expect(spy).toHaveBeenCalledWith('PAYMENT_PROCESSED', 'user-42');

            // Cleanup
            spy.mockRestore();
        });

        it('should still return the correct result', () => {
            // Arrange
            const auditLogger = new AuditLogger();
            const spy = jest.spyOn(auditLogger, 'log');

            // Act
            const result = processPayment(auditLogger, 'user-42', 500);

            // Assert — real function still ran and returned correctly
            expect(result).toEqual({ success: true, amount: 500 });

            // Cleanup
            spy.mockRestore();
        });
    });

});