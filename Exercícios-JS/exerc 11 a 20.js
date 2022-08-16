// exerc 11
function calcularAnoBissexto (ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if ( ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(calcularAnoBissexto(100))
console.log(calcularAnoBissexto(400))
console.log(calcularAnoBissexto(2020))

//exerc 12
function fatorial (numero) {
    if (numero == 0){
        return 1
    } else {
        return numero * fatorial  (numero - 1)
    }
}

console.log(fatorial(10))

// exerc 13
function classificaDia (numero) {
    switch(numero) {
        case 1:
            return 'fim de semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'dia util'
        case 7:
            return 'fim de semana'
        default:
            return 'dia invalido'
    }
}

console.log(classificaDia(1))
console.log(classificaDia(2))
console.log(classificaDia(3))
console.log(classificaDia(4))
console.log(classificaDia(5))
console.log(classificaDia(6))
console.log(classificaDia(7))
console.log(classificaDia('a'))

// exerc 14
function vendeFruta(fruta) {
    switch (fruta){
        case 'maça':
            console.log('nao vendemos')
            break
            
        case 'kiwi' :
            console.log('ta em falta')
            break
        case 'melancia':
            console.log('toma, 3 reais cada')
            break
        default:
            console.log('erro no sistema')
    }
} 

vendeFruta('maça')


//exerc 15
function escolherCarro(modelo) {
    switch (modelo) {
        case 'hatch':
            return 'compra efetuada'
        case 'sedan':
        case 'moto':
        case 'caminhonete':
            return 'nao prefere outro modelo?'
        default:
            return 'nao trabalhamos com isso'
    }
}

console.log(escolherCarro('sedan'))

// exerc 16
function calculadora (a, operacao, b){
    switch (operacao){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'operação invalida'
    }
}

console.log(calculadora(3,'+',8))
console.log(calculadora(3,'-',8))
console.log(calculadora(3,'*',8))
console.log(calculadora(3,'/',8))
console.log(calculadora(3,'//',8))

// exerc 17
function reajusteSalario(plano, salarioAtual){
    switch (plano){
        case 'a':
            return salarioAtual * 1.1
        case 'b':
            return salarioAtual * 1.15
        case 'c':
            return salarioAtual * 1.2
        default:
            return 'nao existe esse plano'
    }
}

console.log(reajusteSalario('b', 3000))
console.log(reajusteSalario('a', 3000))
console.log(reajusteSalario('c', 3000))
console.log(reajusteSalario('d', 3000))

// exerc 18
function numeroPorExtenso (numero){
    switch (numero) {
        case 1:
            return 'um'
        case 2:
            return 'dois'
        case 3:
            return 'tres'
        case 4:
            return 'quatro'
        case 5:
            return 'cinco'
        default:
            return 'nao tem '
    }
}

console.log(numeroPorExtenso(1))
console.log(numeroPorExtenso(2))

// exerc 19
function calcularVenda(codigoProd, qtd){
    switch(codigoProd){
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        default:
            return 'nao tem'
        }
}

console.log(calcularVenda(200, 6))
console.log(calcularVenda(700, 6))

// exerc 20

