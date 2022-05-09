// const items = document.querySelectorAll('. selections li')

// items.forEach(function (option) {
//   option.addEventListener('click', function () {
//     const change = document.getElementById(this.id)
//     change.style.background = 'black'
//   })
// })

const header = document.querySelector('h1')

let jokes = [
  'Agora você me vê...  agora não vê mais',
  '...oops! Não é mais',
  'URGENTE'
]

let textJoke = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis vehicula enim. Suspendisse consequat imperdiet commodo. Integer vel sapien in tortor facilisis pulvinar sed sed ex. Aenean dapibus mi id gravida pulvinar. Nullam nec diam ac mauris ultricies tristique. Aliquam nisi lorem, semper et tellus vel, malesuada condimentum libero. Maecenas vestibulum turpis turpis, vitae ultrices urna fermentum vel. Mauris posuere, lectus in elementum ornare, dui metus aliquet sem, et hendrerit purus dolor eu quam. Proin ultricies nec ante vel accumsan. Proin vel malesuada dolor, at elementum augue. Duis ac nunc dignissim, pulvinar felis sit amet, tristique tortor. Nam eget tempor nulla. Suspendisse potenti. Aenean eu mauris vitae neque efficitur maximus quis in urna.',
  'Praesent id sollicitudin nibh. Sed ex erat, lobortis volutpat libero in, pretium sodales tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus condimentum urna eu diam mattis, ut porta massa laoreet. Ut nec risus lorem. Proin vestibulum efficitur eleifend. Aenean ultricies est in aliquet condimentum. Cras aliquet, arcu sit amet lacinia pretium, enim mi luctus metus, id consectetur lorem turpis vel ex. Sed at ex sit amet elit tempus suscipit. Cras elementum elit sed nibh fermentum pharetra. Aenean ullamcorper diam sed risus lacinia porta. Morbi nisi nisi, suscipit et est vitae, maximus suscipit lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vestibulum sagittis tortor, a ullamcorper eros vestibulum ut.',
  'Proin non porta felis, vel feugiat nulla. Donec rhoncus vulputate vestibulum. Maecenas vitae quam lacus. Donec rutrum in nibh at maximus. Curabitur sed urna posuere, imperdiet erat et, blandit est. Curabitur sit amet ipsum non massa tincidunt pharetra in a libero. Mauris elementum scelerisque porta. Sed ut dolor hendrerit, cursus nisl non, ultrices metus. Phasellus feugiat velit id felis gravida dignissim.'
]

function jokeHover() {
  let aleatorio = Math.floor(Math.random() * 3)
  const element = document.getElementById('titleCard1')
  const textChange = document.getElementById('textToChange')
  textChange.textContent = textJoke[aleatorio]
  return (element.innerText = jokes[aleatorio])
}
