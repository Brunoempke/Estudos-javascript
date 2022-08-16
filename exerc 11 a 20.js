// exerc 11
function receberPrimeiroEUltimoElemento(elementos){
    const primeiroElemento= elementos.shift()
    const UltimoElemento = elementos.pop()

    return [primeiroElemento, UltimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([54, 'oi', 90]))

// exerc 12
function removerPropriedade(objeto, nomeDaPropriedade){
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, 'b'))

// exerc 13
function filtrarNumero(array){
    return array.filter(item => typeof item === "number")
}

console.log(filtrarNumero(['oi', 4, 9, 'ola']))

// exerc 14
function objetoParaArray(objeto){
    return Object.entries(objeto)
}

console.log(objetoParaArray({
    nome: 'maria',
    profissao: 'desenvolvedora'
}))

// exerc 15
function receberSomenteOspares(numeros){
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = numero % 2 === 0

        return numeroPar && indicePar
    })
}

console.log(receberSomenteOspares(2, 22, 23, 34))

// exerc 16


// exerc 17
function somarNumeros( numeros){
    let soma = 0 
    numeros.forEach(numero => soma += numero)

    return soma
}

console.log(somarNumeros(34, 78))

// exerc 18
