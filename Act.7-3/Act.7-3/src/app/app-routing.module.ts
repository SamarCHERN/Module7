import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticleComponent } from './article/article.component';
import { DetailsComponent } from './details/details.component';
import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
  // {path:"**" , component:AccueilComponent} ,
  {path:"articles" , component:ArticleComponent},
  {path:"" , component:AccueilComponent},
  {path:"details/:id" , component:DetailsComponent},
  {path:"create" , component:NewArticleComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
