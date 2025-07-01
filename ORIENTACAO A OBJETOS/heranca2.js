//cadeia de prototipos (prototype chain)
Object.prototype.atr0='z'/*evite isso aqui, pois pode quebrar toda a
cadeia de objetos*/

const avo = {atr1: 'a'}// aponta para Object.prototype
const pai = {__proto__: avo, atr2:'b', atr3: 'n'}
const filho = {__proto__: pai, atr3:'c'}

console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3)/*chama a
partir da cadeia de prototipos de baixo para cima*/

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual=this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari ={
    modelo:'f40',
    velMax: 324 //shadowing - sombreada
}

const volvo ={
    modelo:'v40',
    status(){
        return`${this.modelo}: ${super.status()}`/*a palavra super
        evova um atributo do prototipo, para nesse caso não ficar se
        alto referenciando*/
    }
}

Object.setPrototypeOf(ferrari, carro)/*estabelece relação de herança*/
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())