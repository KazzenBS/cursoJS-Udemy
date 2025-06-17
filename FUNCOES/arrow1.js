let dobro = function(a){
    return 2 * a
}

dobro = a =>{
    return 2 * a
} // arrow é sempre anonima

dobro = a => 2*a/*para funções de uma linha, implicitamente apos
a arrow chama um retorn*/

console.log(dobro(Math.PI))

let ola = function(){
    return 'ola'
}

ola =()=>'ola'
ola = _ =>'ola' //possui parametro somente para nao usar parenteses
console.log(ola())//chama sem parametro para ignorar o paramentro acima
