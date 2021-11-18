//FUNÇÕES AUTO INVOCAVEIS
//(function () {
// const nome = 'Pedro'
// console.log(nome)
//})()
//const nome = 'Gabie'
//console.log(nome)

;(function (idade, peso, altura) {
  const sobrenome = 'Henrique'
  function criaNome(nome) {
    return nome + ' ' + sobrenome
  }

  function falaNome() {
    console.log(criaNome('Pedro'))
  }
  falaNome()
  console.log(idade, peso, altura)
})(21, 89, 1.84)
