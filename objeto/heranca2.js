// Cadeia de protótipo (prototype chain)
Object.prototype.atri0 = 0 // Deve evitar esse tipo de manipulação.

const avo = { atri1: 'A' }
const pai = { __proto__: avo, atri2: 'B', atri3: '3' }
const filho = { __proto__: pai, atri3: 'C' }
console.log(filho.atri0, filho.atri1, filho.atri2, filho.atri3)

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324 // Shadowing
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro) // Estabelece uma relação entre Ferrari e Carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
