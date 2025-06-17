/*é o escopo criado ao definir uma funcao. O qual permite que as 
variaveis externas sejam manipuladas por uma funcao*/

const x = 'global'

function fora(){
    const x ='local'
    function dentro(){
        return x        
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())