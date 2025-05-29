console.log(Math.ceil(6.1))

const obj1={}
obj1.nome='bola'
//obj1['nome']='bola2'
console.log(obj1.nome)

function Obj2(nome){
    this.nome = nome //this faz refencia a quem chamar a função, no caso o objeto recebe um atributo nome
    this.exec = function(){//cria uma funcao que é inserida dentro de um objeto
        console.log('Exec...')
    }
}

const obj3= new Obj2('Cadeira')
const obj4 = new Obj2('Mesa')

console.log(obj3.nome)
console.log(obj4.nome)
obj3.exec()