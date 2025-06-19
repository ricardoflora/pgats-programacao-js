/**
 * listaDeAlunos
 * Matheus
 * Renata
 * Leandro
 * Ana
 * Lucas
 * 
 */
 
 const listaDeAlunos = [
   {
    
    nome:'Matheus', 
    nota :7
   },
   {
    nome :'Renata',
    nota:7
   },
   {
    nome :'Leandro',
    nota :7
   },
    {
    nome :'Leandro',
    nota :9
   },
   {
    nome :'Ana', 
    nota : 5
   },
   {
    nome :'Lucas',
    nota : 4
   }
 ]
 listaDeAlunos.forEach (aluno => { 
    if (aluno.nota < 7) {
        console.log (`O aluno ${aluno.nome} precisa do trabalho extra`)
    }
 })
 