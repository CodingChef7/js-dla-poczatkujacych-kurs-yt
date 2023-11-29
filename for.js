const smallTab = [1, 2]
const first = smallTab[0]
const second = smallTab[1]

// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }

const bigTab = new Array(100)

// for (let i = 0; i < bigTab.length; i++) {
//     console.log(bigTab[i])
// }

// const newTab = [1, 2, 3]
// for (const val of newTab) {
//     console.log(val)
// }

let j = 0
while (j < 5) {
    console.log(j)
    j++
}

let k = 0
do {
    console.log(k)
    k++
} while (k < 5)


const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const val of tab) {
    if (val % 2 !== 0) {
        break
    }
    console.log(val)
}

