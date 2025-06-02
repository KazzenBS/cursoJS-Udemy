function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2//const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
        const comprarTv32 = trabalho1 != trabalho2 //xor
    const manterSaudavel = !comprarSorvete //unario
    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    //recurso novo do ES de um objeto com chave omitida, quando a chave é igual ao valor
    /*é criado implicidamente
    {
    comprarSorvete: comprarSorvete
    comprarTv50: comprarTv50
    comprarTV32: comprarTV32
    manterSaudavel: manterSaudavel
    }
    */
}



console.log(compras(true,true))
console.log(compras(true, false))
console.log(compras(false,true))
console.log(compras(false, false))

