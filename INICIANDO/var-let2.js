//ideal é evitar variaveis globais

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)