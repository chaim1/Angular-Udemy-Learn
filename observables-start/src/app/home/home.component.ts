import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Rx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: number) =>{
    //     console.log(number);
    //   }
    // );
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first ob');
      }, 2000);
      setTimeout(() => {
        observer.next('secend ob');
      }, 4000);
      setTimeout(() => {
        observer.next('third ob');
      }, 6000);
      setTimeout(() => {
        observer.error('error ob');
      }, 7000);
      setTimeout(() => {
        observer.complete();
      }, 8000);
    });
    myObservable.subscribe(
      (data: string )=>{console.log(data);},
      (error: string)=>{console.log(error);},
      ()=>{console.log('complete');}
    );

  }

}
