import { Component, OnInit } from '@angular/core';
import { nums } from './modul.num';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  numArray = [];
  setinterval:any; 
  innterval = false;
  constructor() { 

  }

  ngOnInit() {
  }
  startSetInterval(){
    this.innterval = true;
    this.setinterval =  setInterval(()=>{
      this.numArray.push(this.numArray.length+1)
      // alert(this.numArray.length)
    },1000)
  }
  stopSetInterval(){
    clearInterval(this.setinterval);
  }
}
