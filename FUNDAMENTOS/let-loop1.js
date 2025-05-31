const funcs = []

for (let i=0; i<10;i++){
    funcs.push(function(){
        console.log(i)
    })//adiciona item no array com i baseado no seu valor de bloco
}

funcs[2]()
funcs[8]()
// a funcao tem consciencia do local ao qual foi definida
