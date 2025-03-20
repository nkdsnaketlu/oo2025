var PayPalPayment = /** @class */ (function () {
    function PayPalPayment() {
    }
    PayPalPayment.prototype.pay = function (amount) {
        console.log("Paid $".concat(amount, " via PayPal"));
    };
    PayPalPayment.prototype.refund = function (amount) {
        console.log("Refunded $".concat(amount, " via PayPal"));
    };
    return PayPalPayment;
}());
var debitCardPayment = /** @class */ (function () {
    function debitCardPayment() {
    }
    debitCardPayment.prototype.pay = function (amount) {
        console.log("Paid $".concat(amount, " using a debit card"));
    };
    debitCardPayment.prototype.refund = function (amount) {
        console.log("Refunded $".concat(amount, " to the debit card"));
    };
    return debitCardPayment;
}());
var payment1 = new PayPalPayment();
var payment2 = new debitCardPayment();
payment1.pay(100);
payment1.refund(50);
console.log("------------------------------");
payment2.pay(123);
payment2.refund(6);
