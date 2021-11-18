function criaPessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade }
}

const pessoa1 = criaPessoa('Pedro', 'Henrique', 21)

console.log(pessoa1)
