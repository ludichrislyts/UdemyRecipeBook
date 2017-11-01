import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INDGREDIENT';

const initialState = {ingredients: [
  new Ingredient('appleTest', 5),
  new Ingredient('cheeseTest', 4)
]};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      checkIngredientList(state.ingredients, action, false);
      if (action.payload != null) {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    } else {
      return {
        ...state,
        ingredients: [...state.ingredients]
      };
    }
    case ShoppingListActions.ADD_INGREDIENTS:
      checkIngredientList(state.ingredients, action.payload);
      if (action.payload.length > 0) {
        return {
          ...state,
          ingredients: [...state.ingredients, ...action.payload]
        };
      } else {
        return {
          ...state,
          ingredients: [...state.ingredients]
        };
      }
    default: return state;
  }

}

function checkIngredientList(ingredients: Ingredient[], payload: any, isArray: boolean = true) {
  if (ingredients.length > 0) {
    ingredients.some((storeValue): boolean => {
        if (isArray) {
          checkArray(storeValue, payload);
        } else {
          checkSingle(storeValue, payload);
          return true;
        }
    });
  }
}

function checkSingle(ingredient: Ingredient, action) {
  if (ingredient.name === action.payload.name) {
    ingredient.amount += action.payload.amount;
    action.payload = null;
  }
}

function checkArray(value: Ingredient, payload: Ingredient[]) {
  payload.forEach((payloadValue, index) => {
    if (payloadValue.name === value.name) {
      value.amount += payloadValue.amount;
      payload.splice(index, 1);
    }
  });
}
