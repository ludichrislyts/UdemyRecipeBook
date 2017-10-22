import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/dataStorage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private _dataStorageService: DataStorageService,
              public _auth: AuthService) {}

  onSaveData() {
    this._dataStorageService.storeRecipes().subscribe((response) => {
      console.log(response);
    });
  }

  onFetchData() {
    this._dataStorageService.fetchRecipes();
  }

  onLogout() {
    this._auth.logout();
  }
}
