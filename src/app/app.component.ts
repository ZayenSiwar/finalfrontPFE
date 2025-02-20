// src/app/app.component.ts

import { Component } from '@angular/core';
import { UserRole } from '../app/model/user-roles'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoaded: boolean = false;

  ngOnInit() {
    // Simuler un délai pour le chargement (remplacez par votre logique de chargement réelle)
    setTimeout(() => {
      this.isLoaded = true;
    }, 0); // Mettre 0 pour que cela se lance immédiatement
  }
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  currentUserRole: UserRole | null = null;

 
  login(role: UserRole) {
    this.currentUserRole = role; 
  }


  logout() {
    this.currentUserRole = null; 
  }

  isLoggedIn(): boolean {
    return this.currentUserRole !== null;
  }

  isSuperAdmin(): boolean {
    return this.currentUserRole === UserRole.SuperAdmin;
  }

  isAdmin(): boolean {
    return this.currentUserRole === UserRole.Admin;
  }

  isUser(): boolean {
    return this.currentUserRole === UserRole.User;
  }
}