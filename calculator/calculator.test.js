import Calc from './calculator';

test('sum 2 + 3 = 5', () => {
  expect(Calc.add(2, 3)).toBe(5);
});

test('sum 0 + 0 = 0', () => {
  expect(Calc.add(0, 0)).toBe(0);
});

test('sum -1 + 0 = -1', () => {
  expect(Calc.add(-1, 0)).toBe(-1);
});

test('substract 3 - 3 = 0', () => {
  expect(Calc.substract(3, 3)).toBe(0);
});

test('substract 3 - 1 = 2', () => {
  expect(Calc.substract(3, 1)).toBe(2);
});

test('substract -3 - 1 = -2', () => {
  expect(Calc.substract(-3, -1)).toBe(-2);
});

test('multiply 3 * 1 = 3', () => {
  expect(Calc.multiply(3, 1)).toBe(3);
});

test('multiply 5 * 3 = 15', () => {
  expect(Calc.multiply(5, 3)).toBe(15);
});

test('multiply -3 * 1 = -3', () => {
  expect(Calc.multiply(-3, 1)).toBe(-3);
});

test('divide 10 / 2 = 5', () => {
  expect(Calc.divide(10, 2)).toBe(5);
});

test('divide 15 / 3 = 5', () => {
  expect(Calc.divide(15, 3)).toBe(5);
});

test('divide 15 / 5 = 3', () => {
  expect(Calc.divide(15, 5)).toBe(3);
});
