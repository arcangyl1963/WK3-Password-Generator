//Define allowed character variables
//numbers allowed
var numbers = '1234567890';
//lowercase characters allowed
var lowerCase = 'qwertyabcdefghijklmnopqrstuvwxyz';
// uppercase characters allowed
var upperCase = 'QWERTYABCDEFGHIJKLMNOPQRSTUVWXYZ';
//special characters allowed
var specialChars = "~`!@#$%^&*()_-+=<>{[}]:;',.?|/";
// initialize variable for password length
var passWordLength = '';
// define variable to store the password characters
var passWord = '';
// define variable for the final generated password

//Define window prompts of generatePassword function to confirm user's selection of character options for the password

function generatePassword() {
  var pWord = '';
  let passWordLength = prompt(
    'Choose a password length between 8 and 128 characters.'
  );
  //Validate user input meets the criteria
    if ((passWordLength <= 7 || passWordLength >= 128)) {
    passWordLength = prompt("The number you entered is not between 8 and 128. Enter a number between ");
    } else {
      passWordLength = passWordLength;
    } 
  // Add characters to password variable based on user selections
  let numeric = confirm('Do you want numbers in your password?');
    if (numeric === true) {
    passWord = passWord.concat(numbers);

    }
  let specChars = confirm('Do you want special characters in your password?');
    if (specChars == true) {
    passWord = passWord.concat(specialChars);

  }
  let lcChars = confirm('Do you want lowercase characters in your password?');
    if (lcChars === true) {
    passWord = passWord.concat(lowerCase);

  }
  let ucChars = confirm('Do you want uppercase characters in your password?');
    if (ucChars === true) {
    passWord = passWord.concat(upperCase);

}
// loop through password variable and assign random characters to a new variable
  for (i = 1; i <= passWordLength; i++) {
    var passChar = Math.floor(Math.random() * passWord.length + 1);
    
    pWord += passWord.charAt(passChar)
  }
  return pWord;
}

// Assignment Code
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var mypassword = generatePassword();
  var mypasswordText = document.querySelector('#password');
  mypasswordText.value = mypassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
