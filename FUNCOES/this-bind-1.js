/*this acessa o 'dono' de um determinado bloco de codigo, por exemplo 
um objeto no contexto de execução -- se declarar uma funcao com arrow
o this se torna de contexto lexico, ou seja conforme onde foi declarada
a função*/

const pessoa = {
    saudacao: 'bom dia',
    falar(){
        console.log(this.saudacao)//this é pessoa -pessoa.saudacao
    }
}

pessoa.falar()

const falar = pessoa.falar
falar()//conflito de paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)/*bind amarra o this 
entre o elemento que o representa e uma variavel em contexto separado*/
falarDePessoa()




