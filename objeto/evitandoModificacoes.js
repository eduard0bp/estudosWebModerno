// Object.preventExtensions

const produto = Object.preventExtensions({ // Não permite adicionar novos atributos ao objeto.
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {
  nome: 'Juliana', idade: 35 // Não permite adicionar e nem excluir elementos do objeto, somente modificar.
}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // Não está presente no objeto.
delete pessoa.nome // Seal não permite deletar atributos
pessoa.idade = 29 // Idade está presente, permitindo a modificação.
console.log(pessoa)

// Object.freeze = Selado + Valores constantes