// eslint-disable-next-line @typescript-eslint/no-explicit-any
const map: any = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
};

export function convert(num: number): string {
  const arr = Object.keys(map).reverse();

  let result = '';
  let remainder = num;

  arr.forEach(element => {
    const curDigit = parseInt(element, 10);
    const quotient = Math.floor(remainder / curDigit);
    if (quotient > 0) {
      result += ''.padStart(map[curDigit].length * quotient, map[curDigit]);
      remainder = remainder % curDigit;
    }
  });

  return result;
}
