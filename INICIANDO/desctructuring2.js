
const [a]=[10] /*criada uma variavel a que 
recebeu o valor do primero elemento do array
que no caso é 10
*/
console.log(a)
//    atribui nessa       tira dessa estrutura  
const [n1, ,n3, ,n5,n6=0]=[10,7,9,8]/*
n1 é o primeiro elemento = 10
segundo é ignorado
n3 é o terceiro elemento = 9
quarto é ignorado
n5 é undefined
n6 é 0
*/
console.log(n1,n3,n5,n6)
//                   matriz = arrays com arrays
const [ , [ , nota]]=[[ ,8, 8], [9, 6, 8]]
console.log(nota)
/* 
ignora o primeiro elemento do array, que no caso
é o array [ ,8, 8]. no segundo elemento, array
[9, 6, 8], pula o primeiro elemento (9) e atribui
baseado no segundo elemento, entao
nota =6
*/
