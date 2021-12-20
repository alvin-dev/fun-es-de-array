// map

// dobrar valores
const numbers = [2, 4, 5, 12, 45]

function dobrarNumeros(number) {
  return number * 2
}

const dobrar = numbers.map(dobrarNumeros)

// console.log(dobrar);


// conversor de fahrenheint para celsius 
const fahrenheint = [0, 32, 45, 50, 75, 80, 120]

const convertToCelsius = fahrenheint.map( number => Math.round((number - 32) * 5/9))


console.log(convertToCelsius);

