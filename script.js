// Added the generateBtn to the addEventListener as instructed
document.querySelector("#generate").addEventListener("click", writePassword);

// Declaring my variables here
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmInteger;
var confirmSpecial;

// Arrays with parameters for password creation
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var integer = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
  "!",
  "@",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "+",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
  "|",
  "_",
];

// used alerts to determine user's password perameters for main function generatePassword
function generatePassword() {
  var confirmLength = prompt(
    "How many characters between 8 and 128 would you like to be used for this password?"
  );

  while (confirmLength < 8 || confirmLength > 128) {
    alert("Password is invalid. Please try again");
    var confirmLength = prompt(
      "How many characters between 8 and 128 would you like to be used for this password?"
    );
  }

  alert(
    "This is a valid number of characters, please select which types of characters you would like to use"
  );

  var confirmLowerCase = confirm(
    "Click OK to include lower case letters; click cancel to not include lower case letters"
  );
  var confirmUpperCase = confirm(
    "Click OK to include upper case letters; click cancel to not include upper case letters"
  );
  var confirmInteger = confirm(
    "Click OK to include numeric values; click cancel to not include numeric values"
  );
  var confirmSpecial = confirm(
    "Click OK to include special characters; click cancel to not include special characters"
  );

  while (
    confirmLowerCase === false &&
    confirmUpperCase === false &&
    confirmInteger === false &&
    confirmSpecial === false
  ) {
    alert("You must click OK for at least one of the options");
    var confirmLowerCase = confirm(
      "Click OK to include lower case letters; click cancel to not include lower case letters"
    );
    var confirmUpperCase = confirm(
      "Click OK to include upper case letters; click cancel to not include upper case letters"
    );
    var confirmInteger = confirm(
      "Click OK to include numeric values; click cancel to not include numeric values"
    );
    var confirmSpecial = confirm(
      "Click OK to include special characters; click cancel to not include special characters"
    );
  }

  // Nate taught us concat at a recent class and it was perfect to use here
  var passwordVariables = [];
  // used if statements to confirm which variables would be used
  if (confirmLowerCase) {
    passwordVariables = passwordVariables.concat(lowerCase);
  }

  if (confirmUpperCase) {
    passwordVariables = passwordVariables.concat(upperCase);
  }

  if (confirmInteger) {
    passwordVariables = passwordVariables.concat(integer);
  }

  if (confirmSpecial) {
    passwordVariables = passwordVariables.concat(special);
  }

  console.log(passwordVariables);

  var passwordRandomized = "";

  // Password Logic
  for (var i = 0; i < confirmLength; i++) {
    passwordRandomized =
      passwordRandomized +
      passwordVariables[Math.floor(Math.random() * passwordVariables.length)];
    console.log(passwordRandomized);
  }
  return passwordRandomized;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
