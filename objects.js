const color = 'red'
const carYear = 2001

const car = {
    color,
    year: carYear,
    drive() {
        console.log('driving...')
    }
}

console.log(car.color)
console.log(car["year"])
car.drive()

car.power = 201
console.log(car)
console.log(car.power)

delete car.power
console.log(car)
console.log(car.power)


function Car(color, year) {
    this.color = color;
    this.year = year;
}

const car2 = new Car('red', 2001)
console.log(car2)
const car3 = new Car('blue', 2020)
console.log(car3)


for (const property in car2) {
    console.log(car2[property])
}






