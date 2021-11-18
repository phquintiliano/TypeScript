const numeros = [5, 50, 20, 21, 25, 28, 59, 41, 31, 123, 25, 10, 8]

const numerosPares = numeros
  .filter(valor => valor % 2 === 0)
  .map(valor => valor * 2)
  .reduce((ac, valor) => ac + valor)
console.log(numerosPares)
