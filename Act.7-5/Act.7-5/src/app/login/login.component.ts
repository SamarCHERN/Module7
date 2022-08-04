import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;
  constructor(private formbuilder :FormBuilder,private loginService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group({
      username:[null],
      password:[null],

    })
}
 
  onSubmitForm() {
    this.loginService.login(this.loginform.value);
    this.router.navigateByUrl('/articles');
  }

}
