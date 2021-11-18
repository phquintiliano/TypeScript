const elementos = [
  { tag: 'p', texto: 'Qualquer coisa' },
  { tag: 'div', texto: 'Qualquer coisa' },
  { tag: 'section', texto: 'Qualquer coisa' },
  { tag: 'footer', texto: 'Qualquer coisa' }
]

const container = document.querySelector('.container')

const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i]
  let tagcreat = document.createElement(tag)
  tagcreat.innerHTML = texto
  div.appendChild(tagcreat)
}

container.appendChild(div)
