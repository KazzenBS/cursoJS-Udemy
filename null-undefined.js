var a //undefined
a = 2
b = a // passagem de valor
console.log(a)
var aluno={nome:'carlos'}
c=aluno//passagem de referencia
console.log(c)

aluno.nome={}
console.log(c)
console.log(aluno)//elemento vazio
aluno={} 
console.log(aluno)//objeto
aluno=null
console.log(aluno)//null - sem posição de memoria como referencia

