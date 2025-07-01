//notacao literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//função construtora
function Produto(nome, preco, desc){ // esses sao internos
    this.nome = nome // this deixa o atributo publico
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('caneta', 7.99, 0.15)
const p2 = new Produto ('noteboook', 2999.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


//funcao factory
function criarFuncionario(nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario /30)*(30-faltas)
        }
    }
}

const f1 = criarFuncionario('joao',2000, 4)
const f2 = criarFuncionario('maria',3000, 1)
console.log(f1.getSalario(),f2.getSalario())


//Object.creat
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)


//Uma funcao famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)