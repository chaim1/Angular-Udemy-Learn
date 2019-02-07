import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredien.model';
import { ShppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingrediens: Ingredient[];
  private subscription: Subscription;
  constructor( private slService: ShppingListService ) { }

  ngOnInit() {
    this.ingrediens = this.slService.getIngtredients();
    this.subscription =  this.slService.ingridientChanged.subscribe(
      (ingrediens: Ingredient[]) => {
        this.ingrediens = ingrediens;
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
