//Loo käsk kontrollimaks, kas parameetrina antud pinge (U) on vastava takisti puhul lubatud - st. kas pingestamisel eralduv võimsus (N) jääb lubatud maksimuvõimsuse piiresse
//npx tsc resistors.ts
class Resistor {
    r: number = 0;
    maxP:number =0;
    constructor(r: number, maxP: number) {
      this.r = r; this.maxP=this.maxP;
    }
    getCurrent(u: number): number {
      return u / this.r;
    }
    getPower(u: number): number {
      return u * this.getCurrent(u);
    }
    isVoltageAllowed(u:number):boolean{
        return this.getPower(u)<=this.maxP;
    }
  }
    
 let r1 = new Resistor(220,0.25);
 let r2 = new Resistor(220,0.5);
 let r3 = new Resistor(220,1.0);
 
    
 let rs:Resistor[]=[r1,r2,r3];
 let v1:Resistor[]=[];
 for (let r of rs){
     if (r.isVoltageAllowed(10)) {v1.push(r);}
 }
 console.log(v1);
 console.log(rs.filter(r => r.isVoltageAllowed(10)));

