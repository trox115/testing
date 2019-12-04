import strReverse from './reversed_string';

test('abc to cba', () => {
  expect(strReverse('abc')).toBe('cba');
});

test('aaa to aaa', () => {
  expect(strReverse('aaa')).toBe('aaa');
});

test('a to a', () => {
  expect(strReverse('a')).toBe('a');
});

test('null to null', () => {
  expect(strReverse(null)).toBe(null);
});

test('"" to ""', () => {
  expect(strReverse('')).toBe('');
});
