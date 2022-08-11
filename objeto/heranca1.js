const ferrari = {
  modelo: 'F40',
  velMax: 340
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

console.log(ferrari.prototype) // Undefined
console.log(ferrari.__proto__) // Null
console.log(ferrari.__proto__ === Object.prototype) // True
console.log(volvo.__proto__ === Object.prototype) // True
console.log(Object.prototype.__proto__) // Null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
