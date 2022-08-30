// É possível importar módulos pelo caminho absoluto, mas não é o caso.
// Ex: C:\Workspace\Curso Javascript\node\moduloA.js
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
  res.write('Bom dia!')
  res.end()
}).listen(8080)