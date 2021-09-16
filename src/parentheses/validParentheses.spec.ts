import { isValid } from './validParentheses';

describe('When calling isValid', () => {
  it('should return true for ()', () => {
    const result = isValid('()');
    expect(result).toEqual(true);
  });

  it('should return true for ()[]{}', () => {
    const result = isValid('()[]{}');
    expect(result).toEqual(true);
  });

  it('should return false for (]', () => {
    const result = isValid('(]');
    expect(result).toEqual(false);
  });

  it('should return false for ([)]', () => {
    const result = isValid('([)]');
    expect(result).toEqual(false);
  });

  it('should return true for {[]}', () => {
    const result = isValid('{[]}');
    expect(result).toEqual(true);
  });
});
