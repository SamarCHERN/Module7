import { Injectable } from '@angular/core';
import { Articles } from '../articles';
import { ARTICLES } from '../list_articles';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  getArticles(): Articles[] {
    return ARTICLES;
  }
  getDetail(){
    
  }
  constructor() { }
}
