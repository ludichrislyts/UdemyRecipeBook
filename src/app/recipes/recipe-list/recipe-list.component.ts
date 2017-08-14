import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a little test recipe', 'https://static.pexels.com/photos/162971/potatoes-french-mourning-funny-162971.jpeg')
  ];
  @Output() viewRecipe = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  recipeClicked(recipe: Recipe) {
    this.viewRecipe.emit(recipe);
  }

}
