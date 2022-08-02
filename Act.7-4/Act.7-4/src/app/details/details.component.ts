import { Component, OnInit,Input } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Articles } from '../articles';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // @Input() public deatilsfromarticle;
  article: Articles | undefined;
  constructor( private router:Router,  private route: ActivatedRoute,
    private articleService: ArticlesService)
     { }

  ngOnInit(): void {
    this.GoToDetails();
  }
  

  GoToDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getDetail(id)
      .subscribe(article => this.article = article);
  }

}
