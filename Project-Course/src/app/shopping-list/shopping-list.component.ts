import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredien.model';
import { ShppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediens: Ingredient[];
  constructor( private slService: ShppingListService ) { }

  ngOnInit() {
    this.ingrediens = this.slService.getIngtredients();
    this.slService.ingridientChanged.subscribe(
      (ingrediens: Ingredient[]) => {
        this.ingrediens = ingrediens;
      }
    );
  }
}
