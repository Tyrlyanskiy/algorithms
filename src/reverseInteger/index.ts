/*

Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

*/

export function reverse(x: number): number {
  const isNegative = x < 0;

  const arrayOfDigits = Array.from(String(Math.abs(x)), Number);
  let leftIndex = 0;
  let rightIndex = arrayOfDigits.length - 1;

  while (leftIndex < rightIndex) {
    const temp = arrayOfDigits[leftIndex];
    arrayOfDigits[leftIndex] = arrayOfDigits[rightIndex];
    arrayOfDigits[rightIndex] = temp;
    leftIndex = leftIndex + 1;
    rightIndex = rightIndex - 1;
  }

  const stringNumbers = arrayOfDigits.join();
  let stringNumber = stringNumbers.replace(/,/g, "");

  if (isNegative) {
    stringNumber = '-' + stringNumbers.replace(/,/g, "");
  }

  const result = parseInt(stringNumber, 10);

  const maxInt = Math.pow(2, 31) - 1;
  const minInt = Math.pow(2, 31);

  if (result > maxInt || Math.abs(result) > minInt) {
    return 0;
  }

  return result;
}
