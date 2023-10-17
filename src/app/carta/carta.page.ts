import { Component, OnInit } from '@angular/core';
import data from '../../assets/preguntas.json';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {

  cardText: string;
  loop = Number(this.route.snapshot.params['loop']) - 1;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.cardText = data.preguntas[this.getRandomInt(data.preguntas.length)]
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  // Función para reiniciar la página actual
  resetPage() {
    if(this.loop == 0){
      this.router.navigate(['/home']);
    }else {
      this.router.navigate(['/carta/'+ this.loop]);
    }
  }

}
