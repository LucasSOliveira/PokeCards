import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { CardDetailsComponent } from './pages/card-details/card-details.component'

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'card/:id', component: CardDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
