const prod1 = {} // Objetos são representados por chaves {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.9
prod1['Desconto Legal'] = 0.4 // Não é uma boa prática criar objetos com espaço no nome

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.9
} // Boa prática para criar objetos

console.log(prod2)
