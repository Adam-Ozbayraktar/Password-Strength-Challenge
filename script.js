const criteria = [
    { key: "length", description: "At least 8 characters in length", isMet: false },
    { key: "uppercase", description: "Contains at least one uppercase letter (A-Z)", isMet: false },
    { key: "lowercase", description: "Contains at least one lowercase letter (a-z)", isMet: false },
    { key: "digit", description: "Contains at least one digit (0-9)", isMet: false },
    { key: "special", description: "Contains at least one special character (!@#$%^&*)", isMet: false }
  ];
//test
 // JavaScript code for password strength detection
 let passwordLength = 0
 let passwordUpCase = 0
 let passwordLowCase = 0
 let passwordDigit = 0
 let passwordSpec = 0
 let feedBackRecom = ""
 let preStrength = 0
 const resultElement = document.getElementById("result");
 /**
  * @returns the strength of the password according to the criteria along with feedback as to how to make the password stronger
  */
 function checkPasswordStrength() {
  // Get the password input value
  const password = document.getElementById("passwordInput").value;

  // Implement password strength detection logic here
let lengthCheck = criteria[0].isMet
if (password.length >= 8) {
 lengthCheck = true
  if (lengthCheck == true) { 
    passwordLength++
  }
} else {
 passwordLength = 0
 feedBackRecom += "Try increasing the length of passowrd to increase password strength"
}
 let uppCaseCheck = criteria[1].isMet
 if (/[A-Z]/.test(password)){
  uppCaseCheck = true
  if (uppCaseCheck == true) {
    passwordUpCase++
  }
 } else {
  passwordUpCase = 0
  feedBackRecom += "Try adding Capital Letters to increase password strength" + "\r\n"
 }
 let lowCaseCheck = criteria[2].isMet
 if (/[a-z]/.test(password)){
  lowCaseCheck = true
  if (uppCaseCheck == true) {
    passwordLowCase++
  }
 } else {
    passwordLowCase = 0
    feedBackRecom += "Try adding Lower Case Letters to increase password strength" + "\r\n"
 }
 let digitCheck = criteria[3].isMet
 if (/[0-9]/.test(password)){
  digitCheck = true
  if (digitCheck == true) {
    passwordDigit++
  }
 } else {
    passwordDigit = 0
    feedBackRecom += "Try adding numbers (0-9) to increase password strength" + "\r\n"
 }


 let specialCharacterCheck = criteria[4].isMet
 if (/[!@#$%^&*]/.test(password)){
  specialCharacterCheck = true
  if (specialCharacterCheck == true) {
    passwordSpec++
  }
 } else {
    passwordSpec = 0
    feedBackRecom += "Try adding special characters ([!@#$%^&*) to increase password strength" + "\r\n"
 }

  preStrength = passwordLength + passwordUpCase + passwordLowCase + passwordDigit + passwordSpec
 let passwordResult = ""
 let passwordFeedback = ""
 if (preStrength < 3) {
    passwordResult = "Weak"
    resultElement.style.color = "red"
    resetStrenghtChecker()
 } else if (preStrength < 5) {
    passwordResult = "Moderate"
    resultElement.style.color = "orange"
    resetStrenghtChecker()
 } else if (preStrength = 5) {
  passwordResult = "Strong"
  feedBackRecom = ""
  resultElement.style.color = "green"
  resetStrenghtChecker
 }
  // Display password strength result and feedback
  
  let finalResult = passwordResult
  resultElement.innerHTML = finalResult +" " + feedBackRecom
  // Update resultElement.innerHTML with the strength and feedback.
}

function resetStrenghtChecker () {
   preStrength = 0
   passwordLength = 0
   passwordUpCase = 0
   passwordLowCase = 0
   passwordDigit = 0
   passwordSpec = 0
}