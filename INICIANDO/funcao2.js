//armazenar funcao em variavel
const imprimirSoma = function (a,b) { //funcao anonima
    console.log(a+b)
}
imprimirSoma(2,3)

//armazenar uma funcao arrow em variavel

const soma = (a,b)=>{
    return a+b
}

console.log(soma(2,3))

//retorno implicito, so é possivel usar em uma linha
const Soma=(a,b)=>a+b
console.log(Soma(2,4))

const imprimir2 = a => console.log(a)
imprimir2('Legal')