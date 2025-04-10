"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Simultaion = /** @class */ (function () {
    function Simultaion(waterAmount, temp, heatingPower, outsideTemp) {
        this.speacialHeatCapacity = 4200;
        if (waterAmount > 2000) {
            throw new Error("Max jug size is 2l");
        }
        this.waterAmount = waterAmount;
        this.temp = temp;
        this.heatingPower = heatingPower;
        this.outsideTemp = outsideTemp;
        this.energyLost = 1 * 4200 * 2 / (100 * (100 - 20));
    }
    Simultaion.prototype.getTemp = function () {
        return this.temp;
    };
    Simultaion.prototype.heat = function (seconds) {
        var joules = this.heatingPower * seconds;
        var deltaTemp = joules / (this.speacialHeatCapacity * this.waterAmount / 1000);
        this.temp += deltaTemp;
    };
    Simultaion.prototype.cool = function (seconds) {
        // Calculate the cooling rate based on the temperature difference
        var tempDifference = this.temp - this.outsideTemp;
        if (tempDifference > 0) {
            // Cooling energy lost (proportional to temperature difference)
            var coolingRate = tempDifference * this.energyLost;
            // Calculate the total energy lost over the given time
            var totalEnergyLost = coolingRate * seconds;
            // Calculate the temperature change
            var deltaTemp = totalEnergyLost / (this.speacialHeatCapacity * this.waterAmount / 1000);
            this.temp -= deltaTemp;
        }
    };
    Simultaion.prototype.pourOut = function (amount) {
        if (amount >= this.waterAmount) {
            throw new Error("Cannot pour more water");
        }
        this.waterAmount -= amount;
    };
    return Simultaion;
}());
var outsideTemp2 = 20;
var kettle = new Simultaion(1000, 20, 1500, outsideTemp2);
//heat until boiling (100 celsius)
var secToBoil = 0;
while (kettle.getTemp() < 100) {
    kettle.heat(1);
    secToBoil++;
}
function simulateCooling(waterAmount, heatingPower, outsideTemp) {
    var kettle = new Simultaion(waterAmount, 95, heatingPower, outsideTemp);
    var secondsToCool = 0;
    while (kettle.getTemp() > 90) {
        kettle.cool(1);
        secondsToCool++;
    }
    console.log("cooling simulation for ".concat(waterAmount, " at ").concat(outsideTemp));
    console.log("cooling from 95 to 90 degrees", secondsToCool);
    return secondsToCool;
}
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
