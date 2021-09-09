import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { PokeInputComponent } from './components/poke-input/poke-input.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeModalComponent } from './components/poke-modal/poke-modal.component';
import { PokePaginatorComponent } from './components/poke-paginator/poke-paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardDetailsComponent,
    PokeInputComponent,
    PokeCardComponent,
    PokeModalComponent,
    PokePaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
