import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeaService } from '../service/seaService';
import { SignUpForm } from '../model/signup-form.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private seaService: SeaService) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      newpassword: ['', [Validators.required, Validators.minLength(8)]],
      
    });
  }

  signUp(): void {
    if (this.signUpForm.invalid) {
      alert("Please enter valid information.");
      return;
    }

    const body: SignUpForm = this.signUpForm.value;

    this.seaService.registerUser(body).subscribe(() => {
      alert("Registration successful!");
      this.router.navigate(['/login']); 
    }, (err: any) => {
      console.error("Error: ", err);
      alert("Something went wrong during registration! Please try again.");
    });
  }

  routeToLogin(): void {
    this.router.navigate(['/login']);
  }
 ngAfterViewInit() {
    const signUpText = document.querySelector(".title-text .signup") as HTMLElement;
    const loginForm = document.querySelector("form.login") as HTMLElement;
    const signUpForm = document.querySelector("form..signup") as HTMLElement;
    const loginBtn = document.querySelector("label.login") as HTMLElement;
    const signupBtn = document.querySelector("label.login") as HTMLElement;
    const signupLink = document.querySelector("form .signup-link a") as HTMLElement;

    if (loginBtn && signUpForm && signUpText) {
      loginBtn.onclick = () => {
        signUpForm.style.marginLeft = "-50%";
        signUpText.style.marginLeft = "-50%";
      };
    }

    if (signUpForm) {
      signUpForm.onclick = () => {
        signUpForm.style.marginLeft = "0%";
        signUpText.style.marginLeft = "0%";
      };
    }

    if (signupLink && signupBtn) {
      signupLink.onclick = (event) => {
        event.preventDefault(); 
        signupBtn.click();
      };
    }
  }
}
