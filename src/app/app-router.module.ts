import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { EmptyRecipeComponent } from "./recipes/empty-recipe/empty-recipe.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: EmptyRecipeComponent, pathMatch: 'full' },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})

export class AppRouterModule {
}