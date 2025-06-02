

  /*
  idade 2 + porte M = sim, pela idade
  idade 2 + porte P = sim, pela idade
  idade 1 + porte P = sim, pelo porte
  */


  const nome = 'Ada'
  const idadeMinima = 4
  const porte = 'P'
  const idade =2

  const adocao = idade >= idadeMinima || porte === 'P'
                 ? 'sim' 
                 : porte === 'P'                        
                 ? 'sim'
                 : 'não'


  console.log (adocao)


  function verificarSePodeSerAdotado(idade, porte) {
  const adocao = idade >= idadeMinima || porte === 'P'
                 ? 'sim' 
                 : porte === 'P'                        
                 ? 'sim'
                 : 'não'
  }

verificarSePodeSerAdotado(2,'P');



