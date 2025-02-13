//"c:\Program Files\nodejs\npm.cmd" install typescript ts-node
//npm i -D @types/node
//npx ts-node resistorrun.ts
//https://taltech-coding.gitlab.io/prog2/oop/05_elektriskeem.html

import { getJSDocReturnTag } from "typescript";

/*

U(V)=I(A)*R(om)

*/
class Resistor {
    r: number = 0;
    constructor(r: number) {
      this.r = r;
    }
    getCurrent(u: number): number {
      return u / this.r;
    }
  }

  let resistor:Resistor[]=[
    new Resistor(110),
    new Resistor(220),
    new Resistor(4700),
  ];
let voolusumma = 0;
  for (let index = 0; index < resistor.length; index++) {
    console.log(resistor[index].getCurrent(5));
    voolusumma += resistor[index].getCurrent(5);
    
  }
  console.log(voolusumma);
  