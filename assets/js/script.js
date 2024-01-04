// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  let active = true;
  let length;

  while (active) {
    length = parseInt(
      prompt("How many characters should your password contain? (8-128)")
    );

    if (!length) {
      alert("You must choose a number between 8 and 128. Try again.");
    } else {
      if (length < 8 || length > 128) {
        alert("You must choose a number between 8 and 128. Try again.");
      } else {
        active = false;
      }
    }
    console.log(typeof length);
    console.log(length);
  }

  let lower = confirm(
    "Should your password contain any lower case characters?"
  );
  let upper = confirm(
    "Should your password contain any upper case characters?"
  );
  let numeric = confirm("Should your password contain any numeric characters?");
  let special = confirm("Should your password contain any special characters?");
  let result = [length, lower, upper, numeric, special];
  return result;
}


// Function for getting a random element from an array
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);

  return arr[index];
}

console.log(getRandom(upperCasedCharacters));
console.log(getRandom(lowerCasedCharacters));
console.log(getRandom(specialCharacters));
console.log(getRandom(numericCharacters));

// Function to generate password with user input
function generatePassword() {
  let passwordSpecs = getPasswordOptions();
  let passwordLenght = passwordSpecs[0];
  let masterArray = [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters];
  let specsArray = [];

  for (let i = 0; i < passwordSpecs.length; i++) {
    const spec = passwordSpecs[i];
    if (passwordSpecs[i] === true) {
      specsArray.push(masterArray[i - 1]);
    }
  }

  console.log(specsArray);

  let password = "";

  for (let j = 0; j < passwordLenght; j++) {
    
    let tempArray = getRandom(specsArray);
    let passwordChar = getRandom(tempArray);
    password += passwordChar
    
  }

  console.log(password);
  return password;

}

generatePassword();

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
