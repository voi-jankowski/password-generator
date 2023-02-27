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


// Add event listener to password range change.
passLength.addEventListener("change", (event) => {
  passLengthResult.innerText = event.target.value;
});

var lengthValue = passLengthResult.innerText;

console.log(lengthValue);


// Write the function to generate password and collect user input on password length, including uppercase or special characters.
function writePassword(length, characters) {

  // Creating arrays of characters.
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*_-+=";

  // Used conditions to include uppercase, numbers or symbols in line with the settings selections.
  if(includeUppercase.checked == true) {
    characters += uppercase;
  }

  if(includeNumbers.checked == true) {
    characters += numbers;
  }

  if(includeSymbols.checked == true) {
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
  
  console.log(password);

  return password;


}



// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy to clipboard button:

copyPass.addEventListener("click", () => {
  passwordText.select();
  Document.execCommand("copy");
  alert("Password Copied");
})








