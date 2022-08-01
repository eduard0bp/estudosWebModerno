function Pessoa() {
  this.idade = 0

  const self = this
  setInterval(
    function () {
      self.idade++
      console.log(self.idade)
    } /*.bind(this)*/,
    1000
  ) // Poderia ser utilizado o Bind, porém optamos por criar uma constante Self
}

new Pessoa()
