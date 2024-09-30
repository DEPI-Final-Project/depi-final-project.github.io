
// login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
  
})
export class LoginComponent {
  signupEmail: string = '';
  signupPassword: string = '';
  loginEmail: string = '';
  loginPassword: string = '';
  signupError: string = '';
  loginError: string = '';

  onSignUp() {
    if (this.signupEmail && this.signupPassword) {
      localStorage.setItem(this.signupEmail, this.signupPassword);
      alert('Sign Up successful! You can now log in.');
      this.clearSignupForm();
    } else {
      this.signupError = 'Please enter both email and password.';
    }
  }

  onLogin() {
    const storedPassword = localStorage.getItem(this.loginEmail);
    if (storedPassword && storedPassword === this.loginPassword) {
      alert('Login successful!');
      this.clearLoginForm();
    } else {
      this.loginError = 'Invalid email or password. Please try again.';
    }
  }

  clearSignupForm() {
    this.signupEmail = '';
    this.signupPassword = '';
    this.signupError = '';
  }

  clearLoginForm() {
    this.loginEmail = '';
    this.loginPassword = '';
    this.loginError = '';
  }
}

