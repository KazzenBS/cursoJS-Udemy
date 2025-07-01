const obj = {a:1, b:2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))/*exclui a função pois o JSON carrega
somente dados*/

//console.log(JSON.parse("{a:1, b:2, c:3}"))

//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))

console.log(JSON.parse('{"a":1, "b":2, "c":3}'))

console.log(JSON.parse('{"a":1, "b":"string", "c":true, "d":{}, "e":[]}'))
/*qualquer texto ou atributo (exceto inteiros ou boobleans) tem que estar
delimitados por aspas duplas "", a notação do Objeto ao ser convertido
para JSON tambem deve estar toda dentro de aspas simples ''*/