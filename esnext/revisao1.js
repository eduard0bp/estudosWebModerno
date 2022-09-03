// Let e Const
{
  var a = 2
  let b = 3
  console.log(b) // É possível pois está dentro do bloco
}
console.log(a) // Consegue acessar o var, pois a variável não tem escopo de bloco
// console.log(b) // Não é possível pois let tem escopo de bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`) // Aceita espaços e quebra de linha.

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)