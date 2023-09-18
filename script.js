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
 let preStrength = 0
 const resultElement = document.getElementById("result");
 let iCounter = 0
 for (iCounter = 0; iCounter < criteria.length; iCounter++) {
      criteriaNotMet()
 }
 /**
  * @returns the strength of the password according to the criteria along with feedback as to how to make the password stronger
  */
 function checkPasswordStrength() {
  // Get the password input value
  const password = document.getElementById("passwordInput").value;

  // Implement password strength detection logic here

if (password.length >= 8) {
 criteria[0].isMet = true
  if (criteria[0].isMet== true) { 
    passwordLength++
    criteriaMet()
  }
} else {
 passwordLength = 0
}
 
 if (/[A-Z]/.test(password)){
  criteria[1].isMet = true
  if (criteria[1].isMet == true) {
    passwordUpCase++
    criteriaMet()
  }
 } else {
  passwordUpCase = 0
 }
 
 if (/[a-z]/.test(password)){
  criteria[2].isMet = true
  if (criteria[2].isMet == true) {
    passwordLowCase++
    criteriaMet()
  }
 } else {
    passwordLowCase = 0
 }
 
 if (/[0-9]/.test(password)){
  criteria[3].isMet = true
  if (criteria[3].isMet == true) {
    passwordDigit++
    criteriaMet()
  }
 } else {
    passwordDigit = 0
 }


 
 if (/[!@#$%^&*]/.test(password)){
  criteria[4].isMet = true
  if (criteria[4].isMet == true) {
    passwordSpec++
    criteriaMet()
  }
 } else {
    passwordSpec = 0
 }

  preStrength = passwordLength + passwordUpCase + passwordLowCase + passwordDigit + passwordSpec
 let passwordResult = ""
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
  resultElement.style.color = "green"
  resetStrenghtChecker()
 }
  // Display password strength result and feedback
  
  let finalResult = passwordResult
  resultElement.innerHTML = finalResult 
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

function criteriaNotMet () {
  const criteriaNotMet = document.getElementById("criteria-not-met") 
  const para = document.createElement("div")
  para.id = iCounter
  const textNode = document.createTextNode(criteria[iCounter]["description"])
  para.appendChild(textNode)
  criteriaNotMet.append(para)
}

 let criteriaLength = document.getElementById("0")
  let criteriaUpp = document.getElementById("1")
  let criteriaLow = document.getElementById("2")
  let criteriaDigit = document.getElementById("3")
  let criteriaSpec = document.getElementById("4")
function criteriaMet () {
  
  if (criteria[0].isMet == true) {
  criteriaLength.style.color = "Green" 
    } else {
  criteriaLength.style.color = "Red"
    }
  if (criteria[1].isMet == true) {
    criteriaUpp.style.color = "Green" 
    } else {
    criteriaUpp.style.color = "Red"
    }
  if (criteria[2].isMet == true) {
    criteriaLow.style.color = "Green" 
    } else {
    criteriaLow.style.color = "Red"
    }
  if (criteria[3].isMet == true) {
    criteriaDigit.style.color = "Green" 
    } else {
    criteriaDigit.style.color = "Red"  
    }
  if (criteria[4].isMet == true) {
    criteriaSpec.style.color = "Green" 
    } else {
    criteriaSpec.style.color = "Red"  
    }

}