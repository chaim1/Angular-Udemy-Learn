import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredien.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediens: Ingredient[] = [
    new Ingredient( 'Aplles', 5 ),
    new Ingredient( 'Tomatoes', 10)
  ];
  constructor() { }

  ngOnInit() {
  }

}
