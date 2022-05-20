const imagens = document.querySelectorAll('.cartao img')
const urlImagens = []

imagens.forEach(function (_, contador) {
  const url = prompt(`Adicione o url para a imagem ${contador + 1}`)
  urlImagens.push(url)
})

urlImagens.forEach(function (url, index) {
  const imagem = document.querySelector(`#imagem-${index + 1}`)
  imagem.setAttribute('src', url)
})

// Link exemplo: http://aguabranca.com.br/imagem/produto/531/472/melao-amarelo290638.jpg
// Etapa 1

imagens.forEach(function (element, index) {
  const link = document.createElement('a')
  link.appendChild(element)
  link.classList.add('img-routes')
  link.setAttribute('href', `${element.src}`)
  link.addEventListener('click', event => {
    event.preventDefault()
    const newWindow = window.open(element.src, '_blank')
    newWindow.focus()
  })
  const div = document.getElementsByClassName('cartao')
  div[index].appendChild(link)
})

// Solução Vinicius

// urlImagens.forEach(function (url, index) {
//   let imageHTML = document.getElementById(`imagem-${index + 1}`).outerHTML
//   let newImageHTML = `<a class="img-routes" href="${url}" target="_blank">${imageHTML}</a>`
//   document.getElementById(`imagem-${index + 1}`).outerHTML = newImageHTML
// })
