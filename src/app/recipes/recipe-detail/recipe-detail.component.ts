import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

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
              public auth: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.content = this.recipeService.getRecipe(this.id);
    });
  }

  public sendToList() {
    this.recipeService.addIngredientsToShoppingList(this.content.ingredients);
  }

  onDeleteRecipe(index: number) {
    this.recipeService.deleteRecipe(index);
    this.router.navigate(['/recipes']);
  }
}
