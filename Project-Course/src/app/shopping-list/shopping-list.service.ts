import { Ingredient } from '../shared/ingredien.model';
import { EventEmitter } from '@angular/core';

export class ShppingListService {
    ingridientChanged = new EventEmitter<Ingredient[]>();
    private ingrediens: Ingredient[] = [
        new Ingredient( 'Aplles', 5 ),
        new Ingredient( 'Tomatoes', 10)
      ];

      getIngtredients(){
        return this.ingrediens.slice();
      }
      addIngtredients(ingredient: Ingredient){
        this.ingrediens.push(ingredient);
        this.ingridientChanged.emit(this.ingrediens.slice());
      }
}