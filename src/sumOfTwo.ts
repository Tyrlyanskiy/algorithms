/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

export const sumOfTwo = (nums: number[], target: number): number[] => {
  nums.sort((a, b) => a - b);

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex < rightIndex) {
    const sum = nums[leftIndex] + nums[rightIndex];

    if (sum === target) {
      return [leftIndex, rightIndex];
    }

    if (sum < target) {
      leftIndex += 1;
    }

    if (sum > target) {
      rightIndex += 1;
    }
  }

  throw new Error('Input array does not have to elements with sum equals to target');
};
