const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa)) // Retorna as chaves de um objeto
console.log(Object.values(pessoa)) // Retorna os valores de um objeto
console.log(Object.entries(pessoa)) // Retorna chave e valor de um objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
  // Retorna chave e valor usando o destructuring
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // Não aceita as modificações
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMASCRIPT 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Pega todos os atributos e reune em um objeto de destino

Object.freeze(obj)
obj.c = 1234
console.log(obj)
