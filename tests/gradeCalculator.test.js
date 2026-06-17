// tests/gradeCalculator.test.js
const { calculateGrade } = require('../src/gradeCalculator');

describe('calculateGrade', () => {

    it('should return A when score is 95', () => {
        // Arrange
        const score = 95;

        // Act
        const result = calculateGrade(score);

        // Assert
        expect(result).toBe('A');
    });

    it('should return Invalid Score when score is negative', () => {
        // Arrange
        const score = -1;

        // Act
        const result = calculateGrade(score);

        // Assert
        expect(result).toBe('Invalid Score');
    });

    it('should return Invalid Score when score is negative', () => {
        // Arrange
        const score = -1;

        // Act
        const result = calculateGrade(score);

        // Assert
        expect(result).toBe('Invalid Score');
    });

    it('should return A- when score is 85', () => {
        // Arrange
        const score = 85;

        // Act
        const result = calculateGrade(score);

        // Assert
        expect(result).toBe('A-');
    });

    it('should return F when score is 0', () => {
        // Arrange
        const score = 0;

        // Act
        const result = calculateGrade(score);

        // Assert
        expect(result).toBe('F');
    });

    it('should return Invalid Score when score is 101', () => {
        // Arrange
        const score = 101;

        // Act
        const result = calculateGrade(score);

        // Assert
        expect(result).toBe('Invalid Score');
    });

});