import { Injectable } from '@angular/core';
import { collectionData, collection, addDoc, getDocs, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../../models/question.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private readonly firestore: Firestore) { }


  // addQuestion(question: Question) {
  //   const questionRef = collection(this.firestore, 'questions');
  //   return addDoc(questionRef, question);
  // }

  // async getQuestions(): Promise<Observable<Question[]>> {
  //   const questionRef = collection(this.firestore, 'questions');
  //   let questions =  await getDocs(questionRef);
  //   return questions;
  // }


  addQuestion(order: Question) {
    const orderRef = collection(this.firestore, 'preguntas');
    return addDoc(orderRef, order)
  }

  getQuestions(): Observable<Question[]>{
    const orderRef = collection(this.firestore, 'questions');
    return new Observable<Question[]>(observer => {
      getDocs(orderRef)
        .then(querySnapshot => {
          const questions: Question[] = [];
          querySnapshot.forEach(doc => {
            questions.push({ id: doc.id, ...doc.data() } as Question);
          });
          observer.next(questions);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  getPreguntas(): Observable<Question[]>{
    const orderRef = collection(this.firestore, 'preguntas');
    return new Observable<Question[]>(observer => {
      getDocs(orderRef)
        .then(querySnapshot => {
          const questions: Question[] = [];
          querySnapshot.forEach(doc => {
            questions.push({ id: doc.id, ...doc.data() } as Question);
          });
          observer.next(questions);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}
