// Tratamento de Excecoes
/* 
tentar {
conexao com Banco (exemplo)
} pegar (erro/excecao){
// salvar a excecao em algum lugar...
// exibir 
}

lancar = throw
*/

try {
    // throw new Error ('Pet nao quis alimento')
    // EXECUTAR UMA QUERY 
    console.log ('Tentando alimentar o Pet')
    throw new console.error('Pet nao quis alimento');
    
    th
    // TENTAR CONECTAR NO BANCO
    // EXECUTAR UMA QUERY
} catch (excecao) {
    console.log(excecao)
  // CAPTURAR A EXCECAO  
} finally {
    console.log ('SEMPRE SEREI EXECUTADO')
}
