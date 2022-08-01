const notas = [7.7, 6.5, 8.2, 8.9, 3.6, 7.1, 9.0]

// Sem a função callback
const notasBaixas1 = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}
console.log(notasBaixas1)

// Com a função callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas2)

// Usando Arrow Function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// Utilizando de forma mais elegante a função
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)
