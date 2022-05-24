const nome = document.getElementById('nome')
const password = document.getElementById('password')
const email = document.getElementById('email')
const confirmPassword = document.getElementById('confirmPassword')
const form = document.getElementById('form')
const error = document.querySelectorAll('.error')
const formItem = document.querySelectorAll('.formItem')

form.addEventListener('submit', event => {
  function validateName() {
    let errorMessage = []
    if (nome.value === '' || nome.value == null) {
      event.preventDefault()
      errorMessage.push('Campo obrigatório.')
      error[0].innerText = errorMessage
      formItem[0].classList.add('failed')
    } else if (nome.value.length < 1) {
      event.preventDefault()
      errorMessage.push('Nome inválido!')
      error[0].innerText = errorMessage
      formItem[0].classList.add('failed')
    } else {
      formItem[0].classList.remove('failed')
      error[0].innerText = null
      formItem[0].classList.add('success')
    }
  }
  function validatePassword() {
    let errorMessage = []
    if (password.value === '' || password.value == null) {
      event.preventDefault()
      errorMessage.push('Campo obrigatório.')
      formItem[2].classList.add('failed')
      error[2].innerText = errorMessage
    } else if (password.value.length < 6) {
      event.preventDefault()
      errorMessage.push('A senha deve ter no mínimo 6 caracteres.')
      error[2].innerText = errorMessage
      formItem[2].classList.add('failed')
    } else {
      formItem[2].classList.remove('failed')
      error[2].innerText = null
      formItem[2].classList.add('success')
    }
  }

  function validateEmail() {
    let errorMessage = []
    if (email.value === '' || email.value == null) {
      event.preventDefault()
      errorMessage.push('Campo obrigatório.')
      formItem[1].classList.add('failed')
      error[1].innerText = errorMessage
    } else if (!isEmail(email.value)) {
      event.preventDefault()
      errorMessage.push('E-mail inválido!')
      error[1].innerText = errorMessage
      formItem[1].classList.add('failed')
    } else {
      formItem[1].classList.remove('failed')
      error[1].innerText = null
      formItem[1].classList.add('success')
    }

    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    }
  }

  validateName()
  validatePassword()
  validateEmail()
})
