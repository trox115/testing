import reversedString from './reversedString';

test('abc to cba', () => {
  expect(reversedString('abc')).toBe('cba');
});

test('aaa to aaa', () => {
  expect(reversedString('aaa')).toBe('aaa');
});

test('a to a', () => {
  expect(reversedString('a')).toBe('a');
});

test('null to null', () => {
  expect(reversedString(null)).toBe(null);
});

test('"" to ""', () => {
  expect(reversedString('')).toBe('');
});
