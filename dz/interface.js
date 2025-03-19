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
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
    }
    CreditCardPayment.prototype.pay = function (amount) {
        console.log("Paid $".concat(amount, " using a credit card"));
    };
    CreditCardPayment.prototype.refund = function (amount) {
        console.log("Refunded $".concat(amount, " to the credit card"));
    };
    return CreditCardPayment;
}());
var payment1 = new PayPalPayment();
var payment2 = new CreditCardPayment();
payment1.pay(100);
payment1.refund(50);
console.log("------------------------------");
payment2.pay(123);
payment2.refund(6);
