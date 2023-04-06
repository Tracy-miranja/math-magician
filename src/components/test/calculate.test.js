import calculate from '../../logic/calculate';

describe('calculate', () => {
  test('should return null when the pressed button is AC', () => {
    const buttonName = 'AC';
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate({ total: '123', next: '456', operation: '+' }, buttonName);
    expect(result).toEqual(expected);
  });
  test('it should return total sum when the pressed button +', () => {
    const buttonName = '+';
    const expected = {
      next: null,
      operation: '+',
      total: '60',
    };
    const result = calculate({ total: '40', next: '20', operation: '+' }, buttonName);
    expect(result).toEqual(expected);
  });
  test('it should return total after minus next number when the pressed button -', () => {
    const buttonName = '-';
    const expected = {
      next: null,
      operation: '-',
      total: '90',
    };
    const result = calculate({ total: '110', next: '20', operation: '-' }, buttonName);
    expect(result).toEqual(expected);
  });
});
