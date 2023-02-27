console.log("say something")

// Assignment Code
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
// Assigning variables to user input from the settings.
var passLength = document.querySelector("#length");
var passLengthResult = document.querySelector("#length-result");
var includeUppercase =document.querySelector("#uppercase");
var includeNumbers = document.querySelector("#numbers");
var includeSymbols = document.querySelector("#symbols");

var copyPass = document.querySelector("#copy");

  // Creating arrays of characters.
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";


// Write password to the #password input
function writePassword() {
  // Collect user input on password length, including uppercase or special characters.


 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to password range change.
passLength.addEventListener("change", (event) => {
  passLengthResult.innerText = event.target.value;
});

// Add event listener to generate button to create a string with the specified allowed characters selected in the options and of length specified in the options.
generateBtn.addEventListener("click",  () => {
  includeUppercase.checked ? (characters += uppercase) : "";
  includeNumbers.checked ? (characters += numbers) : "";
  includeSymbols.checked ? (characters += symbols) : "";
  passwordText.value = writePassword(length.value, characters);
});








