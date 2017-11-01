import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipesService {
  private recipes: Recipe[] = [];
  updateRecipes = new Subject<Recipe[]>();

  constructor() {
    this.recipes.push(new Recipe(
      'A Test Recipe',
      'This is a little test recipe',
      '/assets/images/potatoes-french-mourning-funny-162971.jpeg',
      [new Ingredient('meat', 5), new Ingredient('French Fries', 20)]
    ));
    this.recipes.push(new Recipe(
      'Another Test Recipe',
      'This is another little test recipe',
      '/assets/images/potatoes-french-mourning-funny-162971.jpeg',
      [new Ingredient('meat', 1), new Ingredient('Tomato', 1)]
    ));
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  saveRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.publishRecipes();
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.publishRecipes();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.publishRecipes();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.publishRecipes();
  }

  publishRecipes() {
    this.updateRecipes.next([...this.recipes]);
  }
}
