// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // Congela o Objeto, não permitindo modificar o Objeto, tornando ele constante

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'João' })
console.log(pessoaConstante)