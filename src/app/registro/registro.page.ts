import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string | undefined;
  correo: string | undefined;
  contrasena: string | undefined;

  constructor(private router: Router) { }

  registrarUsuario() {
    // Aquí puedes agregar lógica para registrar al usuario, por ejemplo, enviar datos a un servicio o API.
    // Luego, redirige al usuario a otra página, por ejemplo, la página de inicio de sesión.
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
