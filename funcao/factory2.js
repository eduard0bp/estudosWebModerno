// Criando objetos com função a partir de parâmetros

function criarProduto(nome, preco) {
  return {
    nome: (nome),
    preco: (preco),
    desconto: 0.1
  }
}

console.log(criarProduto('Notebook', 2199,49))