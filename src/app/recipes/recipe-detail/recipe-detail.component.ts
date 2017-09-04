import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { Ingredient } from "../../shared/ingredient.model";
import { RecipesService } from "../recipes.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() content: Recipe;
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

  public sendToList(ingredients: Ingredient[]) {
    this.recipeService.addIngredientsToShoppingList(this.content.ingredients);
  }
}
