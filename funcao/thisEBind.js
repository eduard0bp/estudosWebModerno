const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao) // Sem o this não iria funcionar, daria que variavel não foi declarada
  }
}

pessoa.falar()

const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e Orientação a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa) // Bind define o dono da função
falarDePessoa()
