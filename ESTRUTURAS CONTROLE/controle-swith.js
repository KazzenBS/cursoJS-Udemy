const ImprimirResultado = function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra') //bloco para case 10 ou 9
            break// <---evita execução em cascata
        case 8: case 7:
            console.log('aprovado')
            break
        case 6: case 5: case 4:
            console.log('recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado')
            break
        default:
            console.log('nota invalida')
    }
    console.log('fim')
}

ImprimirResultado(10)
ImprimirResultado(8.9)
ImprimirResultado(6.55)
ImprimirResultado(2.3)
ImprimirResultado(-1)
ImprimirResultado(11)
s