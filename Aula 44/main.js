const diaDaSemana = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado'
]

const data = new Date()

console.log(`Hoje é ${diaDaSemana[data.getDay()]}`)
