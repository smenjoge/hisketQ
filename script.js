// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var allChars;

// Function to create a superset of all characters to choose from for generating random password
function appendChoice (userChoice, charsToAppend) {
  if (userChoice) {
    if (allChars === " ") {
      allChars = charsToAppend;
    } else {
      allChars = allChars + charsToAppend;
    }
  }
}

// Function to generate Random password based on User input
function generatePassword () {
  
  var lengthPassword = parseInt(prompt("Enter a number between 8 and 128 for Length of Password."));

  if (Number.isInteger(lengthPassword)) {
    if (lengthPassword < 8 || lengthPassword > 128) {
      return "Invalid Password Length entered. Click on 'Generate Password' button to restart.";
    } 
  } else {
      return "Input not a Number. Click on 'Generate Password' button to restart.";
  }
  
  var specialCharBl = confirm("Do you want to include any Special Characters in your password?");
  var capLettersBl = confirm("Do you want to include any Capital Letters in your password?");
  var smallLettersBl = confirm("Do you want to include any Small Letters in your password?");
  var nmbrsBl = confirm("Do you want to include any Numbers in your password?");
  
  if (!specialCharBl && !capLettersBl && !smallLettersBl && !nmbrsBl) {
    return "Select at least one character type. Click on 'Generate Password' button to restart.";
  }

  var specialCharArr = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var capLettersArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var smallLettersArr = "abcdefghijklmnopqrstuvwxyz";
  var numsArr = "0123456789";

  allChars = " ";
  
  appendChoice(specialCharBl, specialCharArr);
  appendChoice(capLettersBl, capLettersArr);
  appendChoice(smallLettersBl, smallLettersArr);
  appendChoice(nmbrsBl, numsArr);

  var randomString = "";
  for (var i = 0; i < lengthPassword; i++) {
    randomString += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return randomString;
}