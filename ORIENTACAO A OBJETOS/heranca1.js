/*1 elemento so tem um elemento pai
usada para reutilizar codigos
busca atributos e elementos do elemento filho (menor hierarquia)
e avança para os de maior hierarquia (prototype). Caso não encontre
em nenhum é retornado undefined*/
/*o atributo prototype só é disponivel em função
[[prototype]] é o conceito de prototype*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax:200
}

console.log(ferrari.__proto__) /*permite acessar o prototypo ou o super
elemento*/
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto (){}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)


/*
por padrão um objeto recem criado tem herança
do Object.prototype
*/