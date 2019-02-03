import { EventEmitter } from '@angular/core';

import { Recipe } from './recipes.model';
import { Ingredient } from '../shared/ingredien.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe( 'A Test Recipe 1',
         'This test recipe', 
         'http://4k.com/wp-content/uploads/2014/06/4k-image-tiger-jumping.jpg',
         [
             new Ingredient('Meat', 6),
             new Ingredient('France Fries',20)
         ]),
        new Recipe( 'A Test Recipe 2', 
        'This test recipe', 
        'http://i.imgur.com/RRUe0Mo.png',
        [
            new Ingredient('Bunz', 4),
            new Ingredient('Meat',1)
        ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}