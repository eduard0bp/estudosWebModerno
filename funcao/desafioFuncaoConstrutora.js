// Desafio para transformar a class Pessoa em uma Função Construtora
class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()


// Função construtora
function Pessoa2(nome) {
  this.nome = nome
  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p2 = new Pessoa2('João')
p2.falar()