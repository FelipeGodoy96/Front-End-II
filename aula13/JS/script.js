// VARIÁVEIS GLOBAIS

var validName = false
var validHobbies = false
var validCountry = false
var selectedCountry = ''

// CONSTANTES
const nome = document.getElementById('nome')
const senha = document.getElementById('pass')
const form = document.getElementById('form')
const nomeFeedback = document.getElementById('nomeFeedback')
const countries = document.getElementsByName('nacionalidade')

// VALIDADORES

function isFullName(name) {
  return /^([A-Z]{1,1}[a-z]{1,19}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/g.test(
    name
  )
}

function countrySelected() {
  let array = Array.from(countries)
  array.map(element => {
    if (element.checked && element.id != 'nacionalidadeBrasileira') {
      validCountry = true
    }
  })
}

// APP LOGIC

function submitForm() {
  if (validName && validCountry) {
    form.reset()
    alert('Cadastro concluído com sucesso!')
  } else if (countries[2].checked) {
    form.reset()
    alert(
      'Desculpe, ainda não estamos recrutando bruxos no Brasil, mas chegaremos em breve!'
    )
  } else {
    alert('Desculpe, mas há informações a serem corrigidas.')
  }
}

form.addEventListener('keydown', event => {
  errorMsg = []
  if (!isFullName(nome.value)) {
    errorMsg.push(`Nome inválido! Por favor, insira o seu nome completo.`)
    nome.classList.add('is-invalid')
    nomeFeedback.classList.add('invalid-tooltip')
    nomeFeedback.innerText = errorMsg
    nomeFeedback.style.position = 'relative'
    validName = false
  } else if (isFullName(nome.value)) {
    nome.classList.remove('is-invalid')
    nomeFeedback.classList.remove('invalid-tooltip')
    nomeFeedback.innerText = ''
    nome.classList.add('is-valid')
    validName = true
  }
})

setInterval('countrySelected()', 100)
