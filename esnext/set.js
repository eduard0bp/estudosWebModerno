// Não aceita repetição / não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') // Não é possível adicionar o mesmo atributo

console.log(times)
console.log(times.size) // Retorna o tamanho do Set
console.log(times.has('vasco')) // Procura se um elemento está dentro do Set
console.log(times.has('Vasco'))
times.delete('Flamengo') // Deleta um elemento do Set
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)