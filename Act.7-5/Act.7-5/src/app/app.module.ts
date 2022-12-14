import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewArticleComponent } from './new-article/new-article.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './interceptor';
import { JwtHelperService , JWT_OPTIONS } from '@auth0/angular-jwt';

import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AccueilComponent,
    HeaderComponent,
    DetailsComponent,
    NewArticleComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}, { provide: JWT_OPTIONS , useValue: JWT_OPTIONS},
    AuthGuardService, JwtHelperService,RoleGuardService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
