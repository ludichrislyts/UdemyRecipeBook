import { Ingredient } from '../../shared/ingredient.model';
export interface StoreModel {
  shoppingList: {
    ingredients: Ingredient[]
  };
}
