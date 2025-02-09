import { Component } from '@angular/core';
import { seaService } from '../service/seaService';

@Component({
  selector: 'app-forgot-password', // Sélecteur du composant
  templateUrl: './forgot-password.component.html', // Chemin vers le template HTML
  styleUrls: ['./forgot-password.component.css'] // Chemin vers les styles CSS
})
export class ForgotPasswordComponent {
  email: string = ''; // Propriété pour stocker l'adresse e-mail

  constructor(private service: seaService) {}
  
  // Méthode pour envoyer le lien de réinitialisation
  onSubmit() {
    
    if (this.email) {
      // Logique pour envoyer le lien de réinitialisation
      console.log('Envoi d\'un lien de réinitialisation à :', this.email);
      alert('Un lien de réinitialisation a été envoyé à votre adresse e-mail.');
      
      // Réinitialiser le champ
      this.email = '';
    } else {
      alert('Veuillez entrer une adresse e-mail valide.');
    }
  }
}
  



