console.log("Hello World.");


generateRandomNumber(15);

function generateRandomNumber (max) {
    // Return random number 0 to 10;
    let randomNum = (Math.floor(Math.random() * max) + 1);

    // if .... else if else statement
    // if (condition) {block of code to execute}
    // ==, ! =, >, <, > =, < =, &&, ||
   
   if(randomNum <= 15) {
      console.log(`Random Number ${randomNum} is is B. 1 - 15.`);
   } else if (randomNum >= 16 && randomNum <= 30) {
      console.log(`Random Number ${randomNum} is in I. 16 - 30`);
   } 
   else if (randomNum >= 31 && randomNum <= 45) {
      console.log(`Random Number ${randomNum} is in N. 31 - 45`);
   } 
   else if (randomNum >= 46 && randomNum <= 61) {
      console.log(`Random Number ${randomNum} is in G. 46 - 61`);
   } 
   else if (randomNum >= 61 && randomNum <= 75) {
      console.log(`Random Number ${randomNum} is in O. 61 - 75`);
   } 
   else {
    return console.log(`Random Number is invalid.`)
   
}

}