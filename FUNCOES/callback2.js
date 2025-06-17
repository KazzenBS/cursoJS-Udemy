const notas = [7.7, 6.2, 5.5, 8.9, 3.6, 7.1,9.0]

//sem callback

let notasBaixas = []
for (let i in notas){
    if (notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback

const notasBaixas2 = notas.filter(function (nota/*o elemento do array*/){
    return nota <7
}) /*essa função de callbak faz uma filtragem 
nos elementos do array notas e se for verdadeiro, o array notasBaixas
recebe o elemento.*/
console.log(notasBaixas2)

//com arrow

const notasBaixas3 = notas.filter(nota => nota<7)
console.log(notasBaixas3)

//mais elegante

const notasMenor7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenor7)
console.log(notasBaixas4)