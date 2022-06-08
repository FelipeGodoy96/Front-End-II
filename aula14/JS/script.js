const inpKey = document.getElementById('inpKey')
const inpValue = document.getElementById('inpValue')
const btnInsert = document.getElementById('btnInsert')
const isOutput = document.getElementById('isOutput')
const clearBtn = document.getElementById('clearBtn')

btnInsert.addEventListener('click', e => {
  e.preventDefault()
  const key = inpKey.value
  const value = inpValue.value

  if (key && value) {
    localStorage.setItem(key, value)
    location.reload()
  }
})

clearBtn.addEventListener('click', () => {
  localStorage.clear()
})
