// tests/messageFormatter.test.js
const {
    createWelcomeMessage,
    formatOrderMessage,
    maskCardNumber,
} = require('../src/messageFormatter');

describe('createWelcomeMessage', () => {
    describe('when name is valid', () => {
        it('should contain the user name in the message', () => {
            // Arrange
            const name = 'Alice';

            // Act
            const result = createWelcomeMessage(name);

            // Assert
            expect(result).toContain('Alice');
        });

        it('should start with Welcome', () => {
            // Arrange
            const name = 'Alice';

            // Act
            const result = createWelcomeMessage(name);

            // Assert
            expect(result.startsWith('Welcome')).toBe(true);
        });

        it('should end with a full stop', () => {
            // Arrange
            const name = 'Alice';

            // Act
            const result = createWelcomeMessage(name);

            // Assert
            expect(result.endsWith('.')).toBe(true);
        });
    });

    describe('when name has extra spaces', () => {
        it('should trim the name in the message', () => {
            // Arrange
            const name = '  Alice  ';

            // Act
            const result = createWelcomeMessage(name);

            // Assert
            expect(result).toBe('Welcome, Alice! Your account has been created.');
        });
    });
});

describe('formatOrderMessage', () => {
    describe('when given valid order details', () => {
        it('should contain the order ID with ORD prefix', () => {
            // Arrange
            const id = '10042';
            const itemCount = 3;
            const total = 450;

            // Act
            const result = formatOrderMessage(id, itemCount, total);

            // Assert
            expect(result).toContain('ORD-10042');
        });

        it('should contain the item count', () => {
            // Arrange
            const id = '10042';
            const itemCount = 3;
            const total = 450;

            // Act
            const result = formatOrderMessage(id, itemCount, total);

            // Assert
            expect(result).toContain('3 item(s)');
        });

        it('should contain the total in THB', () => {
            // Arrange
            const id = '10042';
            const itemCount = 3;
            const total = 450;

            // Act
            const result = formatOrderMessage(id, itemCount, total);

            // Assert
            expect(result).toContain('450 THB');
        });

        it('should match the full expected format', () => {
            // Arrange
            const id = '10042';
            const itemCount = 3;
            const total = 450;

            // Act
            const result = formatOrderMessage(id, itemCount, total);

            // Assert
            expect(result).toBe('Order #ORD-10042: 3 item(s) — Total: 450 THB');
        });
    });
});

describe('maskCardNumber', () => {
    describe('when card number is valid', () => {
        it('should show only the last 4 digits', () => {
            // Arrange
            const cardNumber = '4111111111114242';

            // Act
            const result = maskCardNumber(cardNumber);

            // Assert
            expect(result).toBe('**** **** **** 4242');
        });

        it('should start with masked stars', () => {
            // Arrange
            const cardNumber = '4111111111114242';

            // Act
            const result = maskCardNumber(cardNumber);

            // Assert
            expect(result.startsWith('**** **** ****')).toBe(true);
        });

        it('should not expose the full card number', () => {
            // Arrange
            const cardNumber = '4111111111114242';

            // Act
            const result = maskCardNumber(cardNumber);

            // Assert
            expect(result).not.toContain(cardNumber);
        });
    });

    describe('when card number is invalid', () => {
        it('should throw an error', () => {
            // Arrange
            const cardNumber = '1234';

            // Act
            const act = () => maskCardNumber(cardNumber);

            // Assert
            expect(act).toThrow('Card number must be exactly 16 digits');
        });
    });
});
