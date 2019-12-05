import capitalize from './capitalize';

test('capitalize first word', () => {
  expect(capitalize('antonio')).toBe('Antonio');
});

test('Capitalizes the first letter of word Carlos', () => {
  expect(capitalize('carlos')).not.toBe('carlos');
});
