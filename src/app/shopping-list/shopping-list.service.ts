import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions';
import { Injectable } from '@angular/core';
import { StoreModel } from './store/store.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [];

  constructor(private store: Store<StoreModel>) { }

  addIngredient(ingredient: Ingredient, emit: boolean = true) {
    this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
  }

  addIngredients(ingredients: Ingredient[]) {
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
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
}
