Array.prototype.forEach2 = function(callback){
    for (let i=0; i<this.length;i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha','Alda','Daniel','Raquel']

/* minha solução
function forEach2(){
    for (i=0;i<aprovados.length;i++){
        console.log(`${i}, ${aprovados[i]}`)
    }
}

forEach2()

*/
aprovados.forEach2(function(nome, indice,/*array*/){
    console.log(`${indice + 1} - ${nome}`)
    //console,log(array)
})
