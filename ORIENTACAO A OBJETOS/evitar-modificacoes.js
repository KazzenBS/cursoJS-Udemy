/*Object.preventExtensions -- não deixa aumentar o numero de atributos
porem permite excluir ou editar*/
const produto = Object.preventExtensions({
    nome: 'qualquer',preço:1.99,tag:'promocao'
})
console.log('extensivel:',Object.isExtensible(produto))
produto.nome='boracha'
produto.descricao='borracha escolar'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa ={nome:'julia', idade: 25}
Object.seal(pessoa)/*nao consegue adicionar ou excluir atributos ou 
elementos, mas permite mudar os valores dos mesmos*/
console.log('selado:', Object.isSealed(pessoa))
pessoa.sobrenome='martins'
delete pessoa.nome
pessoa.idade = 26
console.log(pessoa)

//Object.freeze = selado + valores ficam constantes