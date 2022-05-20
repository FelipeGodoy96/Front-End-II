function newButton(text, callback) {
  const $container = document.querySelector('.container')
  const $button = document.createElement('button')
  $button.textContent = text
  callback($button)
  $container.insertAdjacentElement('beforeend', $button)
}

newButton('Login')
newButton('Cadastro')

login.style.cssText = `
width: 50px;
font-size: 10px;
border: none;
`
