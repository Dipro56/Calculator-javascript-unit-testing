function Pow(a, b) {
  return a ** b;
}

function Modulo(a, b) {
  return a % b;
}

console.log(Pow(2, 3));
console.log(Modulo(4, 7));

module.exports = {
  Pow,
  Modulo,
};
