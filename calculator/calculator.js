const Calc = (() => {
  const publicFunction = {};
  publicFunction.add = (a, b) => a + b;
  publicFunction.substract = (a, b) => a - b;
  publicFunction.multiply = (a, b) => a * b;
  publicFunction.divide = (a, b) => a / b;

  return publicFunction;
})();

export default Calc;
