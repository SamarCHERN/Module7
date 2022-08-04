import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private http: HttpClient,public jwtHelper: JwtHelperService,private router:Router) { }
    
    login(userInput:FormGroup ) {

        return this.http.post<any>('http://127.0.0.1:8000/api/login_check',userInput)
           .subscribe(
                   response => {
                       if (response) {
                           localStorage.setItem('jwt', JSON.stringify(response));
                       }
                   })
      }
      public isAuthenticated(): boolean {
        const token = localStorage.getItem('jwt') as string;
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
      }

      
 }