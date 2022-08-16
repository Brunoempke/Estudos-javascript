// exerc 1
function cumprimentar(bruno) {
    const saudacao = 'ola'
    return [saudacao, bruno].concat('!')
}

// exerc 2
function converterIdadeEmDias (idadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * idadeEmAnos
}

console.log(converterIdadeEmDias(21))

// exerc 3
function calcularSalarioLiquido (horasTrabalhadas, ganhoPorHora) {
    const salarioBruto = horasTrabalhadas * ganhoPorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100

    return `salario igual a ${salarioLiquido}`
}

console.log(calcularSalarioLiquido(180, 60))

// exerc 4
function receberNomesDosMes (numero){
    switch(numero){
        case 1:
            return 'janeiro';
        case 2:
            return 'fevereiro';
        case 3:
            return 'março';
        case 4:
            return 'abril';
        case 5:
            return 'maio';
        case 6:
            return 'junho';
        case 7:
            return 'julho';
        case 8:
            return 'agosto';
        case 9:
            return 'setembro';
        case 10:
            return 'outubro';
        case 11:
            return 'novembro';
        case 12:
            return 'dezembro';
    }
}

console.log(receberNomesDosMes(8))

// exerc 5
function maiorOuIgual (primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
}

console.log(maiorOuIgual(3, 0))

//exerc 6
function inverso(valor) {
    const tipo = typeof valor

    if (tipo == 'boolean') return !valor
    else if (tipo == 'number') return -valor
    else
        return `booleano ou numero esperados, mas é do tipo ${tipo}`
}

console.log(inverso(6))

// exerc 7
function estaEntre(minimo, maximo, numero, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(estaEntre(10, 159, 160))

// exerc 8


// exerc 9
function repetir(item, quantidade){
    return Array(quantidade).fill(item)
}

console.log(repetir('ola', 5))

// exerc 10
function simboloMais(quantidade){
    return Array(quantidade).fill('+').join('')
}

console.log(simboloMais(2))

