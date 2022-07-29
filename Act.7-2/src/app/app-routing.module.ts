import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticleComponent } from './article/article.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  // {path:"**" , component:AccueilComponent} ,
  {path:"articles" , component:ArticleComponent},
  {path:"" , component:AccueilComponent},
  {path:"detail/:id" , component:DetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
