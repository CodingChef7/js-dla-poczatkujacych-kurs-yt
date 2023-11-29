// const tab1 = new Array(1, 2, 3)
// console.log(tab1)

// const tab2 = new Array(10)
// console.log(tab2)

// const tab3 = []
// console.log(tab3)

// const tab4 = [1, 2, 3]
// console.log(tab4)

// const tab5 = [1]
// console.log(tab5)

// tab5.push(2)
// console.log(tab5)

// const a = tab5[1]
// console.log(a)

// const ostatni = tab5.pop()
// console.log(ostatni)
// console.log(tab5)

// const nowaDlugosc = tab5.unshift(12, 13)
// console.log(tab5)
// console.log(nowaDlugosc)

// const pierwszy = tab5.shift()
// console.log(tab5)
// console.log(pierwszy)

// const tab6 = [1, 2, 3, 4, 6, 7, 8]
// const slice = tab6.slice(2, 5)
// console.log(slice)
// console.log(tab6)


// const mixed = [1, 'napis', true, '2', 3]
// console.log(mixed)


// Tworzymy pustą tablicę na naszą listę zakupów
const shoppingList = [];

// Funkcja do dodawania produktów do listy zakupów
function addItemToList(item) {
    shoppingList.push(item);
    console.log(`${item} dodano do listy zakupów.`);
}

// Funkcja do usuwania produktów z listy zakupów
function removeItemFromList(item) {
    const index = shoppingList.indexOf(item);
    if (index !== -1) {
        shoppingList.splice(index, 1);
        console.log(`${item} usunięto z listy zakupów.`);
    } else {
        console.log(`${item} nie ma na liście zakupów.`);
    }
}

// Funkcja do wyświetlania trzech pierwszych produktów z listy zakupów
function displayShoppingList() {
    if (shoppingList.length === 0) {
        console.log("Lista zakupów jest pusta.");
    } else {
        console.log("Pierwsze trzy produkty na liście zakupów:");
        console.log(`1. ${shoppingList[0]}`);
        console.log(`2. ${shoppingList[1]}`);
        console.log(`3. ${shoppingList[2]}`);
    }
}
// Dodajemy produkty do listy
addItemToList('Jabłka');
addItemToList('Chleb');
addItemToList('Mleko');

// Wyświetlamy aktualną listę zakupów
displayShoppingList();

// Usuwamy produkt z listy
removeItemFromList('Chleb');

// Wyświetlamy zaktualizowaną listę zakupów
displayShoppingList();
