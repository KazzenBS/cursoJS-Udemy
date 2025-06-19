function getPreco(imposto=0, moeda='R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4.589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())//chamada direta
console.log(produto.getPreco())//chamada com objeto

const carro = {preco:49000, desc : 0.2}
console.log(getPreco.call(carro))
console.log(getPreco.apply (carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17,'$']))//parametros no array