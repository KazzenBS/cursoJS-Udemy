function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date,
    }
}

function imprimirNomeGritado (obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally { //executado mesmo que ocorra algum erro
        console.log('Final')
    }
}

const obj={nome:'Roberto'}
imprimirNomeGritado(obj)