function SoBoaNoticia(nota){
    if (nota >= 7) {
        console.log(`Aprovado com nota ${nota}`)
    }
}

SoBoaNoticia(8.1)
SoBoaNoticia(6)

function SeforVerdadeEuFalo(valor){
    if (valor) { //precisa ter valor true
        console.log(`É verdade ... ${valor}`)
    }
}

SeforVerdadeEuFalo()//undefined é falso
SeforVerdadeEuFalo(null)//tambem é falso
SeforVerdadeEuFalo(undefined)//falso
SeforVerdadeEuFalo(NaN)//falso
SeforVerdadeEuFalo('')//falso
SeforVerdadeEuFalo(0)//falso
SeforVerdadeEuFalo(-1)
SeforVerdadeEuFalo(' ')
SeforVerdadeEuFalo('?')
SeforVerdadeEuFalo([ ])
SeforVerdadeEuFalo([1, 2])
SeforVerdadeEuFalo({})