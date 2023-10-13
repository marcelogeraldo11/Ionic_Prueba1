import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  

  ngOnInit() {
  }

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']); // Navega a la página de inicio de sesión cuando se llama a esta función
  }
  

}
