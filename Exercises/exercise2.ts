// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 2 – Interfaces
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Demonstrate structural typing (duck typing)
// • Create an interface and implement it on a class
// • Differentiate type aliases from interfaces

const Exercise2 = () => {
    // ======== Exercise 2.1 ========
    // Instructions:
    // • Create an interface `CartItem` and replace the param's type with it
    // • Make variantId optional

    interface CartItem{
        id: number;
        title: string;
        variantId?: number;
    }

    const shoes = {
        id: 1,
        title: 'Concrete shoes',
    }
  
    const addToCart = (item:CartItem):void => {
      console.log('[Exercise 2.1]', `Adding "${item.title}" to cart.`)
    }
  
    addToCart(shoes)
  
    // ======== Exercise 2.2 ========
    // Instructions:
    // • Create and implement an interface on `Person` to ensure it always has accessible
    //   `name` and `age` member properties.
  
    interface Person {
      name: string;
      age: number;
    }
  
    const jane = {
        name: 'Jane',
        age: 31
    }

    const printPerson = (person: Person):void => {
        console.log('[Exercise 2.2]', `${person.name} is ${person.age} years old.`)
    }
  
    printPerson(jane)
  
    // ======== Exercise 2.3 ========
    // Instructions:
    // • Create an interface `Coords` that has numeric `latitude` and `longitude` properties.
    // • Extend the existing interface `City` (without modifying it inline) by adding a
    //   `coords` property of type `Coords`.
    // • Fix whatever is wrong with `tampa`
  
    // [do not edit] (pretend this is coming from external `foo.d.ts` lib)
    interface City {
      name: string;
    }
    // [/do not edit]
  
    interface Coords {
      latitude: number;
      longitude: number;
    }

    interface City {
      coords: Coords;
    }
    
    const montreal = {
      coords: {
        latitude: 42.332,
        longitude: -73.324,
      },
      name: 'Montréal',
    }
  
    const tampa = {
      coords: {
        latitude: 27.9478,
        longitude: -82.4584,
      },
      name: 'Tampa',
    }
  
    function getCityInfo(city: City) {
        const coords = `(${city.coords.latitude.toFixed(
          3
        )}, ${city.coords.longitude.toFixed(3)})`
        return `${city.name.toUpperCase()} is located at ${coords}.`
    }
  
    console.log(
        '[Exercise 2.3]',
        `${getCityInfo(montreal)} \n\n ${getCityInfo(tampa)}`
    )


    // ======== Exercise 2.4 ========
    // The purpose of this exercise is simply to illustrate a use of `readonly`
  
    interface UserSchema {
      readonly id: number;
      name: string;
    }
  
    class User implements UserSchema {
      constructor(public name: string, readonly id: number) {}
    }
  
    const user = new User('Dog', 1)
  
    console.log(user.id) // readable
  
    user.name = 'Harold' // writable
    // user.id = 5 // not writable
  
    console.log(`User:`, user)
  }
  
  Exercise2()
  