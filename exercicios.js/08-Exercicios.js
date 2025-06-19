/** 
 Controle de petiscos
   Crie um script que receba uma quantidade de petiscos e de 1 por vez até o dog estiver satisfeito.
   
   Use a estrutura de repetição for contado.

   Exiba: 
   Cada vez que um petisco for entregue
   Quando o Dog estiver Satisfeito (o que quando terminar os petiscos)

   Extra: transforme a logica em uma funcao (da forma que conseguir)
*/
   const quantidadePetiscosDisponiveis = 4
   for (let petisco=1; petisco <= quantidadePetiscosDisponiveis; petisco++) {
     console.log (`Dando o petisco de nº ${petisco} para o Toto`)

   }
   console.log (`Satisfeito,chega de petiscos por hoje`)
   
   const alimentarDog = (quantidadePetiscos) => {
    for (let i = 1; i <= quantidadePetiscos; i++) {
       console.log(i < quantidadePetiscos ? `Ganhei ${i} petisco.Quero mais!!` : `Agora estou safisteito`);
    }
   }
alimentarDog (4);