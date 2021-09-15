import { convert } from './intToRoman';

describe('When calling convert method', () => {
  it('should convert number  3 to roman', () => {
    const result = convert(3);
    expect(result).toEqual('III');
  });
  it('should convert number 4 to roman', () => {
    const result = convert(4);
    expect(result).toEqual('IV');
  });
  it('should convert number 9 to roman', () => {
    const result = convert(9);
    expect(result).toEqual('IX');
  });
  it('should convert number  58 to roman', () => {
    const result = convert(58);
    expect(result).toEqual('LVIII');
  });
  it('should convert number 1994 to roman', () => {
    const result = convert(1994);
    expect(result).toEqual('MCMXCIV');
  });
});
