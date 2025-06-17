const soma = function(x, y){
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3,4)
imprimirResultado(3,4, soma)
imprimirResultado(3, 4, function(x, y){ //operação recebe a function
    return x- y //no lugar da soma faz a subtração
})

imprimirResultado(3, 4, (x,y)=>x*y)/*faz a multiplicação baseado no
 contexto acim, no caso o global ou window*/

const pessoa = {
    falar: function(){
        console.log('opa')
    }
    /* ou
    falar(){
        console.log('opa')
    }
    */
}

pessoa.falar()