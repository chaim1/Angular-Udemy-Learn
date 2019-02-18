import { Ingredient } from '../shared/ingredien.model';
import { Subject } from 'rxjs';

export class ShppingListService {
    ingridientChanged = new Subject<Ingredient[]>();
    startedEniting = new Subject<number>();
    private ingrediens: Ingredient[] = [
        new Ingredient( 'Aplles', 5 ),
        new Ingredient( 'Tomatoes', 10)
      ];

      getIngtredients(){
        return this.ingrediens.slice();
      }

      getIngredient(index: number){
        return this.ingrediens[index];
      }

      addIngtredient(ingredient: Ingredient){
        this.ingrediens.push(ingredient);
        this.ingridientChanged.next(this.ingrediens.slice());
      }
      addIngredients(ingrediens: Ingredient[]){
        // for(let ingre of ingrediens){
        //     this.addIngredients(ingre);
        // }
        this.ingrediens.push(...ingrediens);
        this.ingridientChanged.next(this.ingrediens.slice());
      }

      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingrediens[index] = newIngredient;
        this.ingridientChanged.next(this.ingrediens.slice());
      }

}