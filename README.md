# Password Strength Detector Challenge

Create a JavaScript code challenge to build a password strength detector that evaluates the strength of a password based on specific criteria.

## Instructions

1. Create an HTML form that includes an input field for entering a password and a button to check the password strength.

2. Create a JavaScript function `checkPasswordStrength` that will be called when the button is clicked.

3. Inside the `checkPasswordStrength` function:

    - Get the password input value.

    - Implement the following password strength criteria:
        - At least 8 characters in length.
        - Contains at least one uppercase letter (A-Z).
        - Contains at least one lowercase letter (a-z).
        - Contains at least one digit (0-9).
        - Contains at least one special character (e.g., !@#$%^&*).

    - Assign a strength level to the password based on the following rules:
        - "Weak" if it meets fewer than 3 criteria.
        - "Moderate" if it meets 3 or 4 criteria.
        - "Strong" if it meets 5 criteria.

    - Display the detected password strength (e.g., "Weak," "Moderate," or "Strong") and a corresponding message to the user in an HTML element.

    - Style the user interface to provide clear visual feedback on the password strength (e.g., using colors or icons).

    - Add appropriate error messages or feedback for the user if the password does not meet the minimum criteria.

    - Make sure to clear any previous strength and message when checking a new password.

4. Inside the `checkPasswordStrength` function:

    - Get the password input value.

    - Create an array of key-value pairs to store the criteria, their descriptions, and an `isMet` property to track whether each criterion is met. For example:
        ```javascript
        const criteria = [
            { key: "length", description: "At least 8 characters in length", isMet: false },
            { key: "uppercase", description: "Contains at least one uppercase letter (A-Z)", isMet: false },
            { key: "lowercase", description: "Contains at least one lowercase letter (a-z)", isMet: false },
            { key: "digit", description: "Contains at least one digit (0-9)", isMet: false },
            { key: "special", description: "Contains at least one special character (!@#$%^&*)", isMet: false }
        ];
        ```

    - Use a loop to iterate through the criteria array. Check if the password meets the criterion. If it does, set the `isMet` property to true and increment the count.

## Challenge Concepts

- HTML form and elements.
- JavaScript functions.
- Key-value pair arrays with an `isMet` property.
- Conditional statements (if-else).
- String manipulation (checking string length, using regular expressions).
- Displaying results in HTML.
- Styling using CSS.
