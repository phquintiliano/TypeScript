//const numeros = [5, 50, 20, 21, 25, 28, 59, 41, 31, 123, 25]
//const numerosEmDobro = numeros.map(function (valor, indice, array) {
//  return valor * 2
//})

//console.log(numerosEmDobro)

const pessoas = [
  { nome: 'Pedro', idade: '21' },
  { nome: 'Lucas', idade: '4' },
  { nome: 'Rosa', idade: '42' },
  { nome: 'Gabriela', idade: '19' },
  { nome: 'Pedro', idade: '52' }
]

const NomeArray = pessoas.map(valor => valor.nome)
const idade = pessoas.map(function (valor) {
  return { idade: valor.idade }
})

const comIds = pessoas.map(function (valor, indice) {
  const newObj = { ...valor }
  newObj.id = indice
  return newObj
})
console.log(comIds)
