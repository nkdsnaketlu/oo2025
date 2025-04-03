import { get } from "http";

abstract class AbstractResistor {

    abstract getResistance(): number;

    getCurrent(u: number):number{
        return u/this.getResistance();
    }
}

class Resistor extends AbstractResistor{
    r: number=0;

    constructor(r:number){
        super(); //we can take things from abstract class
        this.r=r;
    }

    getResistance(): number {
        return this.r;
    }
    getCurrent(u: number): number{
        //I current = U voltage /R resistance
        return u / this.getResistance();
    }
}

class Switch extends AbstractResistor{
    private on: boolean = false;
    setOn(state: boolean){
        this.on = state;
    }
    getResistance(): number {
        return this.on ? 0:100000000;
    }
    getCurrent(u: number):number {
        if (u>0 && this.on) {
            throw new Error('short circuit');
        }
        return super.getCurrent(u);
    }
}

abstract class MultipleConnection extends AbstractResistor {
    resistors: AbstractResistor[] = [];

    addResistors(r: AbstractResistor){
        this.resistors.push(r);
    }
}

class ParrallelConnection extends MultipleConnection{
    getResistance(): number {
        let inverseSum: number = 0;

        for ( let Resistor of this.resistors) {
            inverseSum += 1/Resistor.getResistance();
        }

        return 1/inverseSum;
    }
}

class SeriesConnection extends MultipleConnection{
    getResistance(): number {
        let inverseSum: number = 0;
        for (let Resistor of this.resistors) {
            inverseSum += Resistor.getResistance();
        }
        return inverseSum;
    }
}
let s1:SeriesConnection = new SeriesConnection();
s1.addResistors(new Resistor(110))
s1.addResistors(new Resistor(220));
let totalResistance1 = s1.getResistance();
console.log('Total resistance of first series connection: ', totalResistance1);

let parCon1:ParrallelConnection = new ParrallelConnection();
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
