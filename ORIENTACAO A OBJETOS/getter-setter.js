const sequencia = {
    _valor: 1,/* o underline é uma convencao que mostra visualmente
    que essa variavel é acessada internamente no objeto*/
    //metodo getter
    get valor(){return this._valor++},//o getter retorna o valor antes de ser incrementado
    //metodo setter
    set valor(valor){
        if(valor>this._valor){
            this._valor=valor//valida se o numero é seguinte
        }
    }
}
   
console.log(sequencia.valor, sequencia.valor)//chama o metodo get e retorna o valor antes do pos incremento
sequencia.valor=101 // chama o metodo set
console.log(sequencia.valor, sequencia.valor)//chama o metodo get