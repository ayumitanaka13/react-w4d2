let apples;
apples = 5; // any

// 1
const json = '{"x": 10, "y": 20}'
const coordinates: {x:number; y:number} = JSON.parse(json)
console.log(coordinates); // number

// 2
let colors = ["red", "blue", "yellow"]
let foundColor: boolean;

for (let i = 0; i < colors.length; i++) {
    if(colors[i] === "blue") {
        foundColor = true
    };    
}
console.log(foundColor);

//3
let numbers = [-10, 0, 10]
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i]
    };    
}
console.log(numberAboveZero);
