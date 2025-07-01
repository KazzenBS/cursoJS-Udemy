const pessoa ={
    nome:'rebeca',
    idade: 2,
    peso:13
}

console.log(Object.keys(pessoa))//extrai as chaves
console.log(Object.values(pessoa))//extrai os valores

console.log(Object.entries(pessoa))/*extrais os elementos em formato
 array, permitindo que seja manipulado como tal*/
Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})
/*ou com destructuring - desestrurar o array
Object.entries(pessoa).forEach(([chave , valor]) =>{
    console.log(`${chave}: ${valor}`)
})
*/

Object.defineProperty(pessoa/*alvo*/, 'dataNascimento'/*elemento*/, {
    enumerable: true,
    writable: false,//nao aceita ser sobre-escrita - freeze
    value: '01/01/2019' //propriedades definidas
}) 

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Objet.assign - ECMAScript 2015

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}//a: 4 sobrescreve a: 1

const obj = Object.assign(dest,o1,o2) /*concatena as chaves e 
valores entre os objetos*/

Object.freeze(obj)
obj.c = 1234
console.log(obj)