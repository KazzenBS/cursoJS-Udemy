//par nome/valor
const saudacao ='Opa' //contexto lexico - local em que a variavel eh declarada fisicamente no codigo
//contexto do arquivo
//ou contexto global (objeto windows)
//contexto do bloco

function exec(){
    const saudacao ='Falaaa'///contexto de bloco (funcao)
    return saudacao
}

/*objetos sao grupos aninhados de pares
nome/valor*/

const cliente = {
    nome:'pedro',//atributos no contexto do bloco 1
    peso:90,
    numero:4,
    endereço:{//objeto dentro de um objeto
        logradouro:'rua a',//atributos no contexo do bloco 2
        numero:123,
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente.numero)
console.log(cliente.endereço.numero)