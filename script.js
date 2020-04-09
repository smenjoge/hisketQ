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

// Function to generate Random password based on User input
function generatePassword () {
  
  var lenPassInp = parseInt(prompt("Enter a number between 8 and 128 for Length of Password."));

  if (Number.isInteger(lenPassInp)) {
    if (lenPassInp < 8 || lenPassInp > 128) {
      return "Invalid Password Length entered. Please click on 'Generate Password' button.";
    } 
  } else {
      return "Input not a Number. Please click on 'Generate Password' button.";
  }
  
  var specChar = confirm("Do you want to include any Special Characters in your password?");
  var letterCap = confirm("Do you want to include any Capital Letters in your password?");
  var letterSmall = confirm("Do you want to include any Small Letters in your password?");
  var nmbrs = confirm("Do you want to include any Numbers in your password?");
  
  if (!specChar && !letterCap && !letterSmall && !nmbrs) {
    return "Select at least one character type. Please click on 'Generate Password' button.";
  }

  var allSpecChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var allCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var allSmall = "abcdefghijklmnopqrstuvwxyz";
  var allNums = "0123456789";

  var allChars = " ";

  if (specChar) {
    if (allChars == " ") {
      allChars = allSpecChar;
    } else {
      allChars = allChars + allSpecChar;
    }
  }

  if (letterCap) {
    if (allChars == " ") {
      allChars = allCaps;
    } else {
    allChars = allChars + allCaps;
    }
  }

  if (letterSmall) {
    if (allChars == " ") {
      allChars = allSmall;
    } else {
      allChars = allChars + allSmall;
    }
  }

  if (nmbrs) {
    if (allChars == " ") {
      allChars = allNums;
    } else {
      allChars = allChars + allNums;
    }
  }
  var randomPass = "";
  for (var i = 0; i < lenPassInp; i++) {
    randomPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return randomPass;
}