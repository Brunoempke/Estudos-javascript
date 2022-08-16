const fabricante = ['audi', 'bmw', 'mercedes']

function imprimir (marca, indice){
    console.log(` ${indice + 1}. ${marca}`)
}

fabricante.forEach(imprimir)
