import { Component } from '@angular/core';
import { DataStorageService } from "../shared/dataStorage.service";
import { Response } from '@angular/http';
import { RecipesService } from "../recipes/recipes.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private recipesService: RecipesService,
              private auth: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onLogout() {
    this.auth.logout();
  }
}