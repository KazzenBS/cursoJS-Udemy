function soma(){
    let  soma = 0
    for (i in arguments){/*propriedade que é um array que retorna 
        os parametros da função como elementos*/
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,2,3,4,5))

console.log(soma(1,2,3,4,5, "teste"))
console.log(soma('a','b','c'))// '0' valor declarado de soma


