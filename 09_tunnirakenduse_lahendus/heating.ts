export class Water {
    waterAmount: number;
    heatingPower: number = 0;
    temp: number;
    readonly specificHeatCapacity: number = 4200;

    constructor(waterAmount: number, temp: number) {
        this.waterAmount = waterAmount;
        this.temp = temp;
    }

    setHeatingPower(newPower: number) {
        this.heatingPower = newPower;
    }

    getTemp(): number {
        return this.temp;
    }

    heatAsecond(): void {
        let joules = this.heatingPower;
        let deltaTemp = joules / (this.specificHeatCapacity * this.waterAmount / 1000);
        this.temp += deltaTemp;
    }

    heating(seconds: number) {
        for (let i = 0; i < seconds; i++) {
            this.heatAsecond();
        }
        console.log(`Final temperature after ${seconds} seconds: ${this.getTemp().toFixed(2)}`);
    }
}

let w = new Water(800, 20);
w.setHeatingPower(1500);

// Simulate the heating power for 120 seconds
w.heating(120);

