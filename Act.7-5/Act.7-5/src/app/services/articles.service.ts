import { Injectable } from '@angular/core';
import { Articles } from '../articles';
import { ARTICLES } from '../list_articles';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articlesList =ARTICLES;

  getDetail(id: number):Observable<Articles> {

    return this.http.get<Articles>(`http://localhost:8000/api/article/${id}`);
  }
  constructor(private http: HttpClient) { }

  addArticle(articleform:FormGroup ): Observable <any> 
  {
    return this.http.post<any>('http://localhost:8000/api/article/',articleform);
  }

  getArticles():Observable<Articles[]>
  {
    return this.http.get<Articles[]>('http://localhost:8000/articles');
  }

 login(userInput:FormGroup ) {

  return this.http.post<any>('http://127.0.0.1:8000/api/login_check',userInput)
     .subscribe(
             response => {
                 if (response) {
                     localStorage.setItem('jwt', JSON.stringify(response));
                 }
             })
}
}
