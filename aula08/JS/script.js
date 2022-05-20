const root = document.getElementById('root')

const div = document.createElement('div')
div.classList.add('form-control')
const campo1 = document.createElement('input')
const campo2 = document.createElement('input')
const submit = document.createElement('button')
const reset = document.createElement('button')
campo1.type = 'text'
campo1.placeholder = 'nome'
campo2.type = 'text'
campo2.placeholder = 'sobrenome'
submit.textContent = 'enviar'
reset.textContent = 'resetar'
const form = document.createElement('form')
div.append(form)

// submit.onSubmit = function () {
//   preventDefault()
//   console.log('work?')
// }

form.appendChild(campo1)
form.appendChild(campo2)
form.appendChild(submit)
form.appendChild(reset)
root.appendChild(div)

// window.onload = () => {
//   alert('A página foi carregada!')
// }
