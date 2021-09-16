/*
Given an array of integers numbers that is already sorted in non-decreasing order,
find two numbers such that they add up to a specific target number.
 */

export function sumOfTwo(numbers: number[], target: number): number[] {
  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex < rightIndex) {
    const sum = numbers[leftIndex] + numbers[rightIndex];

    if (sum === target) {
      return [leftIndex + 1, rightIndex + 1];
    }

    if (sum < target) {
      leftIndex += 1;
    }

    if (sum > target) {
      rightIndex -= 1;
    }
  }

  return [];
}
