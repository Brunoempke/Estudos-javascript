const saudacao = 'opa' //contexto léxico 1

function exec () {
    const saudacao = 'eai' //contexto lexico 2
    return saudacao
}

//objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'bruno',
    idade: 23,
    pse: 30,
    endereço: {
        predio: 'garden',
        quadra: 25
    }
}

console.log(saudacao)
console.log(exec(saudacao))
console.log(cliente)