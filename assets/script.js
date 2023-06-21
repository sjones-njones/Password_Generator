// stores variable
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// stores variables for all possible password characters 
var optionsNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var optionsABCLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var optionsABCUpper = optionsABCLower.map(optionsABCLower => optionsABCLower.toUpperCase());
var optionsSpCh = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '^', '`', '{', '|', '}', '~', '\'', '\"', '\[', '\]', '\\', '\_'];
var useChars = [];
var pwLength;

function generatePassword() {
  useChars = [];
  promptMe();
  if (useChars == []) {

  }
  var pwText = "";
  for (var i = 0; i < pwLength; i++) {

    var rng = Math.floor(Math.random() * useChars.length);
    pwText += useChars[rng];
  }
  return pwText;
}

// determines password length using user input
function promptMe() {
  var characterPrompt = Number(window.prompt("How many characters would you like in your password? Enter a number between 8 and 128."));
  if (characterPrompt < 8 || characterPrompt > 128 || isNaN(characterPrompt)) {
    window.alert("Please choose a number between 8 and 128.");
  } else {
    pwLength = characterPrompt;
    promptMeLower();
  }
}

// asks user if lowercase characters will be included
function promptMeLower() {
  var lowerPrompt = window.confirm("Would you like lower case letters to be included in your password?");
  if (lowerPrompt) {
    useChars = useChars.concat(optionsABCLower);
  }
  promptMeUpper();
}

// asks user if uppercase characters will be included
function promptMeUpper() {
  var upperPrompt = window.confirm("Would you like upper case letters to be included in your password?");
  if (upperPrompt) {
    useChars = useChars.concat(optionsABCUpper);
  }
  promptMeNum();
}

// asks user if numbers will be included
function promptMeNum() {
  var numPrompt = window.confirm("Would you like numbers to be included in your password?");
  if (numPrompt) {
    useChars = useChars.concat(optionsNum);
  }
  promptMeChar();
}

// asks user if special characters will be included
function promptMeChar() {
  var specialPrompt = window.confirm("Would you like special characters to be included in your password?");
  if (specialPrompt) {
    useChars = useChars.concat(optionsSpCh);
  }
}

// click event calls function and writes password as promised
generateBtn.addEventListener("click", writePassword);
