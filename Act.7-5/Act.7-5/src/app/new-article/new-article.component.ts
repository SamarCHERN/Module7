import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticlesService } from '../services/articles.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  articleform!:FormGroup;

  constructor(private formbuilder :FormBuilder,private ArticlesService: ArticlesService,private router: Router) { }

  ngOnInit(): void {
    this.articleform=this.formbuilder.group({
      titre:[null,Validators.required],
      contenu:[null,Validators.required],
      auteur:[null],
      dateDePublication:[null],

    })
}
 
  onSubmitForm() {
    this.ArticlesService.addArticle(this.articleform.value).subscribe();
    this.router.navigateByUrl('/articles');
  }

}



