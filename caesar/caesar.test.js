import caesarC from './caesar';

test('Check if A with 1 shift is B', () => {
  expect(caesarC('a', 1)).toBe('b');
});

test('Check if A with 13 shift is N', () => {
  expect(caesarC('a', 13)).toBe('n');
});

test('Check if A with 13 shift is N', () => {
  expect(caesarC('n', 13)).toBe('a');
});

test('check if result is hello world', () => {
  expect(caesarC('uryyb, jbeyq?', 13)).toBe('hello, world?');
});

test('check if result is attack at dawn', () => {
  expect(caesarC('nggnpx ng qnja', 13)).toBe('attack at dawn');
});

test('check if result is attack at dawn', () => {
  expect(caesarC('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

test('check if result is attack at dawn', () => {
  expect(caesarC('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('check if result is attack at dawn', () => {
  expect(caesarC('Attack at Dawn', 5)).toBe('Fyyfhp fy Ifbs');
});
