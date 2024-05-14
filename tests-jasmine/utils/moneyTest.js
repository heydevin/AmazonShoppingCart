import{formatCurrency} from '../../scripts/utils/money.js'

describe('test suite: formatCurrency', () => {
  it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });
  
  it('testing 0 value', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  describe('rounding', () => {
    it('rounds up to nearest cent', () => {
      expect(formatCurrency(2000.5)).toEqual('20.01');
    });
  
    it('rounds down to nearest cent', () => {
      expect(formatCurrency(2000.4)).toEqual('20.00');
    });
  });
  
});