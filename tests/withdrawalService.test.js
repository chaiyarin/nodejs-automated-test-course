// tests/withdrawalService.test.js
const { withdraw } = require('../src/withdrawalService');

describe('withdraw', () => {
    describe('when amount is valid and balance is sufficient', () => {
        it('should return the updated balance', () => {
            // Arrange
            const account = { balance: 1000 };
            const amount = 250;

            // Act
            const result = withdraw(account, amount);

            // Assert
            expect(result).toBe(750);
            expect(account.balance).toBe(750);
        });
    });

    describe('when amount is zero or negative', () => {
        it('should throw an error', () => {
            // Arrange
            const account = { balance: 1000 };

            // Act
            const actWithZero = () => withdraw(account, 0);
            const actWithNegative = () => withdraw(account, -100);

            // Assert
            expect(actWithZero).toThrow('Amount must be greater than zero');
            expect(actWithNegative).toThrow('Amount must be greater than zero');
        });
    });

    describe('when balance is insufficient', () => {
        it('should throw an error', () => {
            // Arrange
            const account = { balance: 100 };
            const amount = 150;

            // Act
            const act = () => withdraw(account, amount);

            // Assert
            expect(act).toThrow('Insufficient funds');
        });
    });

    describe('when amount exactly equals balance', () => {
        it('should return zero balance', () => {
            // Arrange
            const account = { balance: 500 };
            const amount = 500;

            // Act
            const result = withdraw(account, amount);

            // Assert
            expect(result).toBe(0);
            expect(account.balance).toBe(0);
        });
    });
});
