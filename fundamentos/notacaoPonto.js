console.log(Math.ceil(6.1)) // Ceil arredonda para cima

const obj1 = {}
obj1.nome = 'Bola'
// obj1.['nome'] = 'Bola2' // Outro modo de declarar
console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome // Cria um atributo público
  this.exe = function () {
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
