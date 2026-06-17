// tests/shoppingCart.test.js
const { calculateTotal, applyDiscount, isFreeShipping } = require('../src/shoppingCart');

describe('calculateTotal', () => {
    describe('when items is empty array', () => {
        it('should return 0', () => {
            // Arrange
            const items = [];

            // Act
            const result = calculateTotal(items);

            // Assert
            expect(result).toBe(0);
        });
    });

    describe('when items is null', () => {
        it('should return 0', () => {
            // Arrange
            const items = null;

            // Act
            const result = calculateTotal(items);

            // Assert
            expect(result).toBe(0);
        });
    });

    describe('when there is a single item', () => {
        it('should return price multiplied by quantity', () => {
            // Arrange
            const items = [{ name: 'Book', price: 100, quantity: 2 }];

            // Act
            const result = calculateTotal(items);

            // Assert
            expect(result).toBe(200);
        });
    });

    describe('when there are multiple items', () => {
        it('should return the sum of all items', () => {
            // Arrange
            const items = [
                { name: 'Book', price: 100, quantity: 2 },
                { name: 'Pen', price: 50, quantity: 3 },
            ];

            // Act
            const result = calculateTotal(items);

            // Assert
            expect(result).toBe(350);
        });
    });
});

describe('applyDiscount', () => {
    describe('when code is SAVE10', () => {
        it('should return total with 10% discount', () => {
            // Arrange
            const total = 1000;
            const code = 'SAVE10';

            // Act
            const result = applyDiscount(total, code);

            // Assert
            expect(result).toBe(900);
        });
    });

    describe('when code is SAVE20', () => {
        it('should return total with 20% discount', () => {
            // Arrange
            const total = 1000;
            const code = 'SAVE20';

            // Act
            const result = applyDiscount(total, code);

            // Assert
            expect(result).toBe(800);
        });
    });

    describe('when code is HALF', () => {
        it('should return total with 50% discount', () => {
            // Arrange
            const total = 1000;
            const code = 'HALF';

            // Act
            const result = applyDiscount(total, code);

            // Assert
            expect(result).toBe(500);
        });
    });

    describe('when code is invalid', () => {
        it('should throw an error', () => {
            // Arrange
            const total = 1000;
            const code = 'INVALID';

            // Act
            const act = () => applyDiscount(total, code);

            // Assert
            expect(act).toThrow('Invalid discount code: INVALID');
        });
    });

    describe('when total is negative', () => {
        it('should throw an error', () => {
            // Arrange
            const total = -1;
            const code = 'SAVE10';

            // Act
            const act = () => applyDiscount(total, code);

            // Assert
            expect(act).toThrow('Total cannot be negative');
        });
    });
});

describe('isFreeShipping', () => {
    describe('when total is exactly 500', () => {
        it('should return true', () => {
            // Arrange
            const total = 500;

            // Act
            const result = isFreeShipping(total);

            // Assert
            expect(result).toBe(true);
        });
    });

    describe('when total is above 500', () => {
        it('should return true', () => {
            // Arrange
            const total = 600;

            // Act
            const result = isFreeShipping(total);

            // Assert
            expect(result).toBe(true);
        });
    });

    describe('when total is below 500', () => {
        it('should return false', () => {
            // Arrange
            const total = 499;

            // Act
            const result = isFreeShipping(total);

            // Assert
            expect(result).toBe(false);
        });
    });

    describe('when total is negative', () => {
        it('should throw an error', () => {
            // Arrange
            const total = -1;

            // Act
            const act = () => isFreeShipping(total);

            // Assert
            expect(act).toThrow('Total cannot be negative');
        });
    });
});
