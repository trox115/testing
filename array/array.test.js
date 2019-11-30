import analyze from './array';

test('Check if function works with example and min is 1', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test('Check if function works with example and max is 10', () => {
  expect(analyze([1, 8, 3, 4, 10, 6]).max).toBe(10);
});

test('Check if function works with example and average is 4', () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test('Check if function works with example and length is 1', () => {
  expect(analyze([1]).length).toBe(1);
});

test('Check if function works with example and average is not 4', () => {
  expect(analyze([1, 8, 3, 4, 2, 6, 100]).average).not.toBe(4);
});
