// Arrow Function
const soma = (a, b) => a + b // Funções arrow são anônimas, precisam ser declaradas a uma variável.
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro Default
function log(texto = 'Node') { // Define um valor padrão ao parâmetro
  console.log(texto)
}
log()
log('Sou mais forte')

// Operador Rest (...exemplo) - serve para juntar todos os parâmetros passados 
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}
console.log(total(2, 3, 4, 5))
