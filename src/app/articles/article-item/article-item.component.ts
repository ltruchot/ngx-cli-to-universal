import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from './../articles.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  providers: [ArticlesService]
})
export class ArticleItemComponent implements OnInit {
  viewData: any = {
    article: null
  };
  constructor(private articlesService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id: number = +params['id'];
      this.retrieveArticleById(id);
    });
  }

  retrieveArticleById (id: number) {
    this.articlesService.getArticleById(id).subscribe(article => {
      if (article) {
        this.viewData.article = article;
      }
    });
  }

}
