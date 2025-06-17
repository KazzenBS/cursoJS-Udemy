/*cidada primeira linha(first class object): trabalha a função como dado,variavel com função,
funcao retorna funcao*/
//higher-order function


//funcao criada literal
function fun1(parametros) {'blocos'}
//retorno é opcional, funcao sem parametros retorna valor undefined

//armazenar uma funcao na variavel
const fun2 = function (){} //funcao anonima na constante

//armazenar em array
const array = [function (a, b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um objeto
const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())

//passar funcao como parametro
function run(fun){
    fun()
}

run(function(){console.log('executando')})

//funcao retorna funcao 

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(1)
console.log(cincoMais)








