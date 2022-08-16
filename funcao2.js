// armazenando uma função em uma variavel
const imprimirSoma = function (a , b) {
    console.log(a+ b)
}

imprimirSoma (3, 6)

// armazenando uma função arrow em uma variavel

const soma = (a,b) => {
    return a + b
}

console.log(soma(2,4))

// retorno implicito

const soma2 = (a, b) => a + b
console.log(soma2(2,7))