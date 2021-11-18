function ModuloMatematico() {
  var x = 0
  function somaUm() {
    x++
    console.log(x)
  }
  function subtraiUm() {
    x--
    console.log(x)
  }
  return {
    somaUm: somaUm,
    subtraiUm: subtraiUm
  }
}
var teste = ModuloMatematico()
teste.somaUm() // 1
teste.somaUm() // 2
teste.somaUm() // 3
teste.subtraiUm()
teste.subtraiUm() // 2
