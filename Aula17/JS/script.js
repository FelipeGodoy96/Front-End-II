async function fetchAPI() {
  fetch('https://pokeapi.co/api/v2/pokemon').then(response => {
    response.json().then(data => {
      const lista = document.getElementById('lista')
      data.results.map(element => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        function secondFetch() {
          fetch(`${element.url}`).then(response2 => {
            response2.json().then(data2 => {
              img.setAttribute('src', data2.sprites.front_default)
            })
          })
        }
        secondFetch()
        li.innerHTML = `<h1>${element.name}</h1>`
        lista.appendChild(li)
        lista.appendChild(img)
      })
    })
  })
}
