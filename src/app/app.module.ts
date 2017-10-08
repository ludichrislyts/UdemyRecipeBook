import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRouterModule } from './app-router.module';
import { HomeComponent } from './home/home.component';
import { RecipesService } from './recipes/recipes.service';
import { DataStorageService } from './shared/dataStorage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRouterModule,
    HttpModule,
    SharedModule
  ],
  providers: [
    ShoppingListService,
    RecipesService,
    DataStorageService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
