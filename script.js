console.log("say something")

// Assignment Code
var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
// Assigning variables to user input from the settings.
var passLength = document.querySelector("#length");
var passLengthResult = document.querySelector("#length-result");
var includeNumbers = document.querySelector("#numbers");
var includeSymbols = document.querySelector("#symbols");

var copyPass = document.querySelector("#copy");



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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







