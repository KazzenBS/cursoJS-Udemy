const pai ={nome:'Pedro', corCabelo:'preto'}

const filha1 =Object.create(pai)
filha1.nome='Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome:{value:'Bia', writable:false,enumerable: true}
    /*writable false -> não permite alteração, congelado
    enumerable-> recebe uma numeração e permite que seja usado for in
    */
})

console.log(filha2.nome)
filha2.nome='Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))//retorna porque enumerable é true

for(let key in filha2){
    //console.log(key)
    filha2.hasOwnProperty(key)?
        console.log(key) : console.log(`por herança:${key}`)
}