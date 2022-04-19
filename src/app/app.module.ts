import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ListCocktailsComponent } from './activity/list-cocktails/list-cocktails.component';
import { FavoriteCocktailsComponent } from './cocktails/favorite-cocktails/favorite-cocktails.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListCocktailsComponent,
    FavoriteCocktailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
