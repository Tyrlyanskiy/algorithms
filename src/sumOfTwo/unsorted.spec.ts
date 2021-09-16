import { sumOfTwo } from './unsorted';

describe('When sumOfTwo is called', () => {
  describe('and numbers are found', () => {
    it('should return an array with two indexes 7,9', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const result = sumOfTwo(numbers, 18);
      expect(result).toEqual([7, 9]);
    });

    it('should return an array with two indexes 0,9', () => {
      const numbers = [8, 2, 3, 4, 5, 6, 7, 1, 9, 10];

      const result = sumOfTwo(numbers, 18);
      expect(result).toEqual([0, 9]);
    });
  });
});
