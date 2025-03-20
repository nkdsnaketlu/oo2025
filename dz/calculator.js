"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.panelContent = "";
    }
    Calculator.prototype.pressButton = function (btn) {
        this.panelContent += btn;
    };
    Calculator.prototype.getPanelContents = function () {
        return this.panelContent;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
