let accountNumber=[]
let accountDetails= [];

//create a User class
class User{
    constructor(name, balance, email, phone_no,accountType ){
        this.name= name;
        this.balance=balance;
        this.email=email
        this.phone_no = phone_no
        this.accountType=accountType
        this.accountNumber=Math.floor(Math.random() * (9999999999999-1000000000000+1))+1000000000000                // to generate random account number
        
        accountDetails.push(this.accountNumber)
    }
    
    interest(rateOfInterest, time){                                                      // To calculate interest

        let interest = ((this.balance*rateOfInterest*time)/365);

        this.initialAmount += interest;

        console.log("Interest per year :", interest);

    }
}

class AccountManager extends User {
    constructor(managerName,password) {
      super();
      this.managerName=managerName
      this.password=password
    }
    //account details only shown for manager
    accountDetails(){                                                      // To calculate interest
        console.log(`account details: `,accountDetails)
    }
    
}
let userOne= new User('Medini',1000,'medini@gmail.com','','Savings', accountNumber)
const Manager = new AccountManager('manager1','manager@')               
// let userTwo= new User('Varshini',500,'varshini@gmail.com','','Current', accountNumber)
console.log(userOne)
// console.log(userTwo)
// console.log(Manager)

User.prototype.deposit = function(amount) {
    if (this.isGreaterThanZero(amount)) {                           //to check deposit must be greater than zero(i.e positive deposit)
        this.balance += amount;                                     //add the amount to initial amount
        console.info(`Deposit: ${this.name} new balance is ${this.balance}`);           // to display the balance after deposit
        return true;
    }
    return false;
}

//to check deposit must be greater than zero(i.e positive deposit)
User.prototype.isGreaterThanZero = function(amount) {
    const isGreaterThanZero = amount > 0;
    if (!isGreaterThanZero) {
      console.error('Amount must be positive!');
      return false;
    }
    return true;
}
  
// to withdraw from the account
User.prototype.withdraw = function(amount) {
    if (this.isAllowed(amount)) {                                               // to check sufficient amount in the account
        this.balance -= amount;
        console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
        return true;
    }
    return false;
}

// to check sufficient amount in the account
User.prototype.isAllowed = function(amount) {
    if (!this.isGreaterThanZero(amount)){                                       // to check positive withdraw
         return false;
    }
    const isAllowed = this.balance - amount >= 0;                               // to check sufficient amount in the account
    if (!isAllowed) {
      console.error('You have insufficent funds!');
      return false;
    }
    return true;
  }


  //to check the balance in the account
User.prototype.balanceEnq = function(accountNumber){
    this.balance = this.balance
    console.info(`Available Balance: ${this.name}-${this.accountNumber} has the balance ${this.balance}`);
}



// switch (userOne.accountType) {
//   case "Savings" :
//     console.log(`account type is ${this.accountType}`);
    
//     break;
//   case "Current":
//     text = "Current Account";
//                  // to deny
//     break;
//   case "Fixed" :
//     text = "Fixed account";
//     break;
//   case "Recurring":
//     text = "Recurring account";
//     break;
//     case "Home Loan":
//     text = "Home Loan";
//     break;
//   case "Vehicle Loan" :
//     text = "Vehical Loan";
//     break;
//   case "Personal loan":
//     text = "Personal";
//     break;
//   default:
//     text = "No value found";
// }


// if (`${this.accountType}` === 'Savings'){
//     console.log("saving account")
// }


// to store user in object
// const User1 = {
//     name: userOne.name,
//     balance: userOne.balance,
//     accountNumber:userOne.accountNumber
//   };
// console.log(User1)

// userOne.interest(3,1)                            // to calculate interest
// // console.log(userOne)                          //to display userOne
// // userOne.balanceEnq()                          //to display userone balance
// userOne.deposit(1000)                            //deposit to userOne Account
// userOne.withdraw(5000)                           //withdraw from userone account
// Manager.accountDetails()                         // to display account details to manager



// let userDetails = [userOne, userTwo]             
// console.log(userDetails)








