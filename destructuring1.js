const pessoa = {
    nome: 'bruno',
    idade: 21,
    endereco: {
        condo: 'garden',
        apt: 412
    }
}

const {nome, idade} = pessoa
const {endereco: {condo, apt}} = pessoa 
console.log(nome)
console.log(idade)
console.log(condo)
console.log(apt)


