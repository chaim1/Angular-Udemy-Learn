import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
@Input('num') numA:number;

  constructor() { }

  ngOnInit() {
    console.log(this.numA);
  }

}
