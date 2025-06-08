// 

function exibirNomeDoDog(nome) {
    console.log(nome)
}

function exibirPorteDoDog(porte = "ND") {
       console.log(porte)

}

function obterNomeDoDogFormataodo(nome) {
  return nome.toUpperCase()
}

function obterObjetoDog(){
    return {
        nome : 'Bailey Maria',
        peso :  11.5
    }
}

  exibirNomeDoDog("Pipoca")
  exibirPorteDoDog()
  console.log(obterNomeDoDogFormataodo("Bailey Maria"))
