import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing',
  templateUrl: './practicing.component.html',
  styleUrls: ['./practicing.component.css']
})
export class PracticingComponent implements OnInit {
  username = '';
  constructor() { }

  ngOnInit() {
  }
  resetUserName(){
    this.username = '';
  }

}
