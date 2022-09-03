// Tagged Templates - processa o template string dentro de uma função
function tag(partes, ...valores) {
  console.log(partes)
  console.log(valores)
  return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)

// Não é uma técnica muito utilizada, porém pode servir para aplicar máscaras de valores monetários.