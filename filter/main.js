// filter

// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

// remover duplicados 
const numbers = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5]

const removeDup = numbers.filter( (elem, index, arr) => arr.indexOf(elem) === index )

console.log(removeDup);

// filtrar maiores q 10 

function isBigEnough(value) {
  return value >= 10;
}

const filtered = numbers.filter(isBigEnough)

console.log(filtered);