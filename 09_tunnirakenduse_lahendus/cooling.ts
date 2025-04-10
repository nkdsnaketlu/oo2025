export class cooling {
    roomTemp:number;

    constructor (roomTemp:number){
        this.roomTemp = roomTemp;
    }

    estimateIntTemp(
        knownJugTemp: number, //start temp
        knownTime: number, //time to cool down
        knownCooling: number, //how much water cooled (e.g 1 celcius)
        desiredTime: number, //new time interval
        desiredCooling: number //how much cooling we want
    ):number {
        let knownDeltaTemp = knownJugTemp - this.roomTemp;
        let coolingRate = knownCooling / (knownDeltaTemp * knownTime);
        let requiredDeltaTemp = desiredCooling / (coolingRate * desiredTime);

        return this.roomTemp + requiredDeltaTemp;
    }
}

let water = new cooling(20);
console.log(water.estimateIntTemp(40, 100, 1, 100, 3));

