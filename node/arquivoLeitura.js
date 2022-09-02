const fs = require('fs')

const caminho =  __dirname + '/arquivo.json'

// Ler arquivo de forma síncrona...
const conteudo = fs.readFileSync(caminho, 'utf-8') // Tomar cuidado por conta do tamanho do arquivo
console.log(conteudo)

// Leitura assíncrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

// Ler arquivo JSON
const config = require('./arquivo.json')
console.log(config.db)

// Leitura de pasta
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta...')
  console.log(arquivos)
})