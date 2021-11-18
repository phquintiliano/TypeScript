//Escreva um função que recebe 2 numeros e retorne o maior deles

function maiorNumero(num1, num2) {
  return num1 < num2 ? `${num2} é o maior número` : `${num1} é o maior número`
}
console.log(maiorNumero(7, 2))

const maiorNumero2 = (num1, num2) => {
  return num1 < num2 ? `${num2} é o maior número` : `${num1} é o maior número`
}
console.log(maiorNumero2(7, 2))
