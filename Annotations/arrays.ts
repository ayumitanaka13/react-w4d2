const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = []

const car = carMakers[0]
const myCar = carMakers.pop()

console.log(car); //ford
console.log(myCar); //chavy

// carMakers.push(100)

carMakers.map((car:string):string => {
    return car.toUpperCase()
})

console.log(carMakers) //['ford', 'toyota']

const importantDates:(Date|string)[] = []
importantDates.push('2021-04-08')
importantDates.push(new Date())
// importantDates.push(true)

console.log(importantDates); //[ '2021-04-08', 2021-04-08T18:00:47.043Z ]
