//function fatorial(n) {
//  if (n == 0 || n == 1) return 1
//  else return n * fatorial(n - 1)
//}
//console.log(fatorial(4))
//
const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody
  p.style.color = '#FFFFFF'
}
