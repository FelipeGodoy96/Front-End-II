const toggleForm = document.getElementById('toggleForm')

toggleForm.addEventListener('click', event => {
  const form = document.getElementById('formulario')
  const div = document.getElementById('grid')
  if (form.style.visibility == 'hidden') {
    form.style.visibility = 'visible'
  } else {
    form.style.visibility = 'hidden'
    // div.classList.add('g-col-11')
    // div.classList.remove('g-col-10')
  }
})
