// class calculator {

//     sum(...numbers) {
//        if(numbers.length === 0) return;
//        if(numbers.length === 1 && typeof number[0] === 'number'){
//         return numbers[0]
//        }
//        if(numbers.length === 2){
//         return numbers[0] + numbers[1];
//        }
//        return numbers.reduce((sum,num) => sum +num, 0);
//     }
// }

// const cal =new calculator()
// console.log(cal.sum(1,2,3))


class DebitCard {
    pay(){
        console.log("Payment done using Debit card");
    }
}
class CreditCard {
    pay(){
        console.log("Payment done using Credit card");
    }
}
class UPI {
    pay(){
        console.log("Payment done using UPI");
    }
}

function payNow(paymentMethod){
    paymentMethod.pay();
}
const debitCard = new DebitCard();
const creditCard = new CreditCard();
const upi = new UPI();
payNow(debitCard);
payNow(creditCard);
payNow(upi);