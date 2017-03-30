import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './../articles.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  providers: [ArticlesService]
})
export class ArticleListComponent implements OnInit {
  viewData: any = {
    articles: []
  };
  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getAllArticles().subscribe(articles => {
      if (articles) {
        this.viewData.articles.push(...articles);
      }
    });
  }

}
