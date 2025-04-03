"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractResistor = /** @class */ (function () {
    function AbstractResistor() {
    }
    AbstractResistor.prototype.getCurrent = function (u) {
        return u / this.getResistance();
    };
    return AbstractResistor;
}());
var Resistor = /** @class */ (function (_super) {
    __extends(Resistor, _super);
    function Resistor(r) {
        var _this = _super.call(this) || this; //we can take things from abstract class
        _this.r = 0;
        _this.r = r;
        return _this;
    }
    Resistor.prototype.getResistance = function () {
        return this.r;
    };
    Resistor.prototype.getCurrent = function (u) {
        //I current = U voltage /R resistance
        return u / this.getResistance();
    };
    return Resistor;
}(AbstractResistor));
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.on = false;
        return _this;
    }
    Switch.prototype.setOn = function (state) {
        this.on = state;
    };
    Switch.prototype.getResistance = function () {
        return this.on ? 0 : 100000000;
    };
    Switch.prototype.getCurrent = function (u) {
        if (u > 0 && this.on) {
            throw new Error('short circuit');
        }
        return _super.prototype.getCurrent.call(this, u);
    };
    return Switch;
}(AbstractResistor));
var MultipleConnection = /** @class */ (function (_super) {
    __extends(MultipleConnection, _super);
    function MultipleConnection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resistors = [];
        return _this;
    }
    MultipleConnection.prototype.addResistors = function (r) {
        this.resistors.push(r);
    };
    return MultipleConnection;
}(AbstractResistor));
var ParrallelConnection = /** @class */ (function (_super) {
    __extends(ParrallelConnection, _super);
    function ParrallelConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParrallelConnection.prototype.getResistance = function () {
        var inverseSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var Resistor_1 = _a[_i];
            inverseSum += 1 / Resistor_1.getResistance();
        }
        return 1 / inverseSum;
    };
    return ParrallelConnection;
}(MultipleConnection));
var SeriesConnection = /** @class */ (function (_super) {
    __extends(SeriesConnection, _super);
    function SeriesConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesConnection.prototype.getResistance = function () {
        var inverseSum = 0;
        for (var _i = 0, _a = this.resistors; _i < _a.length; _i++) {
            var Resistor_2 = _a[_i];
            inverseSum += Resistor_2.getResistance();
        }
        return inverseSum;
    };
    return SeriesConnection;
}(MultipleConnection));
var s1 = new SeriesConnection();
s1.addResistors(new Resistor(110));
s1.addResistors(new Resistor(220));
var totalResistance1 = s1.getResistance();
console.log('Total resistance of first series connection: ', totalResistance1);
var parCon1 = new ParrallelConnection();
parCon1.addResistors(new Resistor(330));
parCon1.addResistors(s1);
console.log('Total resistance of different series together: ', parCon1.getResistance());
/*
let s2:SeriesConnection = new SeriesConnection();
s2.addResistors(new Resistor(220));
s2.addResistors(new Resistor(440))
let totalResistance2 = s2.getResistance();
console.log('Total resistance of second series connection: ', totalResistance2);

let finalSeries = new SeriesConnection();
finalSeries.addResistors(s1);
finalSeries.addResistors(s2);
console.log('total resistance of 2 series: ', finalSeries.getResistance());


let p:ParrallelConnection = new ParrallelConnection();
p.addResistors(new Resistor(300));
//console.log(p.getResistance());

let totalResistance = p.getResistance();
console.log("Total resistance for parrallel connection: ", totalResistance);

let voltage = 5;
let current = voltage /p.getResistance();
console.log('Current: ', current);

let newP:ParrallelConnection = new ParrallelConnection();
newP.addResistors(new Resistor(110));
newP.addResistors(new Resistor(110));
let newTotalResistance = newP.getResistance();
console.log("New connections total resistance: ", newTotalResistance);

let circuit: AbstractResistor[] = [new Resistor(76), new Switch()];
for (let element of circuit){
    console.log(element.getResistance());
}

function sumResistance(circuit:AbstractResistor[]): number {
    let sum = 0;
    for (let element of circuit){
        sum += element.getResistance();
    }
    console.log('total resistance: ' + sum);
    
    return sum;
}
sumResistance(circuit);
(circuit[1] as Switch). setOn(true);
sumResistance(circuit);



let s1 = new Switch();
console.log(s1.getResistance());
s1.setOn(true);
console.log(s1.getResistance());
console.log(s1.getCurrent(5));



let r1:AbstractResistor = new Resistor(1);
console.log(r1.getResistance());*/
