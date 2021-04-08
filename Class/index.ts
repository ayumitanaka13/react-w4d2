class Vehicle {
    // protected drive():void {
    //     console.log("vroom");
    // }
    protected honk():void {
        console.log("beep");
    }
}

const vehicle = new Vehicle()
// vehicle.drive()
// vehicle.honk()

// inherit class
class Car extends Vehicle {

    constructor(public wheels:number, public color: string) {
        super()
    }

    // override method
    private drive():void {
        console.log('choo');
    }
    startDrivingProcess():void {
        this.drive()
        this.honk()
    }
}

const car = new Car(4, 'red')
car.startDrivingProcess()
// car.drive()
// car.honk()

// OUTPUT
// choo
// beep