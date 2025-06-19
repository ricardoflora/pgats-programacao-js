// Distribuidor de Petiscos
/*
Você tem uma lista de cães: Pantera, Luna e Thor
Crie um script que "entregue" 1 petisco para cada cao da lista
Exiba uma mensagem como "Entregando petisco para Pantera"

Mantenha os Dados e a Funçao em arquivos separados; use modularizaçao para organiar
*/


import{DOGS} from './10-Exercicios-dados.js'

function entregarPetiscos(listaDeDogs) {
    listaDeDogs.forEach(dog =>{
        console.log (`Entregando petisco para ${dog}`)
    })
}

entregarPetiscos(DOGS)