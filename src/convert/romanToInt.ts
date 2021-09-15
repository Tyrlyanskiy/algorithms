export const convert = (romanNumber: string): number => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const romanMap: any = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumber.length; i++) {
    if (romanMap[romanNumber[i]] < romanMap[romanNumber[i + 1]]) {
      result = result + romanMap[romanNumber[i + 1]] - romanMap[romanNumber[i]];
      i++;
    } else {
      result = result + romanMap[romanNumber[i]];
    }
  }

  return result;
};
