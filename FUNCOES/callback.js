const fabricantes = ['mercedes','ford','gol','fiat']

function imprimir(nome, indice){
    console.log(`${indice+1}.${nome}`)
}

/*a ideia de callback é passar uma funcao pra outra funcão e 
conforme um determinado evento, a funcao é disparada novamente, 
uma vez ou mais vezes.
*/

fabricantes.forEach(imprimir)
/*fabricantes.forEach(function(fabricante){ /*o parametro é cada elemento 
                                            do array
    console.log(fabricante) 
})*/

fabricantes.forEach(fabricante => console.log(fabricante))
/*o evento da callback = quando chega em cada elemento / indice 
do array é rechamada a função 'fabricante'que imprime cada elemento
no lugar do parametro 'fabricante'*/