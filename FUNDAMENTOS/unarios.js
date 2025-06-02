//incremento e decremento

let num1 = 1
let num2 = 2

num1++ //posfixado
console.log(num1)

--num1 //prefixado e gera prioridade sobre outras operações aritimeticas
console.log(num1)

console.log(++num1 === num2--) //decremento ocorre apos a comparação
console.log(num1 === num2) 
