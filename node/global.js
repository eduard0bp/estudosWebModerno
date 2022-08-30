// console.log(global)
global.MinhaApp = { // É possível utilizar o Freeze para não haver alteração de valores.
  saudacao() {
    return 'Estou em todos os lugares!'
  },
  nome: 'Sistema legal.'
}