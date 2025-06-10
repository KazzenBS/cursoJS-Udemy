const notas = [6.7, 7.8, 9.1, 5.2, 4.8, 9.4]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 18
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

