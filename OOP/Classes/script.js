class Vehicle{
    constructor(name,year,model,lightsOn){
        this.name = name;
        this.year = year;
        this.model = model;
        this.lightsOn = lightsOn;
    }

    turboOn() {
        console.log("Turbo is on");    
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }

}



class Cars extends Vehicle{
    constructor(name,year,model,lightsOn,wheels){
        super(name,year,model,lightsOn);
        this.wheels = wheels;
    }

    toggleWheels() {
        this.wheels = !this.wheels;
        console.log("Allow-wheels available : ", this.wheels);
    }
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }

}

let vehicle1 = new Vehicle("BMW",2022,"X5");
console.log(vehicle1);
vehicle1.turboOn();

vehicle1.toggleLights(); // undefined
vehicle1.lightsStatus(); // Lights on? true
vehicle1.getSelf();
vehicle1.getPrototype();

var car1 = new Cars("BMW",2022,"X5",true,4);
console.log(car1);



