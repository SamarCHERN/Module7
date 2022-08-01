import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  titre!:string;
  description!:string;
  auteur!:string;
  date!:string;

  article:Articles[]=[];
  constructor(private articlesservice :ArticlesService,private router:Router) { }

  ngOnInit(): void {
    this.getArticles();
  }
  getArticles(){
    this.article=this.articlesservice.getArticles();
  }

  onSubmitForm(form:NgForm){
    console.log(form.value);
  }
  onAddNewArticle(){
    this.router.navigateByUrl('/create');
  }

}
