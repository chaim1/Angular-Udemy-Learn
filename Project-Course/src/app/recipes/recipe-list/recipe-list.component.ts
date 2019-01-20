import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe( 'A Test Recipe', 'This test recipe', 'http://4k.com/wp-content/uploads/2014/06/4k-image-tiger-jumping.jpg'),
    new Recipe( 'A Test Recipe', 'This test recipe', 'http://4k.com/wp-content/uploads/2014/06/4k-image-tiger-jumping.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
