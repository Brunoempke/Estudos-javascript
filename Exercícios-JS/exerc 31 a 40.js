// exerc 31
function numerosNegativos (vetor){
        let qtdNegativos= 0
        for (let i = 0; i < vetor.length; i++){
            if (vetor[i] < 0){
                qtdNegativos++
            }
        }
        return `são ${qtdNegativos}`
    }

vetor= [1, -3, -6, 8, 7, -55, -7]
console.log(numerosNegativos(vetor))

// exerc 32
function mediaVetor (vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma/vetor.length
}

vetor= [1,2,3,4,5,6,7,8]
console.log(mediaVetor(vetor))

// exerc 33
let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))

// exerc 34
function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cba'))

 // exerc 35
 let vetorPilha = [1, 2, 3, 4, 5]
 let vetorAdiciona = [6, 7, 8, 9, 10]

 function adicionaVetor(vetorInicial, vetorAdicionar){
     for (let i = 0; i < vetorAdicionar.length; i++){
         console.log(vetorAdicionar[i])
         vetorInicial.push(vetorAdicionar[i])
     }
     console.log(`vetor adicionado:` + vetorAdicionar)
     console.log(`vetor resultado:`+ vetorInicial)
 }

 adicionaVetor(vetorPilha, vetorAdiciona)

//  exerc 36
let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador)
    })
    return vetorResultado
}

console.log(multiplicaVetor(vetor, 2))

// exerc 37
function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 10, 15)
console.log('----------------');
pG(10, 5, 3)