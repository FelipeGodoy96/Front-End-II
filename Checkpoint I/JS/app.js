// ---  VARIÁVEIS GLOBAIS  --- //
var id = 0

// ---  FUNÇÕES  --- //

function toggle() {
  const toggleForm = document.getElementById('toggleForm')
  toggleForm.addEventListener('click', event => {
    const form = document.getElementById('formulario')
    if (form.style.display == 'none') {
      form.style.display = 'block'
    } else {
      form.style.display = 'none'
    }
  })
}

function addDepoimento() {
  const button = document.getElementById('submit')
  button.addEventListener('click', event => {
    event.preventDefault()

    const mural = document.getElementById('mural')
    const titulo = document.getElementById('titulo').value
    const depoimento = document.getElementById('depoimento').value
    const urlImagem = document.getElementById('url').value
    var card = `<div id="card${id}" class="g-col-12 g-col-md-6 mt-2 mb-2 grid avatar">
      <div class="card g-col-4 g-col-md-4">
                <img
                  src="${urlImagem}"
                  class="img-fluid"
                />
              </div>
              <div class="g-col-8 g-col-md-8 card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text text-start">
                  ${depoimento}
                </p>
              </div>
              <div class="text-center g-col-12 deleteButton">
                <button
                  type="button"
                  onclick="delCard('card${id}')"
                  class="mt-1 mb-1 btn btn-danger"
                >
                  Deletar
                </button>
              </div>`

    const tituloErro = document.getElementById('tituloErro')
    const depoimentoErro = document.getElementById('depoimentoErro')
    const urlErro = document.getElementById('urlErro')
    function validateTitulo() {
      if (titulo == null || titulo === '') {
        tituloErro.textContent = 'Campo obrigatório.'
      } else {
        tituloErro.textContent = ''
        return true
      }
    }
    function validateDepoimento() {
      if (depoimento == null || depoimento === '') {
        depoimentoErro.textContent = 'Campo obrigatório.'
      } else {
        depoimentoErro.textContent = ''
        return true
      }
    }
    function validateURL() {
      if (urlImagem == null || urlImagem === '') {
        urlErro.textContent = 'Campo obrigatório.'
      } else if (!isUrl(urlImagem)) {
        urlErro.textContent = 'Dado inserido não corresponde a uma URL'
      } else {
        urlErro.textContent = ''
        return true
      }
    }

    function isUrl(url) {
      return /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
        url
      )
    }

    validateTitulo()
    validateDepoimento()
    validateURL()

    if (!validateTitulo()) {
      const submitErro = document.getElementById('submitErro')
      submitErro.textContent = 'Um ou mais campos estão inválidos!'
    } else if (!validateDepoimento()) {
      submitErro.textContent = 'Um ou mais campos estão inválidos!'
    } else if (!validateURL()) {
      submitErro.textContent = 'Um ou mais campos estão inválidos!'
    } else {
      tituloErro.textContent = ''
      depoimentoErro.textContent = ''
      urlErro.textContent = ''
      submitErro.textContent = ''
      mural.insertAdjacentHTML('beforeend', card)
      id++
    }
  })
}

function delCard(id) {
  const card = document.getElementById(id)
  card.remove()
}

// ---  INICIALIZAÇÃO  --- //

toggle()
addDepoimento()
