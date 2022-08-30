const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // Retorna um objeto, pois o módulo é uma função.
const contadorD = require('./instanciaNova')()

contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
console.log(contadorC.valor, contadorD.valor)