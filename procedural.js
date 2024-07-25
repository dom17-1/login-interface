// script.js
class LoginForm {
    constructor(formElement) {
      this.formElement = formElement;
      this.errorMessageElement = document.getElementById('error-message');
      this.formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        this.validateInput();
      });
    }
  
    validateInput() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      const validator = new InputValidator(username, password);
      const errors = validator.validate();
  
      if (errors.length > 0) {
        this.errorMessageElement.innerText = errors.join(', ');
      } else {
        // Add login logic here
        console.log('Login successful!');
      }
    }
  }
  
  class InputValidator {
    constructor(username, password) {
      this.username = username;
      this.password = password;
      this.errors = [];
    }
  
    validate() {
      this.validateUsername();
      this.validatePassword();
      return this.errors;
    }
  
    validateUsername() {
      if (!this.username) {
        this.errors.push('Username cannot be empty');
      } else if (!this.isValidEmail(this.username)) {
        this.errors.push('Invalid email address');
      }
    }
  
    validatePassword() {
      if (!this.password) {
        this.errors.push('Password cannot be empty');
      } else if (this.password.length <= 8) {
        this.errors.push('Password must be more than 8 characters');
      }
    }
  
    isValidEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    }
  }
  
  const form = document.getElementById('login-form');
  const loginForm = new LoginForm(form);