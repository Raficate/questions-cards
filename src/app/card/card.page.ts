import { Component, OnInit } from '@angular/core';
import data from '../../assets/questions.json';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirestoreService } from '../services/data/firestore.service';
import { Question } from '../models/question.interface';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  cardText: string;
  loop = Number(this.route.snapshot.params['loop']) - 1;
  questions: Question[];
  size: number;

  constructor(private platform: Platform, private route: ActivatedRoute, private router:Router, private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(){
    this.firestoreService.getQuestions().subscribe(questions => {
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
      this.router.navigate(['/card/'+ this.loop]);
    }
    
  }

}
