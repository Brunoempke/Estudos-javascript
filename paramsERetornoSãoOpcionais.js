function area (largura, altura) {
    const area = altura * largura 
        if (area > 20 ) {
            console.log(`valor acima do permitido ${area}`)
        } else {
            return area
            
        }
}

console.log(area(2,5))
