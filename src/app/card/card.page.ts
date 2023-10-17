import { Component, OnInit } from '@angular/core';
import data from '../../assets/questions.json';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  cardText: string;
  loop = Number(this.route.snapshot.params['loop']) - 1;

  constructor(private platform: Platform, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.cardText = data.questions[this.getRandomInt(data.questions.length)]
  }


  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  // Función para reiniciar la página actual
  resetPage() {
    if(this.loop == 0){
      this.router.navigate(['/home']);
    }else {
      this.router.navigate(['/card/'+ this.loop]);
    }
    
  }

}
