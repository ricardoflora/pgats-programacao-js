/*
Calculadora de Ração diaria
Crie um script que receba o peso do dog em KG + estoque atual de ração em gramas, 
Calcule a quantidade diaria de ração com base na seguinte formula:
Exiba :

Nome do Dog
Peso
Quantidade de ração recomendada por dia 
Quantos dias o estoque atual vai durar
*/

const nome = 'Mel'
const peso = 20 
const estoque = 5000
const gramasPorDia = peso * 30 
const duracaoEstoque = Math.floor (estoque / gramasPorDia)

console.log (`Nome do Dog: ${ nome }`)
console.log (`Peso ${peso}`)
console.log (`Gramas por dia :${gramasPorDia}`)
console.log (`O estoque vai durar: ${duracaoEstoque}`)
console.log (`-------------------------------------`)

