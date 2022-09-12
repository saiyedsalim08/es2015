/** Type of vehicle */

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return 'Beep';
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
      }
}

// Part Two
// Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle{
    constructor(make, model, year){
    super(make, model, year);
    this.numwheels = 4;
    }
    }

//     Part Three
// Create a class for a Motorcycle.

class Motorcycle extends Vehicle {
    constructor(make, model, year){
    super(make, model, year);
    this.numwheels = 2;
    }
    revEngine() {
        return "VROOM!!"
    }
}

class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(newVehicle) {
      if (!(newVehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
      this.vehicles.push(newVehicle);
      return "Vehicle added!";
    }
  }