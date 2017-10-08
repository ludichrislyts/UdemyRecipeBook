import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipesService } from '../recipes/recipes.service';
import { FIREBASE_URL } from './constants';
import 'rxjs/Rx';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipesService: RecipesService,
              private auth: AuthService) { }

  storeRecipes() {
    const token = this.auth.getToken();
    return this.http.put(FIREBASE_URL + token, this.recipesService.getRecipes());
  }

  fetchRecipes() {
    const token = this.auth.getToken();

    this.http.get(FIREBASE_URL + token).map((response: Response) => {
      const recipes: Recipe[] = response.json();
      for (let recipe of recipes) {
        if (!recipe['ingredients']) {
          recipe.ingredients = [];
        }
      }
      return recipes;
    }).subscribe((recipes: Recipe[]) => {
      this.recipesService.setRecipes(recipes);
    })
  }

}