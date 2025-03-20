interface PaymentProcessor {
  pay(amount: number): void;
  refund(amount: number): void;
}

class PayPalPayment implements PaymentProcessor {
  pay(amount: number) {
      console.log(`Paid $${amount} via PayPal`);
  }

  refund(amount: number) {
      console.log(`Refunded $${amount} via PayPal`);
  }
}

class debitCardPayment implements PaymentProcessor {
  pay(amount: number) {
      console.log(`Paid $${amount} using a debit card`);
  }

  refund(amount: number) {
      console.log(`Refunded $${amount} to the debit card`);
  }
}

let payment1: PaymentProcessor = new PayPalPayment();
let payment2: PaymentProcessor = new debitCardPayment();
payment1.pay(100);
payment1.refund(50);
console.log("------------------------------");
payment2.pay(123);
payment2.refund(6);
