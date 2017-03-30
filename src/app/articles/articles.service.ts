import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {

  constructor(private http: Http) { }

  getAllArticles () {
    return this.http.get('http://jsonplaceholder.typicode.com/posts').map(res => res.json());
  }

  getArticleById (id: number) {
    return this.http.get('http://jsonplaceholder.typicode.com/posts/' + id).map(res => res.json());
  }
}
