
 
import { SeaService } from '../service/seaService';
import { Component } from '@angular/core';
import { take } from 'rxjs';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {


  email: string = '';
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private service: SeaService) {}

  onChangePassword(): void {
    if (this.newPassword !== this.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const changePasswordBody = {
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    };

    this.service.changePassword(changePasswordBody).pipe(take(1)).subscribe(() => {
      alert("Mot de passe changé avec succès !");
      this.resetFields();
    }, (err: any) => {
      alert("Erreur lors du changement de mot de passe. Veuillez réessayer.");
    });
  }

    onSubmit() {
        // Logique pour changer le mot de passe
        console.log('Mot de passe changé !');
        // Vous pouvez également ajouter votre logique ici pour envoyer une requête à votre backend
    }
  private resetFields(): void {
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
  }
}

