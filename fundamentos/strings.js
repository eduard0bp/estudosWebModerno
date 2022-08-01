const escola = 'Cod3r'

console.log(escola.charAt(4)) // Retorna o índice
console.log(escola.charAt(5)) // Não retorna erro se não houver o índice
console.log(escola.charCodeAt(3)) // Retorna o valor UNICODE da tabela ASCII
console.log(escola.indexOf('3')) // Retorna o número da posição do índice

console.log(escola.substring(1)) // Percorre do índice escolhido até o final
console.log(escola.substring(0, 3)) // Percorre do índice escolhido ao outro

console.log('Escola '.concat(escola).concat('!')) // Concatena com String
console.log(escola.replace(/\d/, 'e')) // Rejex, substitui tudo pela letra escolihda
console.log(escola.replace(3, 'e')) // Substitui o índice selecionado pela letra escolhida

console.log('Ana,Maria,Pedro'.split(',')) // Converte String em Array
