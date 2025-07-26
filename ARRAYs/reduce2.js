const alunos =[
    {nome:'joao',nota:7.3,bolsista:true},
    {nome:'maria',nota:9.2,bolsista:true},
    {nome:'pedro',nota: 9.8,bolsista:false},
    {nome:'ana',nota:8.7,bolsista:true}
]

//desafio 1: todos os alunos sao bolsitas?
const todosOsBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosOsBolsistas))
//false


//desafio 2: algum aluno é bolsista?
const algumBolsistaRecebe = (resultado, bolsista)=>resultado||bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsistaRecebe))
//true