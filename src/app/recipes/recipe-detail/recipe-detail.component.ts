import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import { StoreModel } from '../../shopping-list/store/store.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  content: Recipe;
  id: number;
  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute,
              private router: Router,
              public auth: AuthService,
              private store: Store<StoreModel>) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.content = this.recipeService.getRecipe(this.id);
    });
  }

  public sendToList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.content.ingredients));
  }

  onDeleteRecipe(index: number) {
    this.recipeService.deleteRecipe(index);
    this.router.navigate(['/recipes']);
  }
}
