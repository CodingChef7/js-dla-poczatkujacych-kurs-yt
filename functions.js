// function jakasFunkcja() {
//     console.log('cos wyswietlam')
// }

// jakasFunkcja()

function addingNumbers(a, b) {
    return a + b
}

// const a = 3
// const b = 5
// const result = addingNumbers(a, b)
// console.log(result)

function subtractNumbers(num1, num2) {
    const result = num1 - num2
    if (result > 0) {
        return result
    } else if (result == 0) {
        console.log('Wynik jest rowny 0')
    } else {
        console.log('Wynik nie jest wiekszy od 0')
    }
}

const result1 = subtractNumbers(10, 2)
subtractNumbers(10, 11)

console.log(result1)
subtractNumbers(10, 10)

