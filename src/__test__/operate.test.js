import operate from '../logic/operate';

describe('Operating testing', () => {
  test('check adding', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  test('check multiplication', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
  test('check division', () => {
    expect(operate(2, 2, '-')).toBe('0');
  });
  test('check substraction', () => {
    expect(operate(2.2, 2, '÷')).toBe('1.1');
  });
  test('check remaining', () => {
    expect(operate(2.2, 2, '%')).toBe('0.2');
  });
});
