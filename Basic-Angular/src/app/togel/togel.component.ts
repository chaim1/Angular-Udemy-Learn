import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-togel',
  templateUrl: './togel.component.html',
  styleUrls: ['./togel.component.css']
})
export class TogelComponent implements OnInit {
  showsicret = false;
  log = [];
  constructor() { }

  ngOnInit() {
  }

  onclick(){
    this.showsicret = !this.showsicret;
    this.log.push(this.log.length +1)
  }
}
