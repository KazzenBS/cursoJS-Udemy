//selecionar um array baseado em criterios percorrendo-o
const produtos = [
    {nome:'notebook',preco:2499,fragil:true},
    {nome:'ipad pro',preco:4199,fragil:true},
    {nome:'copo de vidro',preco:12.99,fragil:true},
    {nome:'copo de plastico',preco:18.99,fragil:false}
]

const caro = produto => produto.preco>=500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))