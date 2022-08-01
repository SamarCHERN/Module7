import { Component, OnInit,Input } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Articles } from '../articles';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // @Input() public deatilsfromarticle;
  constructor( private router:Router)
     { }

  ngOnInit(): void {
  }
  GoToDetails(){
    this.router.navigate(["/articles"])
  }

}
