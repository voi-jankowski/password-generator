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




// Write the function to generate password and collect user input on password length, including uppercase or special characters.
function writePassword(length, characters) {
  // Creating arrays of characters.
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_-+=";

  if(includeUppercase.checked == true) {
    characters += uppercase;
  }

  if(includeNumbers.checked == true) {
    characters += numbers;
  }

  if(includeSymbols.checked == true) {
    characters += symbols;
  }

  var randomNumber = Math.floor(Math.random() * characters.length);
  var randomCharacter = characters[randomNumber];
  console.log(randomCharacter);


 
  var password = generatePassword();
  

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

// Add event listener to copy to clipboard button:

copyPass.addEventListener("click", () => {
  passwordText.select();
  Document.execCommand("copy");
  alert("Password Copied");
})








