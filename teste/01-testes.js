/**
 
  describe -> agrupador de testes
  it       -> implementação do teste
  
  TDD
    crio o teste
    vejo o teste falhar
    crio a implementaçào para o teste passar
    rodo o teste denovo
    refatoro o código para melhorar ...

    ASSERTION/ASSERCAO
      verificar se um comportamento está de acordo com o esperado

 */
import assert from 'node:assert';
import { exibirNomeDogFormatado } from '../conceitos-js/testes-de-unidade.js'

describe('Testes do Projeto', () => {

  it(`deve exibir o nome do dog com letras maiúsculas`, () => {
    assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
    
    // verifique se: <valor atual> É IGUAL A <valor esperado>
  })

  // it('primeiro teste', () => {
  //   // Test implementation goes here
  // })

  it('segundo teste', () => {
    // Adicione uma asserção relevante aqui ou deixe vazio se não houver nada para testar ainda
    assert.strictEqual(1 + 1, 2)
  })

})
