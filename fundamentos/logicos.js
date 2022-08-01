// V & V = Verdadeira
// V & F = Falso
// F & ? = Falso

// V OU ? = Verdadeiro
// F OU ? = ?
// F ou F = Falso

// V XOR V = Falso
// V XOR F = Verdadeiro
// F XOR V = Verdadeiro
// F XOR F = Falso

// !V = Falso
// !F = Verdadeiro

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTv50 = trabalho1 && trabalho2
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete // Operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false0))
