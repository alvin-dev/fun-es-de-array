// reduce

// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

// remover duplicados 
const rokets = [
  {country: "Russia", launches: 32},
  {country: "US", launches: 23},
  {country: "China", launches: 16},
  {country: "Europe", launches: 7},
  {country: "India", launches: 4},
  {country: "Japan", launches: 3}
]

const totalLaunches = rokets.reduce((previousValue, currentValue) => previousValue +
currentValue.launches, 0) 

console.log(totalLaunches);