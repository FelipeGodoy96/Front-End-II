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

function add() {
  const button = document.getElementById('submit')
  button.addEventListener('click', event => {
    event.preventDefault()
    const mural = document.getElementById('mural')
    const titulo = document.getElementById('titulo').value
    const depoimento = document.getElementById('depoimento').value
    const urlImagem = document.getElementById('url').value
    let card = `<div class="g-col-12 g-col-md-4 avatar">
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
        <a href="#" class="btn btn-primary">Ver mais</a>
      </div>
    </div>
  </div>`
    mural.insertAdjacentHTML('beforeend', card)
  })
}

// ---  INICIALIZAÇÃO  --- //

toggle()
add()
