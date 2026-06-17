// tests/userCollection.test.js
const { filterByAge } = require('../src/userCollection');

describe('filterByAge', () => {
    describe('when given a list of users', () => {
        it('should return only users at or above the minimum age', () => {
            // Arrange
            const users = [
                { name: 'Alice', age: 17 },
                { name: 'Bob', age: 18 },
                { name: 'Charlie', age: 25 },
            ];
            const minAge = 18;

            // Act
            const result = filterByAge(users, minAge);

            // Assert
            expect(result).toEqual([
                { name: 'Bob', age: 18 },
                { name: 'Charlie', age: 25 },
            ]);
        });

        it('should return correct number of results', () => {
            // Arrange
            const users = [
                { name: 'Alice', age: 17 },
                { name: 'Bob', age: 18 },
                { name: 'Charlie', age: 25 },
            ];
            const minAge = 18;

            // Act
            const result = filterByAge(users, minAge);

            // Assert
            expect(result).toHaveLength(2);
        });

        it('should return empty array when no users match', () => {
            // Arrange
            const users = [
                { name: 'Alice', age: 17 },
                { name: 'Bob', age: 16 },
            ];
            const minAge = 18;

            // Act
            const result = filterByAge(users, minAge);

            // Assert
            expect(result).toEqual([]);
        });
    });

    describe('when list is empty', () => {
        it('should return empty array', () => {
            // Arrange
            const users = [];
            const minAge = 18;

            // Act
            const result = filterByAge(users, minAge);

            // Assert
            expect(result).toEqual([]);
        });
    });
});
