//const numeros = [5, 50, 20, 21, 25, 28, 59, 41, 31, 123, 25]
//const total = numeros.reduce(function (acumulador, valor, indice, array) {
//  acumulador += valor
//  return acumulador
//}, 0)
//console.log(total)

const pessoas = [
  { nome: 'Pedro', idade: '21' },
  { nome: 'Lucas', idade: '4' },
  { nome: 'Rosa', idade: '42' },
  { nome: 'Gabriela', idade: '19' },
  { nome: 'Pedro', idade: '52' }
]
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador
  return valor
})
console.log(maisVelha)
