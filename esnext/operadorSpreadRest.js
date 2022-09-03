// Operador ... Rest(juntar) / Spread(espalhar)
// Usar Rest com parâmetro de função

// Usar Spread com Objeto
const funcionario = {
  nome: 'Maria',
  salario: 12348.99
}
const clone = { 
  ativo: true, 
  ...funcionario // Espalha os elementos dentro de outro Objeto
}
console.log(clone)

// Usar Spread com Array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA] // Espalha os elementos dentro de outro Array
console.log(grupoFinal)