import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article:Articles[]=[];
  constructor(private articlesservice :ArticlesService,private router:Router) { }

  ngOnInit(): void {
    this.getArticles();
  }
  getArticles(){
    this.article=this.articlesservice.getArticles();
  }

  goToDetails(){
    this.router.navigate(["/details"])
  }

}
