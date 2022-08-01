const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // Retorna o índíce
console.log(valores[4])

valores[4] = 10 // Adiciona um elemento no índice que não existe
console.log(valores)
console.log(valores.length) // Mostra o tamanho do array

valores.push({ id: 3 }, false, null, 'teste') // Adiciona elementos no final do array
console.log(valores)

console.log(valores.pop()) // Excluí um elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores) // Arrays são do tipo Object
