// API 

// API é um acrônimo para Application Programming Interface, ou Interface de Programação de Aplicação, em português. Trata-se de um conjunto de rotinas e padrões que facilitam a comunicação e troca de informações entre sistemas.

// implementando uma API com o https://randomuser.me/

const url = "https://randomuser.me/api/?results=10"

async function getPeople() {
  const response = await fetch(url)

  return response.json()
}

// getPeople().then( data => console.log( data ))

// somente mulheres

// getPeople().then( data => {
//   const people = data.results

//   console.log(people.filter( e => e.gender === "female"));
// } )


// trabalhando com dados 

getPeople().then( data => {
  const result = data.results
  const people = []

  for (let p of result){
    people.push({
      "Nome" : `${p.name.first} ${p.name.last}`,
      "Sexo" : p.gender,
      "Idade" : p.dob.age
    })
  }
  
  console.log(people);
  console.table(people);

} )

// somente pessoas abaixo de 30 anos 

