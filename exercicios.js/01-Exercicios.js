/*A tag deve ter :
  O nome em letras Maiusculas
  A raça com a primeira letra maiuscula
  Peso
*/

const nome = "Dogo", raca = "vira-lata"
let idade = 1, peso =1.2, adotado = false

let nameUpperCase = nome.toUpperCase()
let racaFirstletter = raca.slice(0,1).toUpperCase()+raca.slice(1).toLowerCase()

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirstletter
}]

console.log (animal)
console.table(animal)

