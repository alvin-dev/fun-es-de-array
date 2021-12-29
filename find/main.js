// find

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

// encontrar pizza

const pizzas = [
  "mussarela",
  "calabresa",
  "portuguesa",
  "marguerita"
]

const foundPizzaWithM = pizzas.find(p => p.startsWith("m"))

console.log(foundPizzaWithM);

// ex:2 encontrar frutas

const fruits = [
  {name: "jaca", quantity:2},
  {name: "banana", quantity:0},
  {name: "cereja", quantity:5}
]

const foundFruit = fruits.find( fruit => fruit.name === "cereja")

console.log(foundFruit);