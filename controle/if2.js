function teste1(num) {
  if (num > 7) console.log(num)
  console.log('Final')
}

teste1(6)
teste1(8)

// Má prática, sempre utilizar chaves em IF

function teste2(num) {
  if (num > 7);
  {
    // Tomar cuidado com o ';', não utilizar com as estruturas de controle
    console.log(num)
  }
}

teste2(6)
teste2(8)

// Não usar ; na definição de um bloco IF
