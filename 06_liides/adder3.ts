interface Adder{
    add(nr:number):void; //a method to add a number
    getSum():number; //a method to return the current sum
    getAverage():number;
    getRange();
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


class StoringAdder implements Adder{
    protected store: number[]=[]; //initial array is empty
    add(nr: number) {
        this.store.push(nr);//instead of updating a running total, numbers are stored individialy
    }
    getSum(): number{ //return the current sum
        let sum: number=0;
        //iterate through all stored numbers and add them to the sum
        for(let amount of this.store){
            sum+=amount; 
        }
        return sum; //there is no this.sum properti in this class
    } 
    //new method to calculate and return the average of all the numbers added
    getAverage(){
        if(this.store.length>0){ //check if any numbers are added or not
            return this.getSum()/this.store.length; //if count is greater than 0 calculate and return the average
        }
        return 0;
    }
    getRange(){
        if (this.store.length==0) {return 0;}
        let minimum: number=this.store[0];
        let maximum: number=minimum;
        for(let amount of this.store){
            if(amount<minimum){
                minimum=amount;
            }
            if(amount>maximum){
                maximum=amount;
            }
            console.log(maximum, minimum);
            
        }
        return maximum-minimum;
    }
}

let adder1: Adder=new StoringAdder();
let counter1:CharCounter=new CharCounter(adder1);
counter1.addWordCharacters("John");
counter1.addWordCharacters("Arthur");
counter1.addWordCharacters("Geralt");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());


