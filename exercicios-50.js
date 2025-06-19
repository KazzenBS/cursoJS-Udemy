const notas = [2.2,6.7, 7.8, 9.1, 5.2, 4.8, 9.4]

for (let i in notas) {
    if (notas[i]>0 && notas[i]<=4.9){
        console.log(`${notas[i]}: D`)
    } else if (notas[i]>=5 && notas[i]<=6.9){
        console.log(`${notas[i]}: C`)
    } else if (notas[i]>=7 && notas[i]<=8.9){
        console.log(`${notas[i]}: B`)
    } else if (notas[i]>=9 && notas[i]<=10){
        console.log(`${notas[i]}: A`)
    }
    
}

