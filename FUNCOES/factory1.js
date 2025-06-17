const prod1={
    nome: 'arroz',
    preço: 45
}

const prod2={
    nome: 'feijao',
    preço: 20
}

//é uma funcao que retorna um objeto

function criarProduto(){
    return{
        nome: 'fuba',
        preço: 10
    }
}

console.log(criarProduto())