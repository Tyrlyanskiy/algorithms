/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

export const sumOfTwo = (nums: number[], target: number): number[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const storage: any = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (storage[num] !== undefined) {
      return [storage[num], i];
    }
    storage[target - num] = i;
  }

  return [];
};
