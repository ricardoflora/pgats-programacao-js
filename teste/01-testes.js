/** 
 * describe -> agrupador de testes 
 * it       -> implementação do teste 
 * 
 */
import { exibirNomeDogFormatado } from "../conceitos-js/testes-de-unidade.js"
import assert from 'node:assert'

describe ('Testes do Projeto', () => { 
    it (`deve exibir o nome do dog com letras maiúsculas`,)
    it('primeiro teste',() => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'),'MIMOSA') 

    })

    it('segundo teste',() => {
        throw new Error()

    })
})
