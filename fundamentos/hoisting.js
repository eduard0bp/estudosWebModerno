console.log('a =', a)
var a = 2 // Var aceita Hoisting, tomar cuidado ao declarar
console.log('a =', a)

console.log('b =', b)
let b = 2 // Com Let não acontece o Hoisting
console.log('b =', b)

// Hoisting é levar a declaração para o topo do programa
