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
// Assigning variables to user input from the prompts.




// Write the function to generate password and collect user input on password length, including uppercase or special characters.
function writePassword() {

  // Present prompts with different criteria for password.
 
  // Prompt for the length of the password between 8 and 128 characters.
  var passLength = parseInt(prompt("How long you would like your password to be? Choose a number between 8 and 128."));
   isNaN(passLength);
  if (passLength < 8 || passLength > 128) {
    alert("Looks like you chose a number outside of 8 to 128 range. Try again!");
    writePassword();
  }



  // Ask whether include LOWERCASE, UPPERCASE, NUMERIC, and/or SPECIAL CHARACTERS.
  var incLowercase = parseInt(confirm("Would you like your password to contain lowercase letters?"));

  var incUppercase = parseInt(confirm("Would you like your password to contain uppercase letters?"));

  var incNumbers = parseInt(confirm("Would you like your password to contain numbers?"));

  var incSymbols = parseInt(confirm("Would you like your password to contain special characters?"));

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

  // Generating a random number and a random character based on that number.
  var randomNumber = Math.floor(Math.random() * characters.length);
  var randomCharacter = characters[randomNumber];
  console.log(randomCharacter);

  var password = "";

  for (i = 0; i < lengthValue; i++) {
    password += randomCharacter;
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
  Document.execCommand("copy");
  alert("Password Copied");
})








