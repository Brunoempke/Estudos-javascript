// exerc 1
function calcularOperador (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2)
}

calcularOperador(5, 5)

// exerc 2
function classificarTriangulo (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3){
        return `equilatero`
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        return `isoceles`
    } else {
        return `escaleno`
    }
}

console.log(classificarTriangulo(2,2,2))
console.log(classificarTriangulo(2,2,5))
console.log(classificarTriangulo(2,3,8))

// exerc 3
function expoente (base, expoente){
    resultado= base**expoente
return resultado
}
console.log(expoente(3,9))

//exerc 4
function divisao (dividendo,divisor){
    console.log('resultado = ' + Math.floor(dividendo/divisor))
    console.log(`resto = ${dividendo % divisor}`)
}

divisao(11,4)

// exerc 5
function formatarValorDecimal(valorDecimal){
    valorEmReais= `R$ ${valorDecimal.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)

//exerc 6
function jurosSimples (capitalInicial, taxa, tempo){
    return capitalInicial + (capitalInicial* taxa * tempo) 
}

function jurosComposto (capitalInicial, taxa, tempo){
    return capitalInicial * (1+ taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2))
console.log(jurosComposto(100, 10/100, 2))

// exerc 8
let stringPontuacoes = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0'

function avaliaPontuacoes (stringPontuacoes){
    let pontuacoes = stringPontuacoes.split(',')
    let qtdQuebraRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++){
        if (pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            qtdQuebraRecords++
        } else if (pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))

//exerc 9
function classificaAluno (nota) {
    let notaCorrigida= arredondar(nota)
    if (notaCorrigida >= 40){
        console.log(`aprovado com a nota ${notaCorrigida}`)
    } else {
        console.log(`reprovado com ${notaCorrigida}`)
    }
}

function arredondar (nota) {
    if (nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

console.log(classificaAluno(38))
console.log(classificaAluno(23))
console.log(classificaAluno(56))

// exerc 10
function verificaNumero(numero) {
    if (numero % 3 == 0){
        return true
    } else {
        return false
    }
}

console.log(verificaNumero(34))
console.log(verificaNumero(2))

