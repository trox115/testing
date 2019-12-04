function reversedString(string) {
  if (string === null) return null;
  const stringArr = string.split('');
  const reversedArr = stringArr.reverse();
  const reversed = reversedArr.join('');
  return reversed;
}
export default reversedString;
