

const account = {
  accountName: "Chris",
  balance: 10000,
}


function atm() {
    var message = (prompt("What is your name?"));
    var response = (prompt("Hello " + message + "!" + " What would you like to do today?"));
    if (response == "balance") {
      prompt("Your current balance is " + account.balance);
    } else if (response == "account") {
      prompt("Your account information is the following: " + "Your name: " + account.accountName + " and your current balance is: " + account.balance) + "You can always exit by typing exit";
    } else if (response == "deposit") {
      //parseFloat helps define the variable as number instead of string to be able to add the math ex. 1000 + 500 = 1500 instead of 1000500
      var deposit = parseFloat(prompt("How much would you like to deposit?" + "You can always exit by typing exit"));
    } else if (response == "withdraw") {
      var withdraw = parseFloat(prompt("How much would you like to withdraw?" + "You can always exit by typing exit"));
    } else if (response != "balance" || "account" || "deposit" || "withdraw" || "chris") {
      prompt("Sorry that's not a valid option");
      throw "exit";
    } if (deposit) {
      let x = account.balance + deposit;
      prompt("Your new balance is: " + x)
    } if (withdraw) {
      let y = account.balance - withdraw;
      prompt("Your new balance is: " + y)
    }  
}
atm();
    //I use if/else statements because it's easier for me to understand where the breakpoint is and make it more readable.


























// BANK ACCOUNT

// REQUIREMENTS
// Create an object called account that has the following properties:
// - accountName, should be the data type string
// this property should contain the name of the account holder







// - getBalance, should be a function
// this function should display the total amount of the account to the user


parseFloat
// - deposit, also a function
// this function should be able to deposit money onto the balance of the account


























// - withdrawal, also a function
// this function should be able do withdrawal money from the balance of the account

// - getAccountName, function as well
// this function should dispaly the account holders name to the user

// - accountError, same as above function!
// this one is a bit tricky... it's up to you to figure out how or what you should use this for.
// HINT: it's more a thinking poblem than a technical problem :)

// EXTRA: exitAccount, should be a function
// this function should exit the account
// HINT: there are a few different ways to do this, it's up to which way you choose.

// EXTRA = OPTIONAL NOT MANDATORY

// Remember that a function is just a value. And if a function is just a
// value then we can both pass it as a parameter to a function and
// pass it as a property of an object.

// The object should handle all of the functionality (logic)

// The atm() function should be responsible for showing the user interface
// and based on the user input show the right meny choice

// HINT:
// these operators could probably be useful in this assignment:
// && operator
// || operator

// In this assignment you do not have to create any HTML you will only output
// to the console. But you will use prompt instead of just regular console.

// to handle one of the potential errors you can use this built in method isNaN(), this is how you use it:
const variableName = 10;
isNaN(variableName);

// this is the function atm(), I've created some start code for you

  // you need to answer the question why we are using parseFloat() method here?
  // you can answer as a comment in your code, and yes you need to some research of your own

  // to show the right output based on the user input you can
  // either use a if/else statement or a switch.
  // Write a comment and motivate your choice

