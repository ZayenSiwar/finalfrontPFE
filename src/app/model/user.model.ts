// src/app/model/user.model.ts

export interface User {
    id?: number; // Optionnel, si vous avez un identifiant
    email: string;
    password: string; // Si vous voulez stocker le mot de passe (à éviter en pratique)
    // Ajoutez d'autres propriétés selon vos besoins
  }