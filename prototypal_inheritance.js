/**
 * reference --> {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain|MDN}
*/

/**
 * 1. Base Vehicle class with constructor and core methods
 * 2. Car class that extends Vehicle
 * 3. Car-specific properties and methods
 * 4. Override parent methods --> demonstrate polymorphism
*/
class Vehicle {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }

    startEngine() {
        this.isRunning = true;
        return `${this.make} ${this.model}'s engine is now running`;
    }

    stopEngine() {
        this.isRunning = false;
        return `${this.make} ${this.model}'s engine is now off`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    honk() {
        return 'Executing the honking action';
    }

    startEngine() {
        const result = super.startEngine();
        return `${result} and ready to drive`;
    }
}

const civic = new Car('Honda', 'Civic', 2022, 4);
console.log(civic.startEngine()); // Honda Civic's engine is now running and ready to drive
console.log(civic.honk()); // Beep beep!
console.log(civic.stopEngine()); // Honda Civic's engine is now off
console.log(civic instanceof Car); // true
console.log(civic instanceof Vehicle); // true