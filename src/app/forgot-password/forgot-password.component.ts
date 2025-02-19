import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SeaService } from '../service/seaService';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  enteredPassword: string = '';
  newPassword: string = '';
  message: string = '';
  user: any;
  isShowChangePassword: boolean = false; 
  isCodeSent: boolean = false;           

  constructor(private router: Router, private seaService: SeaService) {}

  ngOnInit(): void {
    // Initialisation si nécessaire
  }

  onSubmit(): void {
    if (this.validateEmail(this.email)) {
        this.seaService.getUserByEmail(this.email).subscribe(
            (user: any) => {
                this.user = user;
                this.openGmail();
                this.isCodeSent = true;
                this.router.navigate(['/change'], { queryParams: { email: this.email } });
                this.message = "Un code a été envoyé à votre email."; 
            },
            (error: any) => {
                alert("Email non trouvé."); 
                location.reload();
            }
        );
    } else {
        alert("Veuillez entrer un email valide."); // Alerte pour l'email invalide
    }
}


  private openGmail(): void {
    // Ouvrir Gmail dans un nouvel onglet (simuler l'envoi)
    window.open('https://mail.google.com/', '_blank');
  }


  verifyPassword(): void {
    if (this.user && this.enteredPassword === this.user.password) {
      this.isShowChangePassword = true;
      this.message = "Mot de passe vérifié. Vous pouvez changer votre mot de passe.";
    } else {
      this.message = "Email ou mot de passe incorrect. Veuillez réessayer.";
    }
  }

  changePassword(): void {
    if (this.newPassword) {
      this.seaService.updatePassword(this.email, this.newPassword).subscribe(
        () => {
          this.message = "Votre mot de passe a été changé avec succès.";
          this.resetFields();
        },
        (error: any) => {
          this.message = "Erreur lors de la mise à jour du mot de passe.";
        }
      );
    } else {
      this.message = "Veuillez entrer un nouveau mot de passe.";
    }
  }

  closeModal(): void {
    this.message = ''; 
    this.resetFields(); 
  }

  refreshPage(): void {
    location.reload(); 
  }

  private validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return re.test(email);
  }

  private resetFields(): void {
    this.email = '';
    this.enteredPassword = '';
    this.newPassword = '';
  }
}