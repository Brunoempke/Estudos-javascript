function soma1 (a, b , c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(4, 5, 1))

function som1(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(som1(0,0,0))
