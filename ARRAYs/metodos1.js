const pilotos=['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop()//massa quebrou o carro, remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')//adiciona um elemento apos a ultima posicao
console.log(pilotos)

pilotos.shift()//elimina a primeira posicao
console.log(pilotos)

pilotos.unshift('Hamilton')//adiciona um elemento na primeira posicao
console.log(pilotos)

//splice pode adicionar ou remover elemento

pilotos.splice(2,0,'Botas','Massa')/*posição 2, sem remover ninguem, 
elemento 1, elemento 2*/
console.log(pilotos)

//remover
pilotos.splice(3,1)//posição 3 e removendo 1 elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//gera um novo array a partir o indice 2
console.log(algunsPilotos1)

const algunsPilotos2=pilotos.slice(1,4)//do 1 até o elemento ao elemento antes do 4, no caso o 3
console.log(algunsPilotos2)
