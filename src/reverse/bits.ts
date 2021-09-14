/*
Reverse bits of 32 bits unsigned integer string.

*/

export function reverseBits(x: string): string {
  // const binary = x.toString(2).padStart(32, '0');
  const arrayOfDigits = Array.from(x);
  let leftIndex = 0;
  let rightIndex = arrayOfDigits.length - 1;

  while (leftIndex < rightIndex) {
    const temp = arrayOfDigits[leftIndex];
    arrayOfDigits[leftIndex] = arrayOfDigits[rightIndex];
    arrayOfDigits[rightIndex] = temp;
    leftIndex = leftIndex + 1;
    rightIndex = rightIndex - 1;
  }

  return arrayOfDigits.join('');
}
