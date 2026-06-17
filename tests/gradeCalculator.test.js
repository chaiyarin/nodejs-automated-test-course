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

    test.each([
        [100, 'A'],
        [95, 'A'],
        [90, 'A'],
        [89, 'A-'],
    ])('should return %s when score is %s', (score, expected) => {
        const result = calculateGrade(score);
        expect(result).toBe(expected);
    });


    test.each([
        { score: 100, expected: 'A' },
        { score: 95, expected: 'A' },
        { score: 89, expected: 'A-' },
    ])('should return $expected when score is $score', ({ score, expected }) => {
        const result = calculateGrade(score);
        expect(result).toBe(expected);
    });
});