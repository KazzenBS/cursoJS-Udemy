//retornam verdadeiro ou falso

console.log('01)', '1' ==1) // == compara o valor
console.log('02)', '1' ===1) // compara estritamemente o valor e tipo
console.log('03)', '3' !=3) // nao é igual
console.log('04)', '3' !== 3) //não é igual estritamente

console.log('05)', 3 <2)
console.log('06)', 3 >2)
console.log('07)', 3 <=2)
console.log('08)', 3 >=2)

const d1 = new Date(0) //0 = data de referencia do Javascript 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 ===d2)
console.log('10)', d1 ==d2) // compara duas referencias de memoria e retorna falso
console.log('11)', d1.getTime() === d1.getTime())//compara dois numbers estrit iguaç
console.log('12)', undefined==null)
console.log('13)', undefined === null)

// mais adequado usar === para trabalhar com mesmo valor e tipo
