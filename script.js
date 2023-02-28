console.log("say something")


 // Creating arrays of characters.
 var lowercase = "abcdefghijklmnopqrstuvwxyz";
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numbers = "0123456789";
 var symbols = "!@#$%^&*()_-+=";

// Assignment Code
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var copyPass = document.querySelector("#copy");



// Write the function to generate password and collect user input on password length, including uppercase or special characters.
function writePassword() {

  // Present prompts with different criteria for password.
 
  // Prompt for the length of the password between 8 and 128 characters.
  var passLength = parseInt(prompt("How long you would like your password to be? Choose a number between 8 and 128."));
  
  // Restart the prompts if the input is of a different type.
  if (isNaN(passLength)) {
    alert("The password length has to be a number! Try again!.");
    writePassword();
  }

   isNaN(passLength);
  // Restart the prompts if the input is out of proposed range.
  if (passLength < 8 || passLength > 128) {
    alert("Looks like you chose a number outside of 8 to 128 range. Try again!");
    writePassword();
  }
 


  // Ask whether include LOWERCASE, UPPERCASE, NUMERIC, and/or SPECIAL CHARACTERS.
  var incLowercase = confirm("Would you like your password to contain lowercase letters?");

  var incUppercase = confirm("Would you like your password to contain uppercase letters?");

  var incNumbers = confirm("Would you like your password to contain numbers?");

  var incSymbols = confirm("Would you like your password to contain special characters?");
 

  // Then my input is validated and  at least one character type should be selected.
  if (
    incLowercase == false 
    && 
    incUppercase == false
    &&
    incNumbers == false
    &&
    incSymbols == false) {
      alert("You have to select at least one group of characters for your password! Try again!");
      writePassword();
  }

  
  var characters = "";
  
  // Used conditions to include uppercase, numbers or symbols in line with the earlier selections.
  if(incLowercase == true) {
    characters += lowercase;
  }
  
  if(incUppercase == true) {
    characters += uppercase;
  }

  if(incNumbers == true) {
    characters += numbers;
  }

  if(incSymbols == true) {
    characters += symbols;
  }



  var password = "";

  for (let i = 0; i < passLength; i++) {
     // Generating a random number and a random character based on that number.
    var randomNumber = Math.floor(Math.random() * characters.length);
   
    password += characters[randomNumber];
  }

  passwordText.value = password;
 
  // var password = generatePassword();
  

  return password;


}

// Press the button to Generate password.

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy to clipboard button:

copyPass.addEventListener("click", () => {
  passwordText.select();
  document.execCommand("copy");
  alert("Password Copied");
 });
