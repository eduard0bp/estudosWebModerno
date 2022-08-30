require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // Deve tomar cuidado ao trocar valores globais.
console.log(MinhaApp.nome)