// exerc 21
function calcularPreco (idade){
    if (idade <= 10) {
        return 180
    } else if (idade > 10 && idade <= 30){
        return 150
    } else if (idade > 30 && idade <= 60){
        return 195
    } else if (idade > 60){
        return 230
    }
}

console.log(calcularPreco(8))
console.log(calcularPreco(14))
console.log(calcularPreco(40))
console.log(calcularPreco(89))

// exerc 22
function calcularValor(mes, valor){
    if (mes > 0 && mes < 13){
        atraso = mes - 1
        return (valor*((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'mes invalido'
    }
}

console.log(calcularValor(4, 100))

// exerc 23
function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`codigo do aluno: ${codAluno}. notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'reprovado' : 'aprovado'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)
calcularNotaFinal(123, 7.8, 6, 5.5)
calcularNotaFinal(123, 2.8, 10, 9.5)

// exerc 24
function olamundo () {
    let i = 0
    while (i < 11){
        console.log('ola mundo')
        i++
    }
}

olamundo()



// exerc 25
function contador() {
    for (let i = 1; i <= 11; i++) {
        console.log(i)
    }
}
contador()

//exerc 26
function acharpares () {
    for (let i = 1; i < 100; i++)
    if (i%2==0){
        console.log(i)
    }
}
acharpares()

// exerc 27

// nao vai rolar

// exerc 28
function paresImpares(vetorNumeros){
    let qtdPares= 0
    let qtdImpares= 0
    for (let i =0; i< vetorNumeros.length; i++){
        if(vetorNumeros[i] %2 == 0){
            qtdPares++
        } else {
            qtdImpares ++
        }
    }
    console.log(`tem ${qtdImpares} de numeros impares e ${qtdPares} de pares`)
}
vetor = [1,2,3,4,5,6,7,8,9,10]
paresImpares(vetor)

// exerc 29
function observarIntervalo(vetor){
    qtdDeNumeros= 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > 10 && vetor[i] <= 20){
            qtdDeNumeros++
        }
    }
    return `${qtdDeNumeros} de numeros no intervalo`
}

vetor= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(observarIntervalo(vetor))

// exerc 30
function maiorMenor (vetor) {
    let maior
    let menor 
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor [i]
            menor = vetor [i]
        }
        else{
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if (vetor[i] < menor){
                menor= vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor = [2,4,6,8,19,10,50]
console.log(maiorMenor(vetor))

