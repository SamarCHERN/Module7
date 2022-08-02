import { Injectable } from '@angular/core';
import { Articles } from '../articles';
import { ARTICLES } from '../list_articles';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articlesList =ARTICLES;


  getDetail(id: number):Observable<Articles> {

    return this.http.get<Articles>(`http://localhost:8000/articles/${id}`);
  }
  constructor(private http: HttpClient) { }

  addArticle(articleform:FormGroup ): Observable <any> 
  {
    return this.http.post<any>('http://localhost:8000/article',articleform);
  }

  getArticles():Observable<Articles[]>
  {
    return this.http.get<Articles[]>('http://localhost:8000/articles');
  }

}
