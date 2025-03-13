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
var StoringAdder = /** @class */ (function () {
    function StoringAdder() {
        this.store = []; //initial array is empty
    }
    StoringAdder.prototype.add = function (nr) {
        this.store.push(nr); //instead of updating a running total, numbers are stored individialy
    };
    StoringAdder.prototype.getSum = function () {
        var sum = 0;
        //iterate through all stored numbers and add them to the sum
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            sum += amount;
        }
        return sum; //there is no this.sum properti in this class
    };
    //new method to calculate and return the average of all the numbers added
    StoringAdder.prototype.getAverage = function () {
        if (this.store.length > 0) { //check if any numbers are added or not
            return this.getSum() / this.store.length; //if count is greater than 0 calculate and return the average
        }
        return 0;
    };
    StoringAdder.prototype.getRange = function () {
        if (this.store.length == 0) {
            return 0;
        }
        var minimum = this.store[0];
        var maximum = minimum;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            if (amount < minimum) {
                minimum = amount;
            }
            if (amount > maximum) {
                maximum = amount;
            }
            console.log(maximum, minimum);
        }
        return maximum - minimum;
    };
    return StoringAdder;
}());
var adder1 = new StoringAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("John");
counter1.addWordCharacters("Arthur");
counter1.addWordCharacters("Geralt");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());
