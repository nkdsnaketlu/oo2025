/*interface Adder{
    add(nr:number):void; //a method to add a number
    getSum():number; //a method to return the current sum
    getAverage():number;
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


class CountingAdder implements Adder{
    protected sum: number=0; //initial sum is 0. without the initial value sum would be undefined
    protected count:number=0; //initial count is 0. this will track how many numbers have been added
    add(nr: number) {
        this.sum+=nr; //add the given number to sum
        this.count++; //increment the count to keep track of how many number have been added
    }
    getSum(): number{ //return the current sum
        return this.sum;
    } 
    //new method to calculate and return the average of all the numbers added
    getAverage(){
        if(this.count>0){ //check if any numbers are added or not
            return this.sum/this.count; //if count is greater than 0 calculate and return the average
        }
        return 0;
    }
}

let adder1: Adder=new CountingAdder();
let counter1:CharCounter=new CharCounter(adder1);
counter1.addWordCharacters("John");
counter1.addWordCharacters("Arthur");
counter1.addWordCharacters("Geralt");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());


*/