class car{
    constructor(name,year,model){
        this.name = name;
        this.year = year;
        this.model = model;
    }

    turboOn() {
        console.log("Turbo is on");    
    }

}

let car1 = new car("BMW",2022,"X5");
console.log(car1);
car1.turboOn();
