import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
export class CounterPage implements OnInit {

  language = this.route.snapshot.params['lang'];
  message: string;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    if(this.language=='e'){
      this.message = "Choose the number of questions to be answered:";
    }
    if(this.language=='s'){
      this.message = "Elige la cantidad de preguntas que vais a responder:";
    }
  }

  goQuestions(howMany: number){
    if(this.language=='e'){
      this.goCards(howMany);
    }
    if(this.language=='s'){
      this.goCartas(howMany);
    }
  }

  goCards(howMany: number){
    this.router.navigate(['/card/'+ howMany]);
  }

  goCartas(howMany: number){
    this.router.navigate(['/carta/'+ howMany]);
  }

}
