// every

// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. 

// verificar se todos os elementos de um array são maiores que 10 
const numberArray = [12, 5, 8, 130, 44]

const allAbove10 = numberArray.every( elem => elem > 10 )

console.log(allAbove10);

// verificar se todos sao maiores de idade
const turma = [
  {id: 12, name: "Alvaro", age: 28},
  {id: 47, name: "João", age: 18},
  {id: 77, name: "Ramon", age: 48},
  {id: 85, name: "Zenon", age: 52}
]

const above18 = turma.every( elem => elem.age >= 18 )

console.log(above18);