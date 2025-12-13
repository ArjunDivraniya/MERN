
// private variable using the factory function


function BankAccount(Amount) {

   
    function validateAmount(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            console.log("❌ Amount must be a valid number.");
            return false;
        }
        if (value <= 0) {
            console.log("❌ Amount must be greater than zero.");
            return false;
        }
        return true;
    }
   
    if (!validateAmount(Amount)) {
        console.log("❌ Account not created. Invalid initial amount!");
        return; 
    }

 
    let balance = Amount;

    return {

       
        getbalance: function () {
            console.log(`✅ Your Account is opened with ₹${balance} as Initial Amount.`);
        },

       
        deposit: function (Amount) {
            if (!validateAmount(Amount)) return; 
            balance += Amount;
            console.log(`💵 You Deposited ₹${Amount}`);
            console.log(`💰 Current Balance: ₹${balance}`);
        },

      
        withdrow: function (Amount) {
            if (!validateAmount(Amount)) return;

            if (Amount > balance) {
                console.log(`Cannot withdraw ₹${Amount}. Insufficient Balance!`);
                console.log(`Available Balance: ₹${balance}`);
                return;
            }

            balance -= Amount;
            console.log(`You Withdrew ₹${Amount}`);
            console.log(`Current Balance: ₹${balance}`);
        }
    };
}


const f1 = BankAccount(2000);
if (f1) {
    f1.getbalance();
    f1.deposit(2000);
    f1.withdrow(3000);
    f1.deposit(-500);  
    f1.withdrow("abc");
}


const f2 = BankAccount(-1000);




// private variable using the constructor function

// function BankAccount(Amount){
//     if (typeof Amount !== 'number' || Amount <= 0) {
//         console.log("Deposit amount should be a positive number.");
//         return;
//     }
//     let balance = Amount;


//   this.getbalance =  function() {
// console.log(`Your Open New Account And deposit ${balance} AS Initial Ammount`)
//     };
//      this.deposit = function(Amount) {
//         if (typeof Amount !== 'number' || Amount <= 0) {
//             console.log("Deposit amount should be a positive number.");
//             return;
//         }
//         balance+=Amount;
//         console.log(`You Add ${Amount} In your Account`)
//         console.log(`Now Your Blance is ${balance} `)
//     };
//     this.withdrow= function(Amount){
//         if (typeof Amount !== 'number' || Amount <= 0) {
//             console.log("Deposit amount should be a positive number.");
//             return;
//         }
//         if (Amount > balance) {
//             console.log("You cannot withdraw more than available.");
//             console.log(`Your balance is ${balance}`)
//             return;
//         }
// balance-=Amount
// console.log(`You Withdraw ${Amount} In your Account`)
//         console.log(`Now Your Blance is ${balance} `)
//     };
    
// }

// const c1 = new BankAccount(2000);
// c1.getbalance()
// c1.deposit(2000);
// c1.withdrow(1000)
// console.log(c1.balance)  