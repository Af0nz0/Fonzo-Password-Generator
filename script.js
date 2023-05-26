var generateBtn = document.querySelector("#generate");

function getPasswordCriteria() {
  var length = prompt(
    "Enter the length of the password (between 8 and 128 characters)"
  );

  if (length === null || length === "") {
    alert("Please enter a valid password length.");
    return getPasswordCriteria();
  }

  length = parseInt(length);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return getPasswordCriteria();
  }
  //chooses whether you clicked okay or cancel
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecialChars
  ) {
    alert("Pick at least one character type.");
    return getPasswordCriteria();
  }
  //Saving the password criteria
  var criteria = {
    length: length,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecialChars: includeSpecialChars,
  };

  return criteria;
}

function generatePassword() {
  var criteria = getPasswordCriteria();
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  var availableChars = "";
  var generatedPassword = "";

  if (criteria.includeLowercase) {
    availableChars += lowercaseChars;
  }

  if (criteria.includeUppercase) {
    availableChars += uppercaseChars;
  }

  if (criteria.includeNumeric) {
    availableChars += numericChars;
  }

  if (criteria.includeSpecialChars) {
    availableChars += specialChars;
  }

  for (var i = 0; i < criteria.length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPassword += availableChars[randomIndex];
  }

  return generatedPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
