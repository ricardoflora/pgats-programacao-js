// 

const exibirNomeDoDog  = (nome) => {
  console.log(nome)
}


const exibirPorteDog = (porte = 'ND') =>{
  console.log(porte)
}

const obterNomeDoDogFormataodo = (nome) => {
  return nome.toUpperCase()
}

const listarObjetoDog = () => {
    return {
        nome : 'Bailey Maria',
        peso :  11.5
    }
}

  exibirNomeDoDog("Pipoca")
  console.log(obterNomeDoDogFormataodo("Bailey Maria"))
