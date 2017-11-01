import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { FIREBASE_URL } from './constants';
import 'rxjs/Rx';
import { Recipe } from '../recipes/recipe.model';
// import { AuthService } from '../auth/auth.service';
// import { HttpParams } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesService,
    // private auth: AuthService
  ) {}

  storeRecipes() {
    // const token = this.auth.getToken();

    // return this.http.put(FIREBASE_URL + token, this.recipesService.getRecipes());

    // return this.http.put(FIREBASE_URL, this.recipesService.getRecipes(), {
    //   observe: 'events',
    //   params: new HttpParams().set('auth', token)
    // });
    const req = new HttpRequest(
      'PUT',
      FIREBASE_URL,
      this.recipesService.getRecipes(),
      {
        reportProgress: true,
        // params: new HttpParams().set('auth', token)
      }
    );

    return this.http.request(req);
  }

  fetchRecipes() {
    // const token = this.auth.getToken();

    this.http
      .get<Recipe[]>(FIREBASE_URL, {
        // params: new HttpParams().set('auth', token)
      })
      .map(recipes => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe.ingredients = [];
          }
        }
        return recipes;
      })
      .subscribe(recipes => {
        this.recipesService.setRecipes(recipes);
      });
  }
}
