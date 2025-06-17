function Carro(velocidadeMaxima=200, delta=5){
/* ou
class Carro {
    constructor(velocidadeMaxima = 200, delta = 5) {
*/
    //atributo privado (private)
    let velocidadeAtual=0 //so é enxergado dentro da funcao

    //metodo público(public)
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual+=delta                   
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico(public)
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
