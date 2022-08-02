import { Injectable } from '@angular/core';
import { Articles } from '../articles';
import { ARTICLES } from '../list_articles';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articlesList =ARTICLES;
  getArticles(): Articles[] {
    return ARTICLES;
  }
  getDetail(id: number):Observable<Articles> {
    const hero = ARTICLES.find(h => h.id === id)!;
    return of(hero);
  }
  constructor() { }
  addArticle(formValue: { titre: string, contenu: string, dateDePublication: Date, auteur: string }) {
    const article = {
        ...formValue,
        commentaires: '',
        id: 0
    };
    this.articlesList.push(article);
}
}
