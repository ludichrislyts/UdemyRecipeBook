import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [];

  constructor() {}

  addIngredient(ingredient: Ingredient, emit: boolean = true) {
    const index = this.checkIngredientList(ingredient.name);
    if (index >= 0) {
      this.ingredients[index].amount += ingredient.amount;
    }    
    else {
      this.ingredients.push(ingredient);
    }
    if (emit) {
      this.ingredientsChanged.next(this.ingredients.slice());
    }
  }

  addIngredients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient, false);
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next([...this.ingredients]);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  checkIngredientList(name: string): number {    
    let listIndex = -1;
    if (this.ingredients.length > 0) {
      this.ingredients.forEach((value, index) => {
        if (value.name === name) {
          listIndex = index;
        }
      });
    }
    return listIndex;
  }
}