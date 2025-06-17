function Pessoa () {
    this.idade =0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)//a cada x ms a funcao é executada
}

new Pessoa