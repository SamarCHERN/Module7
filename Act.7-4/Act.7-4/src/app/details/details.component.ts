import { Component, OnInit,Input } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Articles } from '../articles';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  article$!:Observable<Articles>

  constructor( private router:Router,  private route: ActivatedRoute,
    private articleService: ArticlesService,private http: HttpClient)
     { }

  ngOnInit(): void {
    this.GoToDetails();
  }
  

  GoToDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article$=this.articleService.getDetail(id);
  }

}
