//funcao sem retorno//
function imprimirSoma(a, b){
        console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) //um valor inteiro mais outro undefined
imprimirSoma(2,3,4,6,7)//pega os dois primeiros e ignora o resto. é uma flexbilidade da linguagem
imprimirSoma(1,'A')

//funcao com retorno
function soma(a, b=4){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma())