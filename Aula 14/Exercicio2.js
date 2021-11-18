const nome = 'Pedro Henrique'
const sobrenome = 'Santana Quintiliano'
const idade = 21
const peso = 90
const altura = 1.84

let imc = peso / (altura * altura)

let anoNascimento = new Date().getFullYear() - idade

console.log(
  `${nome} tem ${idade} anos e pesa ${peso} Kg. Seu indice de Massa Corporal é de ${imc}`
)
