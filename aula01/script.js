let array = [1, 2, 4, 8]

console.log(
  array.reduce((acumulador, valor) => {
    console.log(acumulador)
    return acumulador + valor
  })
)
