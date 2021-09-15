import { convert } from './romanToInt';

describe('When calling convert method', () => {
  it('should convert roman number III to 3', () => {
    const result = convert('III');
    expect(result).toEqual(3);
  });
  it('should convert roman number IV to 3', () => {
    const result = convert('IV');
    expect(result).toEqual(4);
  });
  it('should convert roman number IX to 3', () => {
    const result = convert('IX');
    expect(result).toEqual(9);
  });
  it('should convert roman number LVIII to 3', () => {
    const result = convert('LVIII');
    expect(result).toEqual(58);
  });
  it('should convert roman number MCMXCIV to 3', () => {
    const result = convert('MCMXCIV');
    expect(result).toEqual(1994);
  });
});
