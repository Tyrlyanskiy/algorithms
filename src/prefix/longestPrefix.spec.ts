import { getLongestCommonPrefix } from './longestPrefix';

describe('When calling getLongestCommonPrefix', () => {
  it('should return fn for input data', () => {
    const strings = ['flower', 'flow', 'flight'];
    const result = getLongestCommonPrefix(strings);
    expect(result).toEqual('fl');
  });

  it('should return "" for input data', () => {
    const strings = ['lower', 'flow', 'flight'];
    const result = getLongestCommonPrefix(strings);
    expect(result).toEqual('');
  });
});
