function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50= trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const ficarSaudavel = !comprarSorvete //operador unario

    return {comprarSorvete, comprarTv50, comprarTv32, ficarSaudavel}
}

console.log(compras(false,false))
