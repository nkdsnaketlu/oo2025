var Sentence = /** @class */ (function () {
    function Sentence(text) {
        this.words = [];
        var wordString = text.split(' ');
        this.words = wordString.map(function (wordStr) { return new Word(wordStr); });
    }
    Sentence.prototype.getAmount = function (letter) {
        var total = 0;
        for (var _i = 0, _a = this.words; _i < _a.length; _i++) {
            var word = _a[_i];
            total += word.getAmount(letter);
        }
        return total;
    };
    return Sentence;
}());
var Word = /** @class */ (function () {
    function Word(word) {
        this.word = word;
        this.lenght = word.length;
    }
    Word.prototype.getAmount = function (reqletter) {
        var amount = 0;
        for (var i = 0; i < this.lenght; i++) {
            var letter = this.word[i];
            if (letter === reqletter) {
                amount++;
            }
        }
        return amount;
    };
    return Word;
}());
