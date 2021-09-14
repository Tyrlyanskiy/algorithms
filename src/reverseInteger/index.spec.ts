import { reverse } from '.';

describe('When calling reverse', () => {
  it('should return 321 for 123', () => {
    const result = reverse(123);
    expect(result).toEqual(321);
  });

  it('should return 21 for 120', () => {
    const result = reverse(120);
    expect(result).toEqual(21);
  });

  it('should return -21 for -120', () => {
    const result = reverse(-120);
    expect(result).toEqual(-21);
  });

  it('should return 0 for -1202133879863671', () => {
    const result = reverse(-1202133879863671);
    expect(result).toEqual(0);
  });
});
