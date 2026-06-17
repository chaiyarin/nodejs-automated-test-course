const { generateSummary } = require('../src/reportService');

describe('generateSummary', () => {

    describe('when given a list of sales', () => {
        it('should return correct total, count and average', () => {
            // Arrange
            const sales = [100, 200, 300];
            const dummyLogger = {};   // ← Dummy: satisfies parameter, never used

            // Act
            const result = generateSummary(sales, dummyLogger);

            // Assert
            expect(result.total).toBe(600);
            expect(result.count).toBe(3);
            expect(result.average).toBe(200);
        });
    });

});