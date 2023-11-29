// const map1 = new Map();
// console.log(map1)

// const map2 = new Map([
//     ['key1', 2],
//     ['key2', 3]
// ])

// console.log(map2)

// map2.set('key3', 12)
// console.log(map2)
// map2.set('key4', 12).set('key5', 20)
// console.log(map2)

// map2.set('key1', 'nowa wartosc')
// console.log(map2)


// console.log(map2.get('key1'))
// console.log(map2.get('keyadadawdad'))

// map2.delete('key1')
// console.log(map2)

// console.log(map2.has('key1'))
// console.log(map2.has('key2'))


// console.log(map2.size)


// for (const [key, value] of map2) {
//     console.log(key)
//     console.log(value)
// }

// for (const pair of map2.entries()) {
//     console.log(pair)
// }


// const set1 = new Set();
// console.log(set1)


// const set2 = new Set([1, 2 , 3, 4, 4, 5])
// console.log(set2)

// set2.add(6).add(7).add(3).add(3)
// console.log(set2)


// set2.delete(4)
// console.log(set2)


// console.log(set2.has(4))
// console.log(set2.has(3))

// for (const element of set2) {
//     console.log(element)
// }



function countUniqueWords(sentence) {
    // Rozdzielamy zdanie na słowa
    const words = sentence.toLowerCase().split(' ');

    // Tworzymy set, który przechowa unikalne słowa
    const uniqueWords = new Set(words);

    // Tworzymy mapę, która policzy wystąpienia każdego słowa
    const wordCount = new Map();

    // Iterujemy przez słowa
    for (const word of words) {
        // Jeśli słowo już istnieje w mapie, zwiększamy licznik
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        } else {
            // Jeśli słowo nie istnieje w mapie, dodajemy je z licznikiem ustawionym na 1
            wordCount.set(word, 1);
        }
    }

    return [uniqueWords, wordCount];
}

const sentence = "To jest przykład zdania, które jest przykładem";

const uniqueWords= countUniqueWords(sentence)[0];
const wordCount= countUniqueWords(sentence)[1];

console.log("Unikalne słowa:");
console.log(uniqueWords);

console.log("\nLiczba wystąpień każdego słowa:");
console.log(wordCount);









