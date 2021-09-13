import { sumOfTwo } from './sumOfTwo';

describe('When sumOfTwo is called', () => {
  describe('and numbers are found', () => {
    it('should return an array with two indexes', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      const result = sumOfTwo(numbers, 18);
      expect(result).toEqual([7, 9]);
    });
  });

  describe('and numbers are not found', () => {
    it('should throw an error', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      try {
        const result = sumOfTwo(numbers, 20);
        expect(result).toEqual('should not be called');
      } catch (err) {
        expect(err).toEqual(new Error('Input array does not have to elements with sum equals to target'));
      }
    });
  });
});


