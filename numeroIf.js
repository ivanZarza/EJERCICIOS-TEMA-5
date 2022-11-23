
function numeroIff (numeroIf) {
    if (numeroIf < 0) {
        console.log(`${numeroIf} es negativo`)
    } else if (numeroIf === 0) {
        console.log(`${numeroIf} es neutro`)
    } else  {
        console.log(`${numeroIf} es positivo`)
    }
}
numeroIff(-2)

numeroIff(0)

numeroIff(2)

function testNumeroWhile (numeroInicial) {
    let numeroWhile = numeroInicial

    while (numeroWhile <3) {
        numeroWhile++
        console.log(numeroWhile)
    }
}
testNumeroWhile(0)

function testNumeroDoWhile (numeroInicial) {
    let numeroDoWhile = numeroInicial

    do {
        numeroDoWhile++
        console.log(numeroDoWhile)
    } while (numeroDoWhile <3) 
}

testNumeroDoWhile(4)

function testNumeroFor (numeroInicial) {
    let numeroFor = numeroInicial
    for ( let i = 0 ; i <3; i++) {
        console.log(i)
    }
}
testNumeroFor (3)

function testSwitch(valorInicial) {
    let estacion = valorInicial
    let result

    switch (estacion) {
        case 'primavera':
            result = "es primavera"
            break;
        case 'verano':
            result = "es verano"
            break;
        case 'otoño':
            result = "es otoño"
            break;
        case 'invierno':
            result = "es invierno"
            break;
                        
        default:
            result = "esto no es una estacion climatica, si no de buses"
            break;
    }
    console.log(result)

    return result
}
testSwitch()








