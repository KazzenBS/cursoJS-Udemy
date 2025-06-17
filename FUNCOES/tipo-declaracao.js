console.log(soma(3, 4)) /*
o interpretador do JS carrega antecipadamente todas as funções do tipo
fuction declaration, por isso o codigo funciona antes mesmo dela ser
declarada no arquivo*/

//fuction declaration
function soma(x, y){
    return x + y
}

console.log(sub(3, 4)) /* funcoes funcion expression e named func expression
tem que ser evocadas apos serem declaradas*/

//function expression
const sub = function (x, y){
    return x - y
}

//named function expression
const mult = function mult (x, y){//ajuda a debugar pois aparece o nome no debug log
    return x + y
}


