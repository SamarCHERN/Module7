import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  articleform!:FormGroup;
  constructor(private formbuilder :FormBuilder,private ArticlesService: ArticlesService,private router: Router) { }

  ngOnInit(): void {
    this.articleform=this.formbuilder.group({
      username:[null],
      password:[null],

    })
}
 
  onSubmitForm() {
    this.ArticlesService.login(this.articleform.value);
    this.router.navigateByUrl('/articles');
  }

}
