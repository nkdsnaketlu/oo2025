"use strict";
//"c:\Program Files\nodejs\npm.cmd" install typescript ts-node
//npm i -D @types/node
//npx ts-node resistorrun.ts
//https://taltech-coding.gitlab.io/prog2/oop/05_elektriskeem.html
Object.defineProperty(exports, "__esModule", { value: true });
/*
Loo programmiga kolm takistit. Esimese takistus 110 oomi (R), teise takistus 220 oomi, kolmanda takistus 4700 oomi (ehk 4,7 kilooomi). Arvuta iga takisti puhul vool 5-voldise pinge (U) korral.
U(V)=I(A)*R(om)
*/
var Resistor = /** @class */ (function () {
    function Resistor(r) {
        this.r = 0;
        this.r = r;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    return Resistor;
}());
var resistor = [
    new Resistor(110),
    new Resistor(220),
    new Resistor(4700),
];
var voolusumma = 0;
for (var index = 0; index < resistor.length; index++) {
    console.log(resistor[index].getCurrent(5));
    voolusumma += resistor[index].getCurrent(5);
}
console.log(voolusumma);
