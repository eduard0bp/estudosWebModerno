console.log(soma(10, 5)) // Chamando a função antes de declarar

// Function declaration
function soma(x, y) {
  return x + y
} // Quando definida desse modo, pode chamar a função antes mesmo de ser declarada

// Function expression
const sub = function (x, y) {
  return x - y
}

// Named function expression
const mult = function mult(x, y) {
  return x * y
} // Forma de declaração pouco utilizada no mercado

console.log(sub(10, 5))
console.log(mult(10, 5))
