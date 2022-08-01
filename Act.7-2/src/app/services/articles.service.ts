import { Injectable } from '@angular/core';
import { Articles } from '../articles';
import { ARTICLES } from '../list_articles';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  getArticles(): Articles[] {
    return ARTICLES;
  }
  getDetail(id: number):Observable<Articles> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = ARTICLES.find(h => h.id === id)!;
    return of(hero);
  }
  constructor() { }
}
