const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

// Uma Promisse gera apenas um unico valor, caso queira retornar mais valores, crie um Objeto/Array.
let p = new Promise(function (resolve) {
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log)
