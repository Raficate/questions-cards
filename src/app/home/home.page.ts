import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: ActivatedRoute, private router:Router) {}


  goCards(){
    this.router.navigate(['/counter/e']);
  }

  goCartas(){
    this.router.navigate(['/counter/s']);
  }
}
