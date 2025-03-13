var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    InchesToCm.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchesToCm.prototype.inputUnit = function () {
        return "inches";
    };
    InchesToCm.prototype.outputUnit = function () {
        return "cm";
    };
    return InchesToCm;
}());
var cmToInches = /** @class */ (function () {
    function cmToInches() {
    }
    cmToInches.prototype.calculate = function (cm) {
        return cm / 2.54;
    };
    cmToInches.prototype.inputUnit = function () {
        return "cm";
    };
    cmToInches.prototype.outputUnit = function () {
        return "inches";
    };
    return cmToInches;
}());
