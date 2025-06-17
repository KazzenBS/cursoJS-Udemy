function Pessoa () {
    this.idade =0

    const self = this
    setInterval(function(){
        self.idade++//self sempre vai apontar para pessoa
        console.log(self.idade)
    }/*.bind(this)*/, 1000)/*a cada x ms a funcao é executada
    o bind aponta para o this fora do bloco setInterval
    garantindo que o tipo de valor da variavel mude de NaN
    para Number, permitindo o bloco idade ++
    */
}

new Pessoa