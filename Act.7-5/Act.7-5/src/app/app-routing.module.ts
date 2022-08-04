import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticleComponent } from './article/article.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth-guard.service';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';

const routes: Routes = [
  // {path:"**" , component:AccueilComponent} ,
  {path:"articles" , component:ArticleComponent,canActivate: [AuthGuard]},
  {path:"" , component:AccueilComponent},
  {path:"details/:id" , component:DetailsComponent,canActivate: [AuthGuard]},
  {path:"create" , component:NewArticleComponent,  canActivate: [RoleGuard], 
  data: { 
    expectedRole: 'ROLE_ADMIN'
  }},
  {path:"login" , component:LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
