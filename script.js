//Define allowed character variables
//numbers allowed
var numbers = '1234567890';
//lowercase characters allowed
var lowerCase = 'qwertyabcdefghijklmnopqrstuvwxyz';
// uppercase characters allowed
var upperCase = 'QWERTYABCDEFGHIJKLMNOPQRSTUVWXYZ';
//special characters allowed
var specialChars = "~`!@#$%^&*()_-+={[}]:;',.?/";
// initialize variable for password length
var passWordLength = '';
// define variable to store the password characters
var passWord = '';
// define variable for the final generated password

//Generate window prompts to confirm user selection of option
//ask user if they want lowercase

function generatePassword() {
  var pWord = '';
  let passWordLength = prompt(
    'Choose a password length between 8 and 128 characters.'
  );
    // if (passWordLength <= 7 || passWordLength >= 128) {
    //   let passWordLength = prompt('Password must be between 8 and 128 characters. Please try again.');
    // }
    console.log(passWordLength);
  
  let numeric = confirm('Do you want numbers in your password?');
    if (numeric === true) {
    passWord = passWord.concat(numbers);
    console.log(passWord);
    }
  let specChars = confirm('Do you want special characters in your password?');
    if (specChars == true) {
    passWord = passWord.concat(specialChars);
    console.log(passWord);
  }
  let lcChars = confirm('Do you want lowercase characters in your password?');
    if (lcChars === true) {
    passWord = passWord.concat(lowerCase);
    console.log(passWord);
  }
  let ucChars = confirm('Do you want uppercase characters in your password?');
    if (ucChars === true) {
    passWord = passWord.concat(upperCase);
    console.log(passWord);
}
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
