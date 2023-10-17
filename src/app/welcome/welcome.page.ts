import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Después de 3 segundos, redirige a la página principal
    setTimeout(() => {
      this.router.navigate(['/home']); // Reemplaza 'home' con la ruta de tu página principal
    }, 3000); // 3000 milisegundos = 3 segundos
  }

}
