import { reverseBits } from './bits';

describe('When calling reverseBits', () => {
  it('should return result as expected', () => {
    const result = reverseBits('00010101011110000010001111001110');
    expect(result).toEqual('01110011110001000001111010101000');
  });

  it('should return 100 for 001', () => {
    const result = reverseBits('001');
    expect(result).toEqual('100');
  });
});
