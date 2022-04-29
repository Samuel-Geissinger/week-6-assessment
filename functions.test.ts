const { shuffleArray } = require('./utils');

describe('shuffleArray should', () => {
    it('should return an array', () => {
        const shuffleArr = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(Array.isArray(shuffleArr)).toBe(true);
    });
    it('should return an array of the same length', () => {
        const shuffleArr = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(shuffleArr.length).toBe([1, 2, 3, 4, 5, 6, 7, 8].length);
    });
});