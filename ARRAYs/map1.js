//o map transforma em um novo array de mesmo tamanho
const nums = [1,2,3,4,5]
//gerar um array com os elementos dobrados
let resultado = nums.map(function(e){
    return e * 2
})
console.log(nums)
console.log(resultado)

const soma10 = e => e +10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

//maps encadeados
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

