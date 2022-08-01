// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável / (Arrow Function)
const soma = (a, b) => {
  return a + b
}

console.log(soma(2, 3))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

// Sintaxe reduzida quando possúi somente um parâmetro
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')
