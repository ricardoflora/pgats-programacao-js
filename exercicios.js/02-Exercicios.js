/**
 * Validador de nomes para as tags
 * 
 * Alguns donos estao registrando os dogs com nomes mal formatados , Crie um script para limpar e padrozinar os nomes
 * 
 * 
 * Aplique as formatacoes e exibe :
 * 
 * - O nome original , como foi cadastrado
 * - O nome formatado 
 * 
 * Extra: Aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é valido ou nao 
 * * 
 */

 const nomeDog = "Ricardo Flora"
 let nomeFormatado = nomeDog.trim()
 const palavras = nomeFormatado.split(/\s+/)
 nomeFormatado = capitalizarPalavra(nomeFormatado)
 

 console.log(palavras)
 nomeFormatado = removerCaracteresEspeciais(nomeFormatado)
 const valido = palavras.length === 1



 console.log(nomeDog)
 console.log(nomeFormatado)
 console.log(valido)

 function removerCaracteresEspeciais(nome) {
   return nome.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")

 }
  function removerEspacosEntreAPalavra (nome) {
   nome.replace(/\s+/g,"")
   return 

  }
function capitalizarPalavra(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1,nome.length).toLowerCase()
}