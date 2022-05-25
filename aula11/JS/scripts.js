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
    if (password.value == '' || password.value == null) {
      event.preventDefault()
      errorMessage.push('Campo obrigatório.')
      formItem[2].classList.add('failed')
      error[2].innerText = errorMessage
    } else if (password.value.length < 6) {
      event.preventDefault()
      errorMessage.push('A senha deve ter no mínimo 6 caracteres.')
      error[2].innerText = errorMessage
      formItem[2].classList.add('failed')
    } else if (!/[A-Z]/.test(password.value)) {
      event.preventDefault()
      errorMessage.push(
        'Sua senha deve conter pelo menos um caractere maiúsculo, um número e um caractere especial (~,*,#,>).'
      )
      formItem[2].classList.add('failed')
      error[2].innerText = errorMessage
    } else if (!/[0-9]/.test(password.value)) {
      event.preventDefault()
      errorMessage.push(
        'Sua senha deve conter pelo menos 1 caractere maiúsculo, um número e um caracter especial.'
      )
      formItem[2].classList.add('failed')
      error[2].innerText = errorMessage
    } else if (!/[^A-Za-z0-9]/.test(password.value)) {
      event.preventDefault()
      errorMessage.push(
        'Sua senha deve conter pelo menos 1 caractere maiúsculo, um número e um caracter especial.'
      )
      formItem[2].classList.add('failed')
      error[2].innerText = errorMessage
    } else {
      formItem[2].classList.remove('failed')
      error[2].innerText = null
      formItem[2].classList.add('success')
    }
    function validateConfirmPass() {
      let errorMessage = []
      if (confirmPassword.value === '' || confirmPassword.value == null) {
        event.preventDefault()
        errorMessage.push('Campo obrigatório.')
        formItem[3].classList.add('failed')
        error[3].innerText = errorMessage
      } else if (confirmPassword != password.value) {
        event.preventDefault()
        errorMessage.push('As senhas não coincidem.')
        error[3].innerText = errorMessage
        formItem[3].classList.add('failed')
      } else {
        formItem[3].classList.remove('failed')
        error[3].innerText = null
        formItem[3].classList.add('success')
      }
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
  validateConfirmPass()
})

const openEye = document.getElementById('openEye')
const slashedEye = document.getElementById('slashedEye')

openEye.addEventListener('click', () => {
  slashedEye.style.visibility = 'visible'
  openEye.style.visibility = 'hidden'
  password.type = 'password'
  confirmPassword.type = 'password'
})

slashedEye.addEventListener('click', () => {
  slashedEye.style.visibility = 'hidden'
  openEye.style.visibility = 'visible'
  password.type = 'text'
  confirmPassword.type = 'text'
})
