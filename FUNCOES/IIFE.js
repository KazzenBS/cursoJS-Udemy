//IIFE - Immediately Invoked Function Expression
/*execução no escopo da função e fora do 
escopo global*/

(function (){//funcao anonima
    console.log('sera executado na hora')
    console.log('foge do escopo mais abrangente')
    //mesmo declarando funcoes com var, const ou let esta fora do global
})()/// <- executa a função imediatamente