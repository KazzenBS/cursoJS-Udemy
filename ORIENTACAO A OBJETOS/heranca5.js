console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//^é tudo função

String.prototype.reverse = function(){
    return this.split('').reverse().join('')/*quebra o texto letra 
por letra incluindo espaços, gera um array, reverte a posição e 
depois os une*/
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5,6].first())
console.log(['a','b','c','d'].first())

String.prototype.toString = function(){/*substitui o comportamento de
    toString pois outras funcoes esperam receber o comportamento padrao
    da funcao toString*/
    return 'lascou tudo'
}

console.log('Escola Cod3r'.reverse())