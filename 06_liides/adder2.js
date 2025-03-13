var CharCounter = /** @class */ (function () {
    //constructor hat takes and adds objec as a parameter and stores it in a protected variable
    function CharCounter(adder) {
        this.adder = adder;
    }
    //add the number of characters in a given to the adder
    //method which design to take a word (a string)
    CharCounter.prototype.addWordCharacters = function (word) {
        //word.lenght gives the number of characters in the word
        this.adder.add(word.length);
    };
    //retrieve the total character count stored in the adder
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum(); //call he getSum
    };
    return CharCounter;
}());
var CountingAdder = /** @class */ (function () {
    function CountingAdder() {
        this.sum = 0; //initial sum is 0. without the initial value sum would be undefined
        this.count = 0; //initial count is 0. this will track how many numbers have been added
    }
    CountingAdder.prototype.add = function (nr) {
        this.sum += nr; //add the given number to sum
        this.count++; //increment the count to keep track of how many number have been added
    };
    CountingAdder.prototype.getSum = function () {
        return this.sum;
    };
    //new method to calculate and return the average of all the numbers added
    CountingAdder.prototype.getAverage = function () {
        if (this.count > 0) { //check if any numbers are added or not
            return this.sum / this.count; //if count is greater than 0 calculate and return the average
        }
        return 0;
    };
    return CountingAdder;
}());
var adder1 = new CountingAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("John");
counter1.addWordCharacters("Arthur");
counter1.addWordCharacters("Geralt");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
