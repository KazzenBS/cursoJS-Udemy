console.log('a = ',a)//undefined
var a = 2
console.log('a = ', a)

//ou
var a
console.log('a = ',a) // undefined
a = 2
console.log('a = ', a)

console.log('b = ',b)//nao ocorre içamento(hoisting)
let b = 2
console.log('b = ', b)

//hoisting move a declaração para o topo