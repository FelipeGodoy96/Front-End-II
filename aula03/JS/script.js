// function play() {
//   let playerScore = 0
//   let computerScore = 0
//   const computerChoice = document.getElementById('computerChoice')
//   symbols = ['', 'Rock', 'Paper', 'Scissors']
//   let user = parseInt(
//     prompt('Type:\n1 for Rock,\n2 for Paper\n3 for Scissors\n')
//   )
//   let computer = Math.floor(Math.random() * 3 + 1)
//   console.log(`You: ${symbols[user]}\nComputer: ${symbols[computer]}`)
//   switch (user) {
//     case computer:
//       console.log('Draw!')
//       break
//     case 1:
//       if (computer == 2) {
//         console.log('You lose!')
//         computerScore++
//       } else if (computer == 3) {
//         console.log('You win!')
//         playerScore++
//       }
//       break
//     case 2:
//       if (computer == 1) {
//         console.log('You win!')
//         playerScore++
//       } else if (computer == 3) {
//         console.log('You lose!')
//         computerScore++
//       }
//       break
//     case 3:
//       if (computer == 1) {
//         console.log('You lose!')
//         computerScore++
//       } else if (computer == 2) {
//         console.log('You win!')
//         playerScore++
//       }
//       break
//     default:
//       console.log('Invalid input, please enter 1, 2 or 3')
//   }
//   if (computerScore > 1) {
//     console.log('Computer wins the best of three')
//   }
//   if (playerScore > 1) {
//     console.log('You win the best of three')
//   }
// }

//Mesa 6
//Tomas Ott
//Jailson Junior
//Felipe Godoy
//Felipe Seo
//Vitor Luz
function play() {
  let playerScore = 0
  let computerScore = 0
  symbols = ['', 'Rock', 'Paper', 'Scissors']
  while (playerScore < 2 && computerScore < 2) {
    let user = parseInt(
      prompt('Type:\n1 for Rock,\n2 for paper\n3 for scissors\n')
    )
    let computer = Math.floor(Math.random() * 3 + 1)
    console.log(`You: ${symbols[user]}\nComputer: ${symbols[computer]}`)
    switch (user) {
      case computer:
        console.log('Draw!')
        break
      case 1:
        if (computer == 2) {
          console.log('You lose!')
          computerScore++
        } else if (computer == 3) {
          console.log('You win!')
          playerScore++
        }
        break
      case 2:
        if (computer == 1) {
          console.log('You win!')
          playerScore++
        } else if (computer == 3) {
          console.log('You lose!')
          computerScore++
        }
        break
      case 3:
        if (computer == 1) {
          console.log('You lose!')
          computerScore++
        } else if (computer == 2) {
          console.log('You win!')
          playerScore++
        }
        break
      default:
        console.log('Invalid input, please enter 1, 2 or 3')
    }
    console.log(
      `Player score: ${playerScore}\nComputer Score: ${computerScore}`
    )
    if (computerScore > 1) {
      console.log('Computer wins the best out of three')
    }
    if (playerScore > 1) {
      console.log('You win the best out of three')
    }
    document.getElementById('playerScore').textContent = playerScore
    document.getElementById('computerScore').innerHTML = computerScore
  }
}
function reset() {
  const playerScore = document.getElementById('playerScore')
  console.log(playerScore)
  const pcScore = document.getElementById('computerScore')
  playerScore.textContent = 0
  pcScore.textContent = 0
}
