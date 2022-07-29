import { Component, OnInit,Input } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Articles } from '../articles';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // @Input() public deatilsfromarticle;
  constructor( 
    // private route :Articles,
    // private routeservice :ArticlesService
    ) { }

  ngOnInit(): void {
  }

}
