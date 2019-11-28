import caesarC from './caesar';

test('Check if A with 1 shift is B', () => {
  expect(caesarC('a', 1)).toBe('b');
});

test('Check if A with 13 shift is N', () => {
  expect(caesarC('a', 13)).toBe('n');
});
