function MeuObjeto (){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)/*aponta para o mesmo 
prototipo*/
console.log(MeuObjeto.prototype === obj1.__proto__)/*o prototipo é a função*/

MeuObjeto.prototype.nome ='Anonimo'
MeuObjeto.prototype.falar= function(){
    console.log(`Bom dia meu nome é ${this.nome}`)
}


obj1.falar()
obj2.nome='carlos'
obj2.falar()

const obj3 = {}
obj3.__proto__=MeuObjeto.prototype
obj3.nome ='Obj3'
obj3.falar()

//resumindo a cadeia de prototipos
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)//true
console.log(MeuObjeto.__proto__ === Function.prototype)/*um objeto criado
a partir de uma função aponta para Function.prototype*/
console.log(Function.prototype.__proto__ === Object.prototype)/*o objeto
Function.prototype aponta para Object.prototype*/
console.log(Object.prototype.__proto__ === null)/*não aponta para nada
pois não tem nada acima de Object.protype*/