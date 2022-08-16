const notas = [4.6, 8.9, 9.2, 3.6]
for (i in notas){
    console.log(i , notas[i])
}

const pessoa = {
    nome: 'ana',
    peso: 46,
    sobrenome: 'silva',
    idade: 19
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}


