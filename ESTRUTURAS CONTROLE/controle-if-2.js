//js desconsidera identação
function Teste1(num){
    if (num> 7)
        console.log(num)
        console.log('final')
}

Teste1(6)
Teste1(8)

function teste2(num){
    if (num>7);{//cuidado com ponto e virgula
        console.log(num)
    }
}

teste2(6)
teste2(8)
