function tratarErroLancar(erro) {
  // throw new Error('...')
  // throw 10
  // throw true
  // throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroLancar(e)
  } finally {
    console.log('Final')
  }
}

const obj = { nome: 'Roberto' }
imprimirNome(obj)
