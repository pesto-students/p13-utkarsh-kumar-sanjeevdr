class BankAccount {

    #accountNumber;
    #balance;
    #accountHolderName;

    constructor(accountNumber, balance, accountHolderName){
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.accountHolderName=accountHolderName;
    }
}

class CheckingAccount extends BankAccount {

    constructor(accountNumber, balance, accountHolderName){
        super(accountNumber, balance, accountHolderName);
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.accountHolderName=accountHolderName;
    }

    deposit(amount){
        this.balance = this.balance+amount;
    }  
    
    withdraw(amount){
        this.balance = this.balance-amount;
    }

    getBalance(){
        return this.balance;
    }
}


class SavingsAccount extends BankAccount {

    constructor(accountNumber, balance, accountHolderName){
        super(accountNumber, balance, accountHolderName);
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.accountHolderName=accountHolderName;
    }

    deposit(amount){
        this.balance = this.balance+amount;
    }  
    
    withdraw(amount){
        if(!((this.balance-amount)<0)){
            this.balance = this.balance-amount;
        }       
    }

    getBalance(){
        return this.balance;
    }
}

let checkingAccount = new CheckingAccount(0,0,0);
let savingsAccount1 = new SavingsAccount(0,0,0);
let savingsAccount2 = new SavingsAccount(0,0,0);

checkingAccount.deposit(1500);
checkingAccount.withdraw(1600);
console.log("Balance in Checking Account : "+checkingAccount.getBalance());

savingsAccount1.deposit(1300);
savingsAccount1.withdraw(1200);
console.log("Balance in Savings Account 1 : "+savingsAccount1.getBalance());

savingsAccount2.deposit(1300);
savingsAccount2.withdraw(1600);
console.log("Balance in Savings Account 2 : "+savingsAccount2.getBalance());