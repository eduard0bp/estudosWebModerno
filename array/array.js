console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // Não é a melhor maneira de criar Arrays
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // Melhor maneira de declarar Arrays
console.log(aprovados[0]) // Acessando o primeiro elemento do Array
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Retorna undefined, pois não está definido

aprovados[3] = 'Paulo' // Forma de adicionar um novo elemento ao Array
aprovados.push('Abia') // Forma mais apropriada para adicionar um novo elemento ao Array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Organiza o Array em ordem alfabética
console.log(aprovados)

delete aprovados[1] // Deleta um elemento do array e transforma em Undefined, não removendo do Array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Exclui ou adiciona elementos a partir do índice
console.log(aprovados)