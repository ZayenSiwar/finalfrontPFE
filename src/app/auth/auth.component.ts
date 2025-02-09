import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements  AfterViewInit{
  ngAfterViewInit() {
    const loginText = document.querySelector(".title-text .login") as HTMLElement;
    const loginForm = document.querySelector("form.login") as HTMLElement;
    const loginBtn = document.querySelector("label.login") as HTMLElement;
    const signupBtn = document.querySelector("label.signup") as HTMLElement;
    const signupLink = document.querySelector("form .signup-link a") as HTMLElement;

    if (signupBtn && loginForm && loginText) {
      signupBtn.onclick = () => {
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      };
    }

    if (loginBtn) {
      loginBtn.onclick = () => {
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      };
    }

    if (signupLink && signupBtn) {
      signupLink.onclick = (event) => {
        event.preventDefault(); // Évite le rechargement de la page
        signupBtn.click();
      };
    }
  }

}
