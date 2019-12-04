function analyze(array) {
  const obj = {};

  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const maximum = array.reduce((first, last) => {
    if (first >= last) {
      return first;
    }
    return last;
  });

  const min = array.reduce((first, last) => (first <= last ? first : last));

  obj.average = sum / array.length;
  obj.max = maximum;
  obj.min = min;
  obj.length = array.length;
  return obj;
}

export default analyze;
