import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/data/firestore.service';
import { Question } from '../models/question.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  createQuestionForm: FormGroup;

  constructor(private readonly loadingCtrl: LoadingController, private readonly alertCtrl: AlertController, private firestoreService: FirestoreService, formBuilder: FormBuilder, private router: Router) { 

    this.createQuestionForm = formBuilder.group({
      body: ['', Validators.required],
      type: ['So...'],
      languaje: ['Spanish']
    });
  }

  ngOnInit() {
  }

  async createQuestion(){
    const loading = await this.loadingCtrl.create();

    const question: Question = {
      body: this.createQuestionForm.value.body,
      type: this.createQuestionForm.value.type,
      languaje: 'Spanish', 
      // this.createQuestionForm.value.language,
    }

    console.log(question)


    this.firestoreService.addQuestion(question).then(() => {
      loading.dismiss().then(() => {
        this.router.navigateByUrl('/create');
        
      });
    });
    
    return await loading.present();
  }

}
