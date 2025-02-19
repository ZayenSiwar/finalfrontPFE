import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  signIn(): void {
    if (this.loginForm.invalid) {
      alert("Please enter valid information.");
      return;
    }

    // Logique de connexion ici

    // Redirection après la connexion réussie
    this.router.navigate(['/']); // Redirige vers la page d'accueil ou dashboard
  }

  routeToSignup(): void {
    this.router.navigate(['/signup']); // Navigue vers la page d'inscription
  }
}