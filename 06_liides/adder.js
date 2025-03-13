/*interface Adder{
    add(nr:number):void; //a method to add a number
    getSum():number; //a method to return the current sum
    reset():void;
}

class CharCounter{
    //constructor hat takes and adds objec as a parameter and stores it in a protected variable
    constructor(protected adder: Adder){}
        //add the number of characters in a given to the adder
        //method which design to take a word (a string)
        addWordCharacters(word:String):void{
            //word.lenght gives the number of characters in the word
            this.adder.add(word.length);
        }
        //retrieve the total character count stored in the adder
        getCharacterCount():number{
            return this.adder.getSum(); //call he getSum
        }
}


class SimpleAdder implements Adder{
    protected sum: number=0; //initial sum is 0. without the initial value sum would be undefined
    add(nr: number) {
        this.sum+=nr;
    } //add the given number to sum
    getSum(): number{ //return the current sum
        return this.sum;
    }
    reset(){
        this.sum=0;
    }

}

let adder1: Adder=new SimpleAdder();
let counter1:CharCounter=new CharCounter(adder1);
counter1.addWordCharacters("John");
counter1.addWordCharacters("Arthur");
counter1.addWordCharacters("Geralt");
console.log(counter1.getCharacterCount());


*/ 
