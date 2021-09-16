import { sumOfTwo } from './sorted';

describe('When sumOfTwo is called', () => {
  describe('and numbers are found', () => {
    it('should return an array with two indexes 8,10', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const result = sumOfTwo(numbers, 18);
      expect(result).toEqual([8, 10]);
    });

    it('should return an array with two indexes 1,10', () => {
      const numbers = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19];

      const result = sumOfTwo(numbers, 18);
      expect(result).toEqual([1, 11]);
    });
  });
});
