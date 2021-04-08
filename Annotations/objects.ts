const profile = {
    nickname: 'Ami',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age:number):void {
        this.age = age;
    }
}

const {age, nickname} : {age:number, nickname:string} = profile
const {coords:{lat, lng}} : {coords:{lat:number; lng:number}} = profile

console.log(`My name is ${nickname} and I'm ${age} years old`);
