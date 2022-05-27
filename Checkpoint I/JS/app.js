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
    var card = `<div class="g-col-12 g-col-md-4 avatar">
    <div class="card">
      <img
        src="${urlImagem}"
        class="card-img-top img-fluid"
        
      />
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">
          ${depoimento}
        </p>      
      </div>
    </div>
  </div>`
    const tituloErro = document.getElementById('tituloErro')
    const depoimentoErro = document.getElementById('depoimentoErro')
    const urlErro = document.getElementById('urlErro')
    function validateTitulo() {
      if (titulo == null || titulo === '') {
        tituloErro.textContent = 'Campo obrigatório!'
      } else {
        return true
      }
    }
    function validateDepoimento() {
      if (depoimento == null || depoimento === '') {
        depoimentoErro.textContent = 'Campo obrigatório!'
      } else {
        return true
      }
    }
    function validateURL() {
      if (urlImagem == null || urlImagem === '') {
        urlErro.textContent = 'Campo obrigatório!'
      } else {
        return true
      }
    }

    validateTitulo()
    validateDepoimento()
    validateURL()

    if (!validateTitulo() && !validateDepoimento() && !validateURL()) {
      const submitErro = document.getElementById('submitErro')
      submitErro.textContent = ''
    } else {
      tituloErro.textContent = ''
      depoimentoErro.textContent = ''
      urlErro.textContent = ''
      submitErro.textContent = ''
      mural.insertAdjacentHTML('beforeend', card)
    }
  })
}

// ---  INICIALIZAÇÃO  --- //

toggle()
addDepoimento()
