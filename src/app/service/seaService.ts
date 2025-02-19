import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginForm } from '../model/login-form';
import { SignUpForm } from '../model/signup-form.model'; // Assurez-vous que ce modèle existe

@Injectable({
  providedIn: 'root'
})
export class SeaService {

  login(body: { email: any; password: any; }) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8089'; // URL de l'API Spring Boot

  constructor(private http: HttpClient) {}

   authenticateUser(loginRequest: LoginForm): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, loginRequest);
  }

  // Méthode pour inscrire un nouvel utilisateur
  registerUser(signUpRequest: SignUpForm): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/signup`, signUpRequest);
  }

  // Méthode pour stocker l'autorisation de l'utilisateur
  storeUserAuthorization(token: string): void {
    localStorage.setItem("token", token);
  }

  // Méthode pour obtenir l'autorisation de l'utilisateur
  getUserAuthorization(): string | null {
    return localStorage.getItem("token");
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    localStorage.removeItem("token");
    // Redirection si besoin
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isUserLoggedIn(): boolean {
    return this.getUserAuthorization() !== null;
  }

    forgotPassword(body: { currentPassword: string; newPassword: string }): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/forgot`, body);
    }
  
    // Méthode pour changer le mot de passe
    changePassword(body: { currentPassword: string, newPassword: string }): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/change`, body);
    }
    sendVerificationEmail(email: string): Observable<any> {
      const body = { email };
      return this.http.post(`${this.apiUrl}/send-verification`, body);
}
getUserByEmail(email: string): Observable<any> {
  return this.http.get(`${this.apiUrl}?email=${email}`);
}

// Mettre à jour le mot de passe de l'utilisateur
updatePassword(email: string, newPassword: string): Observable<any> {
  return this.http.put(`${this.apiUrl}/update`, { email, password: newPassword });
}
}