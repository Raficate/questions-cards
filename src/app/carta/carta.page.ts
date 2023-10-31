import { Component, OnInit } from '@angular/core';
import data from '../../assets/preguntas.json';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../services/data/firestore.service';
import { Question } from '../models/question.interface';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {

  cardText: string;
  loop = Number(this.route.snapshot.params['loop']) - 1;
  questions: Question[];
  size: number;

  constructor(private route: ActivatedRoute, private router:Router, private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getPreguntas();
  }

  getPreguntas(){
    this.firestoreService.getPreguntas().subscribe(questions => {
      this.size  = questions.length;
      this.cardText = questions[this.getRandomInt(this.size)].body;
    })
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
