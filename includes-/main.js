// includes

// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

// verificar se tem um numero no array 

const numbers = [1, 4, 5, 3, 6, 7]

const ifHaveNumber = numbers.includes(4)

console.log(ifHaveNumber);

// verificar se tem alguem com o nome "Johnny Blaze"

const people = ['Alvaro Guedes', "João Guedes", "Johnny Blaze"]

console.log(people.includes("Johnny Blaze"));

// concatenando metodos 

const users = [
  {id: 11, name: "Alvaro", age: 29, group: "editor"},
  {id: 47, name: "João", age: 21, group: "user"},
  {id: 85, name: "Johnny", age: 34, group: "editor"},
  {id: 97, name: "Ralph", age: 64, group: "admin"}
]

const filteredUsers = users.filter( p => p.group.includes("editor"))

console.log(filteredUsers);