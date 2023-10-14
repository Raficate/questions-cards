import { Component, OnInit } from '@angular/core';
import data from '../../assets/questions.json';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {


  // isFlipped: boolean = false;
  // cartaText: string = 'Texto de la carta desde JSON';

  // flipCard() {
  //   this.isFlipped = !this.isFlipped;
  // }

  // resetCard() {
  //   this.isFlipped = false;
  //   this.cartaText = 'Nuevo texto de la carta desde JSON';
  // }
  
  cardText: string;

  constructor(private platform: Platform) { }

  ngOnInit() {
    this.cardText = data.questions[this.getRandomInt(data.questions.length)]
  }


  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  // Función para reiniciar la página actual
  resetPage() {
    window.location.reload();
    // console.log("holaholahola")
    // const currentUrl = this.platform.url();
    // this.platform
    //   .ready()
    //   .then(() => {
    //     history.replaceState({}, '', currentUrl);
    //   });
  }

}
