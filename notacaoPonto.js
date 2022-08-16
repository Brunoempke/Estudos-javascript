console.log(Math.ceil(6.7));// Math.ceil (arredonda pra cima)
console.log(Math.floor(5.9));//Math.floor arredonda pra baixo

const obj1 = {}
obj1.nome = 'bola'
console.log(obj1.nome)

function obj (nome) {
    this.nome= nome
}

const obj2 = new obj ('cadeira')
const obj3 = new obj ('mesa')
console.log(obj2.nome)
console.log(obj3.nome)