import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal(false);

  login(): void {
    localStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticated.set(true);
  }

  logout(): void {
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticated.set(false);
  }

  initializeAuth(): void {
    const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';
    this.isAuthenticated.set(isLoggedIn);
  }
}