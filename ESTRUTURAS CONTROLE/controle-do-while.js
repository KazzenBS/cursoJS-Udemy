function getInteiroAleatorio (min , max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao //somente inicia, deixa como undefined

do{
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Ate a proxima...')
