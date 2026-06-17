// tests/passwordValidator.test.js
const { validatePassword } = require('../src/passwordValidator');

describe('validatePassword', () => {

    describe('when password is valid', () => {
        it('should return valid true and reason null', () => {
            // Arrange
            const password = 'SecurePass1';

            // Act
            const result = validatePassword(password);

            // Assert
            expect(result.valid).toBe(true);
            expect(result.reason).toBeNull();
        });
    });

    describe('when password is too short', () => {
        it('should return valid false with reason message', () => {
            // Arrange
            const password = 'abc';

            // Act
            const result = validatePassword(password);

            // Assert
            expect(result.valid).toBe(false);
            expect(result.reason).toBe('Password must be at least 8 characters');
        });
    });

    describe('when password has no uppercase letter', () => {
        it('should return valid false with reason message', () => {
            // Arrange
            const password = 'securepass1';

            // Act
            const result = validatePassword(password);

            // Assert
            expect(result.valid).toBe(false);
            expect(result.reason).toBe('Password must contain at least one uppercase letter');
        });
    });

    describe('when password has no number', () => {
        it('should return valid false with reason message', () => {
            // Arrange
            const password = 'SecurePass';

            // Act
            const result = validatePassword(password);

            // Assert
            expect(result.valid).toBe(false);
            expect(result.reason).toBe('Password must contain at least one number');
        });
    });

    describe('when password is empty', () => {
        it('should return valid false with reason message', () => {
            // Arrange
            const password = '';

            // Act
            const result = validatePassword(password);

            // Assert
            expect(result.valid).toBe(false);
            expect(result.reason).toBe('Password must be at least 8 characters');
        });
    });

    // Bonus

    describe('when password is null', () => {
        it('should return valid false with reason message', () => {
            // Arrange
            const password = null;

            // Act
            const result = validatePassword(password);

            // Assert
            expect(result.valid).toBe(false);
            expect(result.reason).toBe('Password must be at least 8 characters');
        });
    });

});