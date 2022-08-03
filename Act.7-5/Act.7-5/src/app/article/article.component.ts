import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  titre!:string;
  contenu!:string;
  auteur!:string;
  dateDePublication!:string;

  article$!:Observable<Articles[]>


  constructor(private articlesservice :ArticlesService,private router:Router) { }

  ngOnInit(): void {
    this.article$= this.articlesservice.getArticles()

  }


  onSubmitForm(form:NgForm){
    console.log(form.value);
  }
  onAddNewArticle(){
    this.router.navigateByUrl('/create');
  }

}
