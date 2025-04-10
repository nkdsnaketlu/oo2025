"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cooling = void 0;
var cooling = /** @class */ (function () {
    function cooling(roomTemp) {
        this.roomTemp = roomTemp;
    }
    cooling.prototype.estimateIntTemp = function (knownJugTemp, //start temp
    knownTime, //time to cool down
    knownCooling, //how much water cooled (e.g 1 celcius)
    desiredTime, //new time interval
    desiredCooling //how much cooling we want
    ) {
        var knownDeltaTemp = knownJugTemp - this.roomTemp;
        var coolingRate = knownCooling / (knownDeltaTemp * knownTime);
        var requiredDeltaTemp = desiredCooling / (coolingRate * desiredTime);
        return this.roomTemp + requiredDeltaTemp;
    };
    return cooling;
}());
exports.cooling = cooling;
var water = new cooling(20);
console.log(water.estimateIntTemp(40, 100, 1, 100, 3));
