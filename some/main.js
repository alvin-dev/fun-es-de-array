// some

// O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.

// verificar se há açgum numero primo

function numerosPrimos (value) {
  for(let i = 2; i < value; i++) { 
    if (value % i === 0) {
      return false
    }
   }
   return value > 1
  }


const numbers = [6, 8, 11, 14, 42]

console.log(numbers.some( numerosPrimos ));

// ex:2 verificar por condições/objetos

const team = [
  {id: 12, name: "Alvaro", pilot: true},
  {id: 44, name: "João", pilot: true},
  {id: 59, name: "Pete", pilot: false},
  {id: 122, name: "Jhonny", pilot: false}
]



console.log(team.some( person => person.pilot ));