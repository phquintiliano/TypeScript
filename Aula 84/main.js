const pessoas = [
  { nome: 'Pedro', idade: '21' },
  { nome: 'Lucas', idade: '4' },
  { nome: 'Rosa', idade: '42' },
  { nome: 'Gabriela', idade: '19' },
  { nome: 'Pedro', idade: '52' }
]

//const pessoasComNomeGrande = pessoas.filter(function (valor) {
//  return valor.nome.length >= 6
//})

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 6)
console.log(pessoasComNomeGrande)

const pessoasComMaisDeVinteAnos = pessoas.filter(index => index.idade >= 20)
console.log(pessoasComMaisDeVinteAnos)

const pessoasTerminaA = pessoas.filter(obj => {
  return obj.nome.toLocaleLowerCase().endsWith('a')
})
console.log(pessoasTerminaA)
