const { getTicketPrice } = require('../src/ticketPricing');

describe('getTicketPrice', () => {
    describe('when age is negative', () => {
        it('should throw an error', () => {
            // Arrange
            const age = -1;

            // Act
            const act = () => getTicketPrice(age);

            // Assert
            expect(act).toThrow('Age cannot be negative');
        });
    });

    describe('when age is 0', () => {
        it('should return 0 for baby', () => {
            // Arrange
            const age = 0;

            // Act
            const result = getTicketPrice(age);

            // Assert
            expect(result).toBe(0);
        });
    });

    describe('when age is 2', () => {
        it('should return 0 for last baby age', () => {
            // Arrange
            const age = 2;

            // Act
            const result = getTicketPrice(age);

            // Assert
            expect(result).toBe(0);
        });
    });

    describe('when age is 3', () => {
        it('should return 100 for first child age', () => {
            // Arrange
            const age = 3;

            // Act
            const result = getTicketPrice(age);

            // Assert
            expect(result).toBe(100);
        });
    });

    describe('when age is 12', () => {
        it('should return 100 for last child age', () => {
            // Arrange
            const age = 12;

            // Act
            const result = getTicketPrice(age);

            // Assert
            expect(result).toBe(100);
        });
    });

    describe('when age is 13', () => {
        it('should return 200 for first adult age', () => {
            // Arrange
            const age = 13;

            // Act
            const result = getTicketPrice(age);

            // Assert
            expect(result).toBe(200);
        });
    });

    describe('when age is 59', () => {
        it('should return 200 for last adult age', () => {
            // Arrange
            const age = 59;

            // Act
            const result = getTicketPrice(age);

            // Assert
            expect(result).toBe(200);
        });
    });

    describe('when age is 60', () => {
        it('should return 80 for first senior age', () => {
            // Arrange
            const age = 60;

            // Act
            const result = getTicketPrice(age);

            // Assert
            expect(result).toBe(80);
        });
    });
});
