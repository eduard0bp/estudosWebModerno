const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c
  }
}
console.log(JSON.stringify(obj)) // Transforma um Objeto em JSON

// console.log(JSON.parse('{ a: 1, b: 2, c: 3}')) // Exemplo incorreto
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3")) // Exemplo incorreto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(
  JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')
)
// Todos os atributos devem ser delimitados por ""
