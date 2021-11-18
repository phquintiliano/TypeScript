const nomes = ['Pedro Henrique', 'Gabriela', 'Lucas']

//for (let i = 0; i < nome.length; i++) {
//console.log(nome[i])
//}

//for (let i in nome) {
//  console.log(nome[i])
//}

for (let valor of nomes) {
  console.log(valor)
}

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array)
})

//For clássico - iteraveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, array ou objeto)
// For of - Retorna o valor em si (iteraveis, arrays ou strings)
