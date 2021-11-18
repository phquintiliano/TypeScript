//clock.textContent = new Intl.DateTimeFormat('pt-BR', {
// dateStyle: 'full',
//  timeStyle: 'short'
//}).format(new Date())

const data = new Date()
const dataBr = Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'short'
})

clock.textContent = `${data}`
