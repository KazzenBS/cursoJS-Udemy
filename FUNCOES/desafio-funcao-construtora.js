function pessoa (nome){
    this.nome = nome 
    
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('Joao')
p1.falar()