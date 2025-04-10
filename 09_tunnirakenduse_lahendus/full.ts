import { error } from "console";
import { cooling } from "./cooling";

class Simultaion {
    waterAmount: number;
    heatingPower: number;
    temp: number;
    outsideTemp: number;
    readonly speacialHeatCapacity: number = 4200;
    energyLost: number;

    constructor (waterAmount: number, temp: number, heatingPower: number, outsideTemp: number) {
        if (waterAmount > 2000) {
            throw new Error ("Max jug size is 2l");
        }
        this.waterAmount = waterAmount;
        this.temp = temp;
        this.heatingPower = heatingPower;
        this.outsideTemp = outsideTemp;
        this.energyLost = 1 * 4200 * 2 / (100 * (100 - 20));
    }
    
    getTemp():number {
        return this.temp;
    }

    heat(seconds: number): void {
        let joules = this.heatingPower * seconds;
        let deltaTemp = joules / (this.speacialHeatCapacity * this.waterAmount / 1000);
        this.temp += deltaTemp;
    }

    cool(seconds: number): void {
        // Calculate the cooling rate based on the temperature difference
        let tempDifference = this.temp - this.outsideTemp;
        if (tempDifference > 0) {
            // Cooling energy lost (proportional to temperature difference)
            let coolingRate = tempDifference * this.energyLost;
            // Calculate the total energy lost over the given time
            let totalEnergyLost = coolingRate * seconds;
            // Calculate the temperature change
            let deltaTemp = totalEnergyLost / (this.speacialHeatCapacity * this.waterAmount / 1000);
            this.temp -= deltaTemp;
        }
    }
    

    pourOut(amount: number): void {
        if (amount >= this.waterAmount) {
            throw new Error ("Cannot pour more water");
        }
        this.waterAmount -= amount;
    }
}

let outsideTemp2 = 20;
let kettle = new Simultaion(1000, 20, 1500, outsideTemp2);

//heat until boiling (100 celsius)
let secToBoil = 0;
while (kettle.getTemp() < 100) {
    kettle.heat(1);
    secToBoil++;
}

function simulateCooling(waterAmount:number, heatingPower: number, outsideTemp): number {
    let kettle = new Simultaion (waterAmount, 95, heatingPower, outsideTemp);
    let secondsToCool = 0;

    while (kettle.getTemp() > 90) {
        kettle.cool(1);
        secondsToCool++;
    }

    console.log(`cooling simulation for ${waterAmount} at ${outsideTemp}`);
    console.log("cooling from 95 to 90 degrees", secondsToCool);    
    return secondsToCool;
}

//nihuja ne ponjal kakoe dz
//idea what to do with the model (kakaja nahuy model???)


/*
console.log(`Water boiled in kettle for ${secToBoil} seconds`);

//cool for 60 seconds
kettle.cool(60);
console.log(`After cooling for 1 minute, kettles temp is ${kettle.getTemp().toFixed(2)} degrees`);

//pour out 400ml and cool for 3 minutes
kettle.pourOut(400);
kettle.cool(180);
console.log(`After pouring out 400 ml and letting cool for 3 minutes: ${kettle.getTemp().toFixed(2)}`);


let simultaionExample = new Simultaion(1000, 100, 1500, 20);
simultaionExample.cool(100);
console.log(simultaionExample.getTemp());
for (let i = 0; i < 9; i++) {
    simultaionExample.cool(100);
}
console.log(simultaionExample.getTemp());
*/
