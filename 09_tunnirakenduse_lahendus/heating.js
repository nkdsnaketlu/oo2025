"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Water = void 0;
var Water = /** @class */ (function () {
    function Water(waterAmount, temp) {
        this.heatingPower = 0;
        this.specificHeatCapacity = 4200;
        this.waterAmount = waterAmount;
        this.temp = temp;
    }
    Water.prototype.setHeatingPower = function (newPower) {
        this.heatingPower = newPower;
    };
    Water.prototype.getTemp = function () {
        return this.temp;
    };
    Water.prototype.heatAsecond = function () {
        var joules = this.heatingPower;
        var deltaTemp = joules / (this.specificHeatCapacity * this.waterAmount / 1000);
        this.temp += deltaTemp;
    };
    Water.prototype.heating = function (seconds) {
        for (var i = 0; i < seconds; i++) {
            this.heatAsecond();
        }
        console.log("Final temperature after ".concat(seconds, " seconds: ").concat(this.getTemp().toFixed(2)));
    };
    return Water;
}());
exports.Water = Water;
var w = new Water(800, 20);
w.setHeatingPower(1500);
// Simulate the heating power for 120 seconds
w.heating(120);
