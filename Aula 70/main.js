function criarMultiplicador(multiplicador) {
  //multiplicador
  return function (n) {
    return n * multiplicador
  }
}

const duplica = criarMultiplicador(2)
const triplica = criarMultiplicador(3)
const quadruplica = criarMultiplicador(4)

console.log(duplica(10))
console.log(triplica(10))
console.log(quadruplica(10))
