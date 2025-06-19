class Pessoa {
    constructor(nome){//construtor
        this.nome = nome //variavel publica
    }

    falar(){ //metodo
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()
////////////////////////

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Carlos')
p2.falar()