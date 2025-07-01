/*pessoa (variavel)->123(endereço de memoria)->{....} 
aponta pra endereço de memoria*/
const pessoa = {nome:'joao'}
pessoa.nome = 'pedro'//endereço permanece mas muda o conteudo
console.log(pessoa)

/* pessoa<-456 ->{...} variavel aponta para outro endereço de
 memoria que recebe um novo objeto, mas da erro porque é 
 constante*/
//pessoa = {nome:'ana'}

Object.freeze(pessoa)/*congela o objeto e não deixa mudar nenhum conteudo
do objeto*/
pessoa.nome = 'maria'
pessoa.end = 'rua 3'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'marcos'})
pessoaConstante.nome = 'maria'
console.log(pessoaConstante)