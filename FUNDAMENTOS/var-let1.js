/*var com escopo, é visivel globalmente 
desde que nao esteja em funcao*/

{
    {
        {
            {var sera='Sera???'}
            console.log(sera)
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
}

teste()
//console.log(local)

//toda variavel global fica dentro do objeto window
 