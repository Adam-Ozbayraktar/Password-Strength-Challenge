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
 function checkPasswordStrength() {
  // Get the password input value
  const password = document.getElementById("passwordInput").value;

  // Implement password strength detection logic here
let lengthCheck = criteria[0].isMet
if (password.length >= 8) {
 lengthCheck = true
  if (lengthCheck = true) { 
    passwordLength++
  }
} else {
 passwordLength = 0
}
 let uppCaseCheck = criteria[1].isMet
 if (/[A-Z]/.test(password)){
  uppCaseCheck = true
  if (uppCaseCheck = true) {
    passwordUpCase++
  }
 } else {
  passwordUpCase = 0
 }
 let lowCaseCheck = criteria[2].isMet
 if (/[a-z]/.test(password)){
  lowCaseCheck = true
  if (uppCaseCheck = true) {
    passwordLowCase++
  }
 } else {
    passwordLowCase = 0
 }
 let digitCheck = criteria[3].isMet
 if (/[0-9]/.test(password)){
  digitCheck = true
  if (digitCheck = true) {
    passwordDigit++
  }
 } else {
    passwordDigit = 0
 }


 let specialCharacterCheck = criteria[4].isMet
 if (/[!@#$%^&*]/.test(password)){
  specialCharacterCheck = true
  if (specialCharacterCheck = true) {
    passwordSpec++
  }
 } else {
    passwordSpec = 0
 }

 let preStrength = passwordLength + passwordUpCase + passwordLowCase + passwordDigit + passwordSpec
 let passwordResult = ""
 if (preStrength < 3) {
    passwordResult = "Weak"
 } else if ((preStrength = 3) || (preStrength = 4)) {
    passwordResult = "Moderate"
 } else if (preStrength > 5) {
  passwordResult = "Strong"
 }
  // Display password strength result and feedback
  const resultElement = document.getElementById("result");
  let finalResult = passwordResult
  resultElement.innerHTML = finalResult
  // Update resultElement.innerHTML with the strength and feedback
}