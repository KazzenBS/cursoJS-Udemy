//essse recurso veio no ES2015

const pessoa ={
    nome:'ana',
    idade:20,
    endereço:{
        logradouro:'rua a',
        numero:5
    }
}

const {nome,idade} = pessoa /* as chaves {} representam
o operador destructuring que ira tirar algo de um objeto.
Ele transforma o que foi extraido em variaveis com valor 
que estava atribuido dentro do objeto.
Caso fosse extratir de um array seriam um part de conchetes []*/

console.log(nome, idade)

const{nome:n, idade:i} = pessoa /* muda o nome de da variavel*/

const{sobrenome, bemHumorada=true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereço: {logradouro, numero, cep}}=pessoa
console.log(logradouro, numero, cep)

/*é preciso ter cuidado ao acessar algum elemento que o seu
elemento pai é nulo.*/